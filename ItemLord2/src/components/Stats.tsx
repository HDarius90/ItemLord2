import { useSelector } from "react-redux";
// import { AppState } from "../redux/reducers";
import styles from "./Stats.module.css";
import { AppState } from "../interface";

export default function Stats() {
  const stats = useSelector((state: AppState) => state.stats);
  return (
    <div className={styles.mainElement}>
      <h4>Stats</h4>
      <span className={styles.yellow}>Location: {stats.location}</span>
      <span className={styles.yellow}>Health: {stats.health}</span>
      <span className={styles.yellow}>
        Day: {stats.day}/{stats.lastDay}
      </span>
      <span className={styles.yellow}>Rank: {stats.rank}</span>
      <span className={styles.green}>Cash: ${stats.cash}</span>
      <span className={styles.green}>Bank: ${stats.bank}</span>
      <span className={styles.red}>Debt: ${stats.debt}</span>
    </div>
  );
}
