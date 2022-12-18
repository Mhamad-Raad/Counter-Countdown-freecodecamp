import { HiPlayPause } from "react-icons/hi2";
import { HiRefresh } from "react-icons/hi";
import css from "./AudioButtons.module.css";

export default function AudioButtons() {
  return (
    <div className={css.AudioButtons}>
      <HiPlayPause className={css.ActionButton} />
      <HiRefresh className={css.ActionButton} />
    </div>
  );
}
