// import "./dashboard.css";

import Header from "../components/header";
import Sidebar from "../components/sidebar";

const Settings = (props) => {
    const setView = props.setView;
    const menuItems = props.menuItems;
    const showSidebar = props.showSidebar;
    const setShowSidebar = props.setShowSidebar;
    
    return (
        <>
            <Header 
                showSidebar={showSidebar} 
                setShowSidebar={setShowSidebar}
            />
            <Sidebar 
                showSidebar={showSidebar}
                menuItems={menuItems} 
                active={4}
                setView={setView}
            />
            <div className={showSidebar ? "main-content small" : "main-content big"}>
                <p>Settings</p>
            </div>
        </>
    );
}

export default Settings;