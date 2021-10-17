// import "./dashboard.css";

import Header from "../components/header";
import NotificationsDetails from "../components/notificationsDetail";
import NotificationsPanel from "../components/notificationsPanel";
import Sidebar from "../components/sidebar";

const Notifications = (props) => {
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
                title="Notifications"
            />
            <Sidebar 
                showSidebar={showSidebar}
                menuItems={menuItems} 
                active={1}
                setView={setView}
            />
            <div className={"main-content flex-row " + (showSidebar ? "small" : "big")}>
                {/* <NotificationsPanel notifications={notifications} small/> */}
                <NotificationsDetails notifications={notifications}/>
            </div>
        </>
    );
}

export default Notifications;