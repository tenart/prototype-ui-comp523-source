import "./sidebar.css";

import { FaPen } from "react-icons/fa";

const Sidebar = (props) => {
    const setView = props.setView;
    const showSidebar = props.showSidebar;
    const active = props.active;
    const menuItems = props.menuItems;

    const menuClick = (view) => {
        setView(view);
    }

    return(
        <div className={showSidebar ? "sidebar-wrapper show" : "sidebar-wrapper hide"}>
            
            <button 
                onClick={() => {setView("data")}}
                className={"enter-data side-menu-item" + (active === -1 ? " active" : "")}
            >
                <p className="side-menu-label">
                    Enter Data
                </p>
                <div className="side-menu-icon">
                    <FaPen/>
                </div>
            </button>

            {menuItems.map((item, i) => {return(
                <button onClick={() => {menuClick(item.view)}} key={i} className={(i == active)? "side-menu-item active" : "side-menu-item"}>
                    <p className="side-menu-label">{item.name}</p>
                    <div className="side-menu-icon">
                        {item.icon}
                    </div>
                </button>
            )})}
        </div>
    );
}

export default Sidebar;