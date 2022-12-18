import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import css from "./TimeLength.module.css";

export default function TimeLength({ title, time, increment, decrement, isPlaying }) {
  return (
    <div className={css.length}>
      <h2 className={css.Ltitle}>{title} Length</h2>
      <div className={css.LtimeBg}>
        <FaArrowDown
          className={(css.LtimeGroup, css.arrowBtn)}
          onClick={!isPlaying? decrement: null}
        />
        <p className={css.LtimeGroup}>{time.minute}</p>
        <FaArrowUp
          className={(css.LtimeGroup, css.arrowBtn)}
          onClick={!isPlaying? increment: null}
        />
      </div>
    </div>
  );
}
