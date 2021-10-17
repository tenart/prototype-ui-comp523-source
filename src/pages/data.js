// import "./dashboard.css";

// import FormsPreview from "../components/formsPreview";
import Header from "../components/header";
import ResumeFormPanel from "../components/resumeFormPanel";
import Sidebar from "../components/sidebar";

const Data = (props) => {
    const setView = props.setView;
    const menuItems = props.menuItems;
    const showSidebar = props.showSidebar;
    const setShowSidebar = props.setShowSidebar;
    
    return (
        <>
            <Header 
                showSidebar={showSidebar} 
                setShowSidebar={setShowSidebar}
                title="Enter Data"
            />
            <Sidebar 
                showSidebar={showSidebar}
                menuItems={menuItems} 
                active={-1}
                setView={setView}
            />
            <div className={showSidebar ? "main-content small" : "main-content big"}>
                {/* <FormsPreview/> */}
                <ResumeFormPanel/>
            </div>
        </>
    );
}

export default Data;