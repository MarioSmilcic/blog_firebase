import { Card } from "../../components";
import { useNotificationsStore } from "../../store";
import "./notification.style.css";

export const Notification = () => {
  const { message, type } = useNotificationsStore();

  if (!message) return null;

  return (
    <div className="notification">
      <Card className={`notification-card ${type}`}>{message}</Card>
    </div>
  );
};
