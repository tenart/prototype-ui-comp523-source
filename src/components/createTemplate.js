import "./css/createTemplate.css"

import { useState } from "react";
import Button from "./button";

import { FaPlus } from"react-icons/fa";
import api from "../api";

const NewFieldButton = (props) => {
    const onClick = props.onClick;

    return(
        <Button style={{margin: "10px"}} onClick={onClick}>
            <FaPlus/> {props.children}
        </Button>
    )
}

const FieldBlock = (props) => {
    const updateField = props.updateField;
    const field = props.field;
    const index = props.index;

    const css = {
        wrapper: {
            backgroundColor: "red",
            margin: "10px"
        }
    }

    return(
        <>
            <div className="field-block">
                <input 
                    placeholder={field.name} 
                    type="text"
                    onChange={(e) => {updateField(e, field.role, index, "name")}}
                />
                <div className="spacer-5"/>
                <p className="text-sm">Column data type: 
                    <select onChange={(e) => {updateField(e, field.role, index, "type")}}>
                        <option>text</option>
                        <option>number</option>
                    </select>
                </p>
                
                {/* <p>{field.type}</p> */}
            </div>
        </>
    )
}

const CreateTemplate = (props) => {

    const [name, setName] = useState("");
    const [techFields, setTechFields] = useState([]);
    const [pathologistFields, setPathologistFields] = useState([]);

    const setManageView = props.setManageView;
    
    const newField = (role) => {
        const newField = {
            name: "Column Header",
            type: "text",
            role: role
        }
        if (role === "technician") {
            setTechFields([... techFields, newField]);
        } else {
            setPathologistFields([... pathologistFields, newField]);
        }
    } 

    const updateName = (e) => {
        let value = e.target.value;
        setName(value);
    }

    const updateField = (e, role, index, set) => {
        let value = e.target.value;
        const fields = (role === "technician") ? [... techFields] : [... pathologistFields]; 
        if (set === "name") {
            fields[index].name = value;
        } else {
            fields[index].type = value;
        }
        if (role === "technician") {
            setTechFields(fields);
        } else {
            setPathologistFields(fields);
        }
    }

    const createNewTemplate = () => {
        const template = {
            name: name,
            headers: {},
            token: localStorage.getItem("token")
        }
        for (let i = 0; i < techFields.length; i++) {
            template.headers[techFields[i].name] = [techFields[i].type, "technician"];
        }
        for (let i = 0; i < pathologistFields.length; i++) {
            template.headers[pathologistFields[i].name] = [pathologistFields[i].type, "pathologist"];
        }
        console.log(template);
        api.post_template_create(template, handleCreatePost)
    }

    const handleCreatePost = (data) => {
        console.log(data);
        setManageView("manage");
    }

    const css = {
        titleHeader: {
            fontSize: "var(--text-sm)",
            fontWeight: "bold",
            marginBottom: "10px"
        },
        sideHeaders: {
            borderBottom: "1px solid var(--theme-black-01)",
            padding: "10px",
            fontWeight: "bold",
            fontSize: "var(--text-sm)"
        }
    }

    return (
        <>
            <div className="panel">
                <h2 className="panel-title">
                    Create New Template
                </h2>

                <div className="spacer-20"/>

                <p style={css.titleHeader}>Template name</p>
                <input onChange={updateName} className="template-name" placeholder="Template Name" type="text"/>
                <div className="flex-row inset-shadow rounded">
                    <div className="flex-grow flex-col">
                        <p style={css.sideHeaders}>
                            Technician Fields
                        </p>
                        {techFields.map((field, i) => {return(
                            <FieldBlock
                                field={field} 
                                key={i}
                                index={i}
                                updateField={updateField}
                            />
                        )})}
                        <NewFieldButton onClick={() => {newField("technician")}}>
                            New Technician Field
                        </NewFieldButton>
                    </div>
                    <div className="flex-grow flex-col">
                        <p style={css.sideHeaders}>
                            Pathologist Fields
                        </p>
                        {pathologistFields.map((field, i) => {return(
                            <FieldBlock 
                                field={field} 
                                key={i}
                                index={i}
                                updateField={updateField}
                            />
                        )})}
                        <NewFieldButton onClick={() => {newField("pathologist")}}>
                            New Pathologist Field
                        </NewFieldButton>
                    </div>
                </div>
                <div className="spacer-20"/>
                <div className="flex-row">
                    <Button special onClick={createNewTemplate}>
                        Create New Template
                    </Button>
                    <div className="flex-grow"/>
                    <Button warn onClick={() => {setManageView("manage")}}>
                        Cancel
                    </Button>
                </div>
            </div>
        </>
    )
}

export default CreateTemplate;