import "./header.css";

import { IoClose } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import { FaPencilAlt } from "react-icons/fa";

const Header = (props) => {
    const showSidebar = props.showSidebar;
    const setShowSidebar = props.setShowSidebar;
    const title = props.title;

    const toggleClick = () => {
        setShowSidebar(!showSidebar)
    }
    
    return(
        <div className="header-wrapper">
            <div className={showSidebar ? "header-corner show" : "header-corner hide"}>
                <img src="assets/unc-health-logo-w.svg"/>
                <button onClick={toggleClick} className="side-toggle" title={showSidebar ? "hide sidebar" : "show sidebar"}>
                    <div className="side-toggle-icon show">
                        {showSidebar ? 
                            <IoClose/>
                        :
                            <HiMenu/>
                        }
                    </div>
                </button>
            </div>
            <div className="header-content">

                <div className="header-title">
                    <h1>
                        {title}
                    </h1>
                </div>
                
                {/* <div className="header-block">
                    USER
                </div> */}
            </div>
        </div>
    );
}

export default Header;