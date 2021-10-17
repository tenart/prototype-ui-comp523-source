import "./App.css";
import "./reset.css";

import React, { useState } from "react";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Notifications from "./pages/notifications";
import Manage from "./pages/manage";
import Profile from "./pages/profile";
import Settings from "./pages/settings";
import Data from "./pages/data";

import { GoGear } from "react-icons/go";
import { MdDashboard } from "react-icons/md";
import { FaBell, FaUser } from "react-icons/fa";
import { AiFillProfile } from "react-icons/ai";

const App = () => {
    const [user, setUser] = useState(undefined);
    const [view, setView] = useState("login");
    const [showSidebar, setShowSidebar] = useState(false);
    const menuItems = [
        {
            name: "Dashboard",
            view: "dashboard",
            icon: <MdDashboard/>
        }, {
            name: "Notifications",
            view: "notifications",
            icon: <FaBell/>
        }, {
            name: "Manage Forms",
            view: "manage",
            icon: <AiFillProfile/>
        }, {
            name: "My Profile",
            view: "profile",
            icon: <FaUser/>
        }, 
        // {
        //     name: "Settings",
        //     view: "settings",
        //     icon: <GoGear/>
        // }
    ];
    const notifications = [
        {
            title: "15 new slides to complete",
            date: "12/25/21",
            time: "8:59 PM",
            type: "new",
            from: 4
        }, {
            title: "3 slides need attention",
            date: "12/24/21",
            time: "4:33 PM",
            type: "attention",
            from: 0
        }, {
            title: "6 new slides to complete",
            date: "12/24/21",
            time: "10:46 AM",
            type: "new",
            from: 1
        }, {
            title: "This is a notification",
            date: "12/23/21",
            time: "3:24 PM",
            type: undefined,
            from: 3
        }
    ];

    const logIn = (user) => {
        setUser(user);
        setView("dashboard");
    }

    switch (view) {
        case "auth":
            return(
                <Login onLogin={logIn}/>
            );
        case "dashboard":
            return(
                <Dashboard 
                    menuItems={menuItems}
                    showSidebar={showSidebar} 
                    setShowSidebar={setShowSidebar}
                    setView={setView}
                    notifications={notifications}
                />
            );
        case "notifications":
            return(
                <Notifications 
                    menuItems={menuItems}
                    showSidebar={showSidebar} 
                    setShowSidebar={setShowSidebar}
                    setView={setView}
                    notifications={notifications}
                />
            );
        case "manage":
            return(
                <Manage 
                    menuItems={menuItems}
                    showSidebar={showSidebar} 
                    setShowSidebar={setShowSidebar}
                    setView={setView}
                />
            );
        case "profile":
            return(
                <Profile 
                    menuItems={menuItems}
                    showSidebar={showSidebar} 
                    setShowSidebar={setShowSidebar}
                    setView={setView}
                />
            );
        case "settings":
            return(
                <Settings 
                    menuItems={menuItems}
                    showSidebar={showSidebar} 
                    setShowSidebar={setShowSidebar}
                    setView={setView}
                />
            );
        case "data":
            return(
                <Data 
                    menuItems={menuItems}
                    showSidebar={showSidebar} 
                    setShowSidebar={setShowSidebar}
                    setView={setView}
                />
            );
        default:
            return(
                <Login onLogin={logIn}/>
            );
    }
}

export default App;
