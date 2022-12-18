import css from "./CountdownSession.module.css";

import React from "react";

export default function CountdownSession({ currentSession, timeLeft }) {
  const style = timeLeft.minute === 0 && timeLeft.second < 60 ? css.danger : null;

  return (
    <div className={css.countdownBg}>
      <h3 className={`${css.currentSession} ${style}`}>{currentSession}</h3>
      <h3 className={`${css.timeLeft} ${style}`}>
        {`
      ${timeLeft.minute < 10 ? `0${timeLeft.minute}` : `${timeLeft.minute}`}: 
      ${timeLeft.second < 10 ? `0${timeLeft.second}` : `${timeLeft.second}`}`}
      </h3>
    </div>
  );
}
