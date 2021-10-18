import { useEffect, useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import api from "../api";
import Button from "./button";

const LogBlock = (props) => {
    const setDataView = props.setDataView;
    const setLogId = props.setLogId;
    const log = props.log;

    const onEditLog = () => {
        setLogId(log.id);
        setDataView("edit-log");
    }

    return (
        <tr>
            <td>
                {log.name}
            </td>
            <td style={{textAlign: "center"}}>
                {log.slides.length}
            </td>
            <td style={{display: "flex"}}>
                <div className="flex-grow"/>
                <Button go onClick={onEditLog}>
                    Go to Log
                </Button>
                <div className="flex-grow"/>
            </td>
        </tr>
    );
}

const ManageLogs = (props) => {

    const setDataView = props.setDataView;
    const setLogId = props.setLogId;
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        api.get_log(token, (data) => {setLogs(data.result)});
    }, []);

    const css = {
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
                No Logs. Create a new log from a test.
            </p>
        );
    }

    return (
        <div className="manage-logs panel">
            <h2 className="panel-title">
                Available Logs
            </h2>
            <div className="spacer-20"/>
                {logs.length === 0 ?
                    <BlankMessage/>
                    :
                    <table style={{width: "calc(100% + 40px)"}}>
                        <thead>
                            <tr>
                                <td>
                                    Log Name
                                </td>
                                <td style={{textAlign: "center"}}>
                                    # of Slides
                                </td>
                                <td style={{textAlign: "center"}}>
                                    Options
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            {logs.map((log, i) => {return(
                                <LogBlock 
                                    log={log}
                                    key={i}
                                    setDataView={setDataView}
                                    setLogId={setLogId}
                                />
                            )})}
                        </tbody>
                    </table>
                }
            {/* <div className="spacer-20"/> */}
        </div>
    )
}

export default ManageLogs;