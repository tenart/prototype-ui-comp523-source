// import "./dashboard.css";

import ManageTemplates from "../components/manageTemplates";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import CreateTemplate from "../components/createTemplate";
import { useState } from "react";

const Manage = (props) => {

    const [manageView, setManageView] = useState("manage");
    const setView = props.setView;
    const menuItems = props.menuItems;
    const showSidebar = props.showSidebar;
    const setShowSidebar = props.setShowSidebar;
    
    return (
        <>
            <Header 
                showSidebar={showSidebar} 
                setShowSidebar={setShowSidebar}
                title="Manage Templates"
            />
            <Sidebar 
                showSidebar={showSidebar}
                menuItems={menuItems} 
                active={2}
                setView={setView}
            />
            <div className={showSidebar ? "main-content small" : "main-content big"}>
                {manageView === "manage" ? 
                    <ManageTemplates setManageView={setManageView}/>
                    :
                    <></>
                }
                {manageView === "create" ? 
                    <CreateTemplate setManageView={setManageView}/>
                    :
                    <></>
                }
            </div>
        </>
    );
}

export default Manage;