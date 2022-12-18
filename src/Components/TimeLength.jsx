import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import css from "./TimeLength.module.css";

export default function TimeLength({ title, time, increment, decrement }) {
  return (
    <div className={css.length}>
      <h2 className={css.Ltitle}>{title} Length</h2>
      <div className={css.LtimeBg}>
        <FaArrowDown
          className={(css.LtimeGroup, css.arrowBtn)}
          onClick={decrement}
        />
        <p className={css.LtimeGroup}>{time}</p>
        <FaArrowUp
          className={(css.LtimeGroup, css.arrowBtn)}
          onClick={increment}
        />
      </div>
    </div>
  );
}
