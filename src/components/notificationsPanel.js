import Button from "./button";
import "./notificationsPanel.css";
import RandomAvatar from "./randomAvatar";

const NotifBlock = (props) => {
    const title = props.title;
    const time = props.time;
    const from = props.from;
    
    return(
        <div className="notif-block flex-row">
            <div className="notif-block-left">
                <RandomAvatar id={from} size={35} style={{marginRight: "10px"}}/>
            </div>
            <div className="notif-block-right">
                <h3>{title}</h3>
                <p>{time}</p>
            </div>
        </div>
    );
}

const NotificationsPanel = (props) => {
    const setView = props.setView;
    const notifications = props.notifications;

    return (
        <div className="notifications-wrapper panel flex-col">
            <div className="flex-row">
                <h2>
                    Notifications
                </h2>
                <div className="flex-grow"/>
                <div className="badge inset-shadow">
                    8
                </div>
            </div>
            <div className="spacer-20"/>
            <div className="notifs">
                {notifications.map((notif, i) => {return(
                    <NotifBlock 
                        key={i}
                        title={notif.title}
                        time={notif.time}
                        from={notif.from}
                    />
                )})}
            </div>
            <div className="spacer-20"/>
            <div className="flex-grow"/>
            <div className="flex-row">
                <div className="flex-grow flex flex-align-center">
                    <p className="text-small">4 more</p>
                </div>
                <Button onClick={()=>{setView("notifications")}}>See All Notifications</Button>
            </div>
        </div>
    );
    
}

export default NotificationsPanel;