import Button from "./button";
import "./css/notificationsDetails.css";
import RandomAvatar from "./randomAvatar";

const NotifRow = (props) => {
    const notification = props.notification;

    return(
        <div className="notif-row flex-row">
            <div>
                <RandomAvatar id={notification.from} className="row-avatar"/>
            </div>
            <div className="title">{notification.title}</div>
            <div className="time">{notification.time}</div>
            <div className="date">{notification.date}</div>
            <div className="controls"><Button>Options</Button></div>
        </div>
    );
}

const NotificationsDetails = (props) => {

    const notifications = props.notifications;

    return(
        <div className="panel notifications-details flex-col">
            <div className="flex-row">
                <h2 className="panel-title">Notification Center</h2>
                <div className="flex-grow"/>
                <div className="badge inset-shadow">4</div>
            </div>
            <div className="notifs-table">
                {notifications.map((notification, i) => {return(
                    <NotifRow key={i} notification={notification}/>
                )})}
            </div>
            <div className="spacer-20"/>
            <div className="flex-grow"/>
            <div className="flex-row">
                <Button>Mark All As Read</Button>
                <div className="flex-grow"/>
                <Button warn>Delete All</Button>
            </div>
        </div>
    );
}

export default NotificationsDetails;