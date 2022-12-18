import { useState } from "react";

import Title from "./Components/Title";
import TimeLength from "./Components/TimeLength";
import CountdownSession from "./Components/CountdownSession";
import AudioButtons from "./Components/AudioButtons";
import CreatedBy from "./Components/CreatedBy";

import "./App.css";

function App() {
  const [breakLength, setBreakLength] = useState({
    second: 0,
    minute: 5,
  });
  const [sessionLength, setSessionLength] = useState({
    second: 0,
    minute: 25,
  });

  const incrementBreak = () => {
    setBreakLength((prev) => {
      if (prev.minute === 60) {
        return prev;
      }
      return { ...prev, minute: prev.minute + 1 };
    });
  };

  const decrementBreak = () => {
    setBreakLength((prev) => {
      if (prev.minute === 0) {
        return prev;
      }
      return { ...prev, minute: prev.minute - 1 };
    });
  };

  const incrementSession = () => {
    setSessionLength((prev) => {
      if (prev.minute === 60) {
        return prev;
      }
      return { ...prev, minute: prev.minute + 1 };
    });
  };

  const decrementSession = () => {
    setSessionLength((prev) => {
      if (prev.minute === 0) {
        return prev;
      }
      return { ...prev, minute: prev.minute - 1 };
    });
  };

  const reset = () => {
    setBreakLength({ second: 0, minute: 5 });
    setSessionLength({ second: 0, minute: 25 });
  };

  return (
    <div className="App">
      <Title />
      <div className="lengths">
        <TimeLength
          title="Break"
          time={breakLength}
          increment={incrementBreak}
          decrement={decrementBreak}
        />
        <TimeLength
          title="Session"
          time={sessionLength}
          increment={incrementSession}
          decrement={decrementSession}
        />
      </div>

      <CountdownSession currentSession="Session" timeLeft={sessionLength} />

      <AudioButtons reset={reset} />

      <CreatedBy />
    </div>
  );
}

export default App;

