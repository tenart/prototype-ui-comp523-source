import "./css/manageTemplates.css";

import { BiTable } from "react-icons/bi";
import { FaInfoCircle } from "react-icons/fa";
import Button from "./button";
import api from "../api";
import { useEffect, useState } from "react";

const FormBlock = (props) => {

    const name = props.name;

    const css = {
        formBlock: {
            boxShadow: "inset 0 0 0 1px var(--theme-black-01)",
            backgroundColor: "var(--theme-black-0-5)",
            // padding: "10px",
            borderRadius: "var(--round-sm)",
            overflow: "hidden",
            whiteSpace: "nowrap"
        },
        formName: {
            color: "var(--theme-main)",
            padding: "10px",
            paddingBottom: "0"
        },
        formIcon: {
            padding: "10px",
        },
        sub: {
            padding: "10px",
            borderLeft: "1px dotted var(--theme-black-01)",
            display: "flex",
            alignItems: "center",
        }
    }

    return(
        <div style={css.formBlock}>
            <p style={css.formName}>
                {name}
            </p>
            <hr/>
            <div className="flex-row" style={{marginTop: "-10px"}}>
                <div style={css.formIcon} className="flex-center flex-no-shrink">
                    <BiTable/>
                </div>
                <div style={css.sub} className="flex-grow">
                    Template A
                </div>
                <div style={css.sub} className="flex-grow">
                    5 Technicial Fields
                </div>
                <div style={css.sub} className="flex-grow">
                    4 Pathologist Fields
                </div>
            </div>
        </div>
    );

}

const TemplateBlock = (props) => {
    const template = props.template;

    let pathologistCount = 0;
    let technicianCount = 0;

    for (const fieldName in template.headers) {
        // console.log(template.headers[field]);
        if (template.headers[fieldName][1] === "technician") {
            technicianCount += 1;
        }
        if (template.headers[fieldName][1] === "pathologist") {
            pathologistCount += 1;
        }
    }

    return(
        <tr>
            <td>{template.name}</td>
            <td style={{textAlign: "center"}}>{technicianCount}</td>
            <td style={{textAlign: "center"}}>{pathologistCount}</td>
        </tr>
    )
}

const ManageTemplates = (props) => {

    const setManageView = props.setManageView;

    const [templates, setTemplates] = useState([]);
    
    const handleGetTemplates = (data) => {
        // console.log(data.result);
        console.log(data.result);
        setTemplates(data.result);
    }

    useEffect(() => {
        console.log("hello world");
        api.get_template(localStorage.getItem("token"), handleGetTemplates);
    }, []);
    

    const css = {
        title: {
            fontWeight: "bold",
            color: "var(--theme-main)",
            fontSize: "var(--text-lg)"
        },
        blankMessage: {
            backgroundColor: "var(--theme-black-0-5)",
            padding: "10px",
            borderRadius: "var(--round-sm)",
            display: "flex",
            alignItems: "center"
        }
    }

    const BlankMessage = (props) => {
        return(
            <p style={css.blankMessage}>
                <FaInfoCircle style={{marginRight: "5px"}}/>
                No templates. Create a new template below.
            </p>
        );
    }

    return(
        <>
            <div className="forms-preview panel flex-col">
                <h3 style={css.title}>
                    Manage Log Templates
                </h3>
                <div className="spacer-20"/>

                <div>
                    {templates.length === 0 ? 
                        <BlankMessage/>
                        :
                        <table>
                            <thead>
                                <tr>
                                    <td>Template Name</td>
                                    <td style={{textAlign: "center"}}>Tech. Columns</td>
                                    <td style={{textAlign: "center"}}>Path. Columns</td>
                                </tr>
                            </thead>
                            <tbody>
                                {templates.map((template, i) => {return(
                                    <TemplateBlock template={template} key={i}/>
                                )})}
                            </tbody>
                        </table>
                    }
                </div>

                {/* <div style={css.section}>
                    <FormBlock
                        name="Control Confirmation of Acceptability Log"
                    />
                    <div className="spacer-10"/>
                    <FormBlock
                        name="Reagent Lot Confirmation of Acceptability Log"
                    />
                    <div className="spacer-10"/>
                    <FormBlock
                        name="Another Form Name"
                    />
                </div> */}

                <div className="spacer-20"/>
                <div className="flex-grow"/>
                <div>
                    <Button onClick={() => {setManageView("create")}}>
                        Create New Template
                    </Button>
                </div>
            </div>
        </>
    );

}

export default ManageTemplates;