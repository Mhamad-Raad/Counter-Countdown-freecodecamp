import css from "./TimeLength.module.css";

export default function TimeLength({title, time, increment, decrement}) {
  return (
    <div className={css.length}>
      <h2 className={css.Ltitle}>{title}</h2>
    </div>
  )
}
