import { useEffect, useState } from "react";
import api from "../api";

const TemplateFields = (props) => {
    const name = props.name;
    return(
        <tr>{name}</tr>
    )
}

const EditLog = (props) => {
    const logId = props.logId;
    const token = localStorage.getItem("token");
    const [template, setTemplate] = useState(undefined);
    const [test, setTest] = useState(undefined);
    const [log, setLog] = useState(undefined);

    useEffect(() => {
        api.get_log_id(logId, token, (data) => {
            setLog(data.result);
            getTemplate(data.result.template, data.result.test);
        });
    }, []);

    const getTemplate = (templateId, testId) => {
        api.get_template(token, (data) => {
            for (let i = 0; i < data.result.length; i++) {
                if (data.result[i].id === templateId) {
                    setTemplate(data.result[i]);
                    break;
                }
            }
            getTest(testId);
        });
    }

    const getTest = (testId) => {
        api.get_test(token, (data) => {
            for (let i = 0; i < data.result.length; i++) {
                if (data.result[i].id === testId) {
                    setTest(data.result[i]);
                    break;
                }
            }
        });
    }

    return(
        <div className="edit-log panel">
            <h2 className="panel-title">
                Viewing Open Log
            </h2>
            <div className="spacer-20"/>
            <table style={{width: "calc(100% + 40px)"}}>
                <thead>
                    <tr>
                        <td>
                            field 1
                        </td>
                        <td>
                            field 2
                        </td>
                        <td>
                            field 2
                        </td>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </div>
    )
}

export default EditLog;