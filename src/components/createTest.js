import "./css/createTest.css"

import Button from "./button";
import { useEffect, useState } from "react";
import api from "../api";

const TemplatePickerBlock = (props) => {
    const onClick = props.onClick;
    const template = props.template;
    
    return (
        <div className="flex-row template-option" style={{alignItems: "center"}}>
            <input onChange={onClick} type="radio" name="template" value={template.id}/>
            <label>{template.name}</label>
        </div>
    );
}

const CreateTest = (props) => {

    const setDataView = props.setDataView;
    const [templates, setTemplates] = useState([]);
    const [templateId, setTemplateId] = useState(undefined);
    const [name, setName] = useState(undefined);

    const onRadioClick = (e) => {
        const templateId = e.target.value;
        setTemplateId(templateId)
    }

    const onNameChange = (e) => {
        const name = e.target.value;
        setName(name)
    }

    const onNewTest = () => {
        const test = {
            name: name,
            template: templateId,
            fields: [],
            token: localStorage.getItem("token")
        };
        if (name !== undefined && templateId !== undefined) {
            console.log(test);
            api.post_test_create(test, () => {setDataView("manage")});
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("token");
        api.get_template(token, (data) => {setTemplates(data.result)});
    }, []);

    const css = {
        inputTitle: {
            fontSize: "var(--text-sm)",
            fontWeight: "bold",
            marginBottom: "10px"
        }
    }

    return(
        <div className="create-test panel">
            <h3 className="panel-title">Create New Template</h3>
            <div className="spacer-20"/>
            <div>
                <p style={css.inputTitle}>New Test Name</p>
                <input onChange={onNameChange} placeholder="Test Name" className="test-name-input"/>
                <div className="spacer-20"/>
                <p style={css.inputTitle}>Use Template</p>
                <div className="templates-picker">
                    {templates.map((template, i) => {return(
                        <TemplatePickerBlock 
                            template={template} 
                            onClick={onRadioClick}
                            key={i}
                        />
                    )})}
                </div>
            </div>
            <div className="spacer-20"/>
            <div className="flex-row">
                <Button special onClick={onNewTest}>
                    Create New Test
                </Button>
                <div className="flex-grow"/>
                <Button warn onClick={() => {setDataView("manage")}}>
                    Cancel
                </Button>
            </div>
        </div>
    );
}

export default CreateTest;