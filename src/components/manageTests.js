import { FaInfoCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import api from "../api";
import Button from "./button";

const TestBlock = (props) => {
    const setDataView = props.setDataView;
    const setNewIds = props.setNewIds;

    const test = props.test

    const newLogFromTest = () => {
        setNewIds([test.name, test.id, test.template]);
        setDataView("create-log");
    }

    return(
        <tr>
            <td>
                {test.name}
            </td>
            <td style={{textAlign: "center", display: "flex"}}>
                <div className="flex-grow"/>
                <Button go onClick={newLogFromTest}>
                    New Log
                </Button>
                <div className="flex-grow"/>
            </td>
        </tr>
    );
}

const ManageTests = (props) => {

    const setDataView = props.setDataView;
    const setNewIds = props.setNewIds;
    const [tests, setTests] = useState([]);

    useEffect(() => {
        console.log("hello world");
        api.get_test(localStorage.getItem("token"), handleGetTests);
    }, []);

    const handleGetTests = (data) => {
        console.log(data.result);
        setTests(data.result);
    }

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
                No tests. Create a new test below.
            </p>
        );
    }

    return(
        <div className="manage-tests panel">
            <h2 className="panel-title">Manage Tests</h2>
            <div className="spacer-20"/>
            {tests.length === 0 ? 
                <BlankMessage/>
                :
                <table style={{width: "calc(100% + 40px)"}}>
                    <thead>
                        <tr>
                            <td>Test Name</td>
                            <td style={{textAlign: "center"}}>
                                Options
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {tests.map((test, i) => {return(
                            <TestBlock
                                setDataView={setDataView}
                                setNewIds={setNewIds}
                                test={test} 
                                key={i}
                            />
                        )})}
                    </tbody>
                </table>
            }
            <div className="spacer-20"/>
            <Button onClick={() => {setDataView("create-test")}}>Create New Test</Button>
        </div>
    )
}

export default ManageTests;