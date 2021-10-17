import "./profile.css";

import Header from "../components/header";
import Sidebar from "../components/sidebar";
import ProfilePanel from "../components/profilePanel";

const Profile = (props) => {
    const setView = props.setView;
    const menuItems = props.menuItems;
    const showSidebar = props.showSidebar;
    const setShowSidebar = props.setShowSidebar;
    
    return (
        <>
            <Header 
                showSidebar={showSidebar} 
                setShowSidebar={setShowSidebar}
                title="Profile"
            />
            <Sidebar 
                showSidebar={showSidebar}
                menuItems={menuItems} 
                active={3}
                setView={setView}
            />
            <div className={"main-content " + (showSidebar ? "small" : "big")}>
                <ProfilePanel setView={setView}/>
            </div>
        </>
    );
}

export default Profile;