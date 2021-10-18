// import "./dashboard.css";

// import FormsPreview from "../components/formsPreview";
import { useState } from "react";
import CreateLog from "../components/createLog";
import CreateTest from "../components/createTest";
import EditLog from "../components/editLog";
import Header from "../components/header";
import ManageLogs from "../components/manageLogs";
import ManageTests from "../components/manageTests";
import ResumeFormPanel from "../components/resumeFormPanel";
import Sidebar from "../components/sidebar";

const Data = (props) => {

    const [dataView, setDataView] = useState("manage");
    const [newIds, setNewIds] = useState(undefined);
    const [logId, setLogId] = useState(undefined);

    const setView = props.setView;
    const menuItems = props.menuItems;
    const showSidebar = props.showSidebar;
    const setShowSidebar = props.setShowSidebar;
    
    return (
        <>
            <Header 
                showSidebar={showSidebar} 
                setShowSidebar={setShowSidebar}
                title="Test Center"
            />
            <Sidebar 
                showSidebar={showSidebar}
                menuItems={menuItems} 
                active={-1}
                setView={setView}
            />
            <div className={showSidebar ? "main-content small" : "main-content big"}>
                {dataView === "manage" ? 
                    <>
                        <ManageTests 
                            setDataView={setDataView}
                            setNewIds={setNewIds}
                        />
                        <ManageLogs 
                            setDataView={setDataView}
                            setLogId={setLogId}
                        />
                    </>
                    :
                    <></>
                }
                {dataView === "create-test" ? 
                    <CreateTest 
                        setDataView={setDataView}
                    />
                    :
                    <></>
                }
                {dataView === "create-log" ? 
                    <CreateLog 
                        setDataView={setDataView}
                        newIds={newIds}
                    />
                    :
                    <></>
                }
                {dataView === "edit-log" ? 
                    // <EditLog 
                    //     setDataView={setDataView}
                    //     logId={logId}
                    // />
                    <ResumeFormPanel
                        setDataView={setDataView}
                    />
                    :
                    <></>
                }
            </div>
        </>
    );
}

export default Data;