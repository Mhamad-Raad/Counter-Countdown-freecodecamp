import css from "./CountdownSession.module.css";

import React from "react";

export default function CountdownSession({currentSession, timeLeft}) {
  return <div className={css.countdownBg}>
    <h3 className={css.currentSession}>{currentSession}</h3>
    <h3 className={css.timeLeft}>{timeLeft}</h3>
  </div>;
}
