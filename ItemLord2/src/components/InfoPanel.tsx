import styles from "./InfoPanel.module.css";
import { notifications } from "../utils";

const InfoPanel = () => {
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
