// import "./dashboard.css";

import FormsPreview from "../components/formsPreview";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

const Manage = (props) => {
    const setView = props.setView;
    const menuItems = props.menuItems;
    const showSidebar = props.showSidebar;
    const setShowSidebar = props.setShowSidebar;
    
    return (
        <>
            <Header 
                showSidebar={showSidebar} 
                setShowSidebar={setShowSidebar}
                title="Manage Forms"
            />
            <Sidebar 
                showSidebar={showSidebar}
                menuItems={menuItems} 
                active={2}
                setView={setView}
            />
            <div className={showSidebar ? "main-content small" : "main-content big"}>
                <FormsPreview/>
            </div>
        </>
    );
}

export default Manage;