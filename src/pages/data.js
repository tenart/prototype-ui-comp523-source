// import "./dashboard.css";

// import FormsPreview from "../components/formsPreview";
import { useState } from "react";
import CreateTest from "../components/createTest";
import Header from "../components/header";
import ManageTests from "../components/manageTests";
import ResumeFormPanel from "../components/resumeFormPanel";
import Sidebar from "../components/sidebar";

const Data = (props) => {

    const [dataView, setDataView] = useState("manage");

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
                {/* <FormsPreview/> */}
                {/* <ResumeFormPanel/> */}
                {dataView === "manage" ? 
                    <ManageTests setDataView={setDataView}/>
                    :
                    <></>
                }
                {dataView === "create" ? 
                    <CreateTest setDataView={setDataView}/>
                    :
                    <></>
                }
            </div>
        </>
    );
}

export default Data;