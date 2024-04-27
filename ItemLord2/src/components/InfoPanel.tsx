import { useSelector } from "react-redux";
import { AppState } from "../interface";
import styles from "./InfoPanel.module.css";

const InfoPanel = () => {
  const notifications = useSelector((state: AppState) => state.notifications);
  return (
    <>
      <div className={styles.infoBanner}>
        <h2>Information</h2>
      </div>
      <div className={styles.infos}>
        {notifications.map((message, index) => (
          <p key={index} style={{ color: message.color }}>
            {message.text}
          </p>
        ))}
      </div>
    </>
  );
};

export default InfoPanel;
