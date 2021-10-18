import "./dashboard.css";

import Header from "../components/header";
import Sidebar from "../components/sidebar";

import ProfilePanel from "../components/profilePanel";
import NotificationsPanel from "../components/notificationsPanel";
import ManageTemplates from "../components/manageTemplates";
import FormsHomePanel from "../components/formsHomePanel";

const Dashboard = (props) => {
    const setView = props.setView;
    const menuItems = props.menuItems;
    const showSidebar = props.showSidebar;
    const setShowSidebar = props.setShowSidebar;
    const notifications = props.notifications;
    
    return (
        <>
            <Header 
                showSidebar={showSidebar} 
                setShowSidebar={setShowSidebar}
                title="Dashboard"
            />
            <Sidebar 
                showSidebar={showSidebar}
                menuItems={menuItems} 
                active={0}
                setView={setView}
            />
            <div className={showSidebar ? "main-content small" : "main-content big"}>
                <div className="dash-panels">
                    <FormsHomePanel
                        setView={setView}
                    />
                    <NotificationsPanel 
                        small 
                        setView={setView} 
                        notifications={notifications}
                    />
                    <ProfilePanel 
                        small 
                        setView={setView}
                    />
                    {/* <FormsPreview/> */}
                    {/* <NotificationsPanel setView={setView}/> */}
                </div>
            </div>
        </>
    );
}

export default Dashboard;