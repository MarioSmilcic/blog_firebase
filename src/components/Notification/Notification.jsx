import Card from "../Card/Card";
import { useNotificationsStore } from "../../store/notifications/notifications.store";
import "./notification.style.css";

const Notification = () => {
  const { message, type } = useNotificationsStore();

  if (!message) return null;

  return (
    <div className="notification">
      <Card className={`notification-card ${type}`}>{message}</Card>
    </div>
  );
};

export default Notification;
