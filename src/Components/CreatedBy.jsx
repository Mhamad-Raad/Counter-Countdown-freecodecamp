import css from './CreatedBy.module.css'

export default function CreatedBy () {
  return (
    <div className={css.about}>
      <p className={css.designed}>
        Coded by
      </p>
      <a
        className={css.by}
        href="https://www.linkedin.com/in/mhamad-raad"
        target="_blank"
        rel="noreferrer"
      >
        Mhamad Raad
      </a>
    </div>
  )
}
