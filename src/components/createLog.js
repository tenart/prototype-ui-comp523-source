import "./css/createLog.css";

import { useEffect, useState } from "react";
import api from "../api";
import Button from "./button";

const CreateLog = (props) => {
    const setDataView = props.setDataView;
    const newIds = props.newIds;

    const [name, setName] = useState(newIds[0]);

    const createNewLog = () => {
        const newName = (name !== newIds[0]) ? name : newIds[0];
        const log = {
            template: newIds[2],
            test: newIds[1],
            name: newName,
            token: localStorage.getItem("token")
        };
        // console.log(log);
        api.post_log_create(log, setDataView("manage"));
    }

    return(
        <div className="create-log panel">
            <h2 className="panel-title">Create New Log</h2>
            <div className="spacer-20"/>
            <div>
                <p style={{fontSize: "var(--text-sm)", fontWeight: "bold", marginBottom: "10px"}}>
                    New Log Name
                </p>
                <input 
                    className="log-name-input" 
                    type="text" 
                    defaultValue={newIds[0]}
                    onChange={(e) => {setName(e.target.value)}}
                />
                <p style={{fontSize: "var(--text-sm)", fontWeight: "bold", margin: "20px 0 10px"}}>
                    Debug
                </p>
                <p>testId#{newIds[1]}</p>
                <p>templateId#{newIds[2]}</p>
            </div>
            <div className="spacer-20"/>
            <div className="flex-row">
                <Button special onClick={createNewLog}>
                    Create New Log
                </Button>
                <div className="flex-grow"/>
                <Button warn onClick={() => {setDataView("manage")}}>
                    Cancel
                </Button>
            </div>
        </div>
    )
}

export default CreateLog;