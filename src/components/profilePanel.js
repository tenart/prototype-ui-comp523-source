import "./profilePanel.css";

import Button from "./button";

import { 
    FaUser, 
    FaPen, 
    FaPowerOff, 
    FaPalette 
} from "react-icons/fa";
import RandomAvatar from "./randomAvatar";

const Avatar = (props) => {
    return(
        <div className="avatar-wrapper">
            <FaUser/>
        </div>
    );
}

const ProfilePanel = (props) => {
    const setView = props.setView;
    const small = props.small;
    const user = props.user;

    if (small) {
        return(
            <div className="account-wrapper small panel flex-row">
                <div style={{display: "flex"}}>
                    <div className="avatar-banner">
                        {/* <Avatar/> */}
                        <RandomAvatar size={63}/>
                    </div>
                    <div className="truncate flex-col flex-grow">
                        <h2 className="user-name">Jane Doe</h2>
                        <p className="user-type">lab technician</p>
                        <p className="user-email truncate">jane_doe@unchealth.unc.edu</p>
                        
                        <div className="spacer-20"/>
                        <div className="flex-grow"/>

                        <Button style={{width: "min-content"}} onClick={() => {setView("profile")}}>
                            View Profile
                        </Button>
                    </div>
                </div>
            </div>
        );
    } else {
        return(
            <div className="account-wrapper big panel">
                <div className="avatar-banner flex-row">
                    {/* <Avatar/> */}
                    <RandomAvatar size={60}/>
                    <div className="flex-grow"/>
                    <Button style={{height: "min-content"}}>
                        <FaPalette/> Customize
                    </Button>
                </div>
                <p className="account-field">
                    Name
                </p>
                <h2 className="user-name">
                    Jane Doe
                </h2>
                <div className="spacer-10"/>
                <p className="account-field">
                    Email
                </p>
                <p className="user-email">
                    jane_doe@unchealth.unc.edu
                </p>
                <div className="spacer-10"/>
                <p className="account-field">
                    Role
                </p>
                <p className="user-type">
                    lab technician
                </p>
                <div className="spacer-20"/>
                <div className="flex-row">
                    <Button style={{marginRight: "10px"}}>
                        <FaPen/> Update
                    </Button>
                    <div className="flex-grow"/>
                    <Button warn onClick={() => {setView("auth")}}>
                        <FaPowerOff/> Sign Out
                    </Button>
                </div>
            </div>
        );
    }
}

export default ProfilePanel;