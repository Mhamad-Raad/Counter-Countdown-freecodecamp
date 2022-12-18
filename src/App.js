import { useState, useEffect } from "react";

import Title from "./Components/Title";
import TimeLength from "./Components/TimeLength";
import CountdownSession from "./Components/CountdownSession";
import AudioButtons from "./Components/AudioButtons";
import CreatedBy from "./Components/CreatedBy";

import finish from "./Assets/A.mp3";

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

  const [isPlaying, setIsPlaying] = useState(false);

  const incrementBreak = () => {
    setBreakLength((prev) => {
      if (prev.minute === 60) {
        return prev;
      }
      return { ...prev, minute: prev.minute + 1, second: 0 };
    });
  };

  const decrementBreak = () => {
    setBreakLength((prev) => {
      if (prev.minute === 1) {
        return prev;
      } else if (prev.second !== 0) {
        return { ...prev, second: 0 };
      }
      return { ...prev, minute: prev.minute - 1 };
    });
  };

  const incrementSession = () => {
    setSessionLength((prev) => {
      if (prev.minute === 60) {
        return prev;
      }
      return { ...prev, minute: prev.minute + 1, second: 0 };
    });
  };

  const decrementSession = () => {
    setSessionLength((prev) => {
      if (prev.minute === 1) {
        return prev;
      } else if (prev.second !== 0) {
        return { ...prev, second: 0 };
      }
      return { ...prev, minute: prev.minute - 1 };
    });
  };

  const reset = () => {
    setBreakLength({ second: 0, minute: 5 });
    setSessionLength({ second: 0, minute: 25 });
    setIsPlaying(false);
  };

  const playPause = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    const audio = new Audio(finish);
    audio.volume = 1;

    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        if (sessionLength.second === 0 && sessionLength.minute === 0) {
          setBreakLength((prev) => {
            if (prev.second === 0) {
              return { ...prev, second: 59, minute: prev.minute - 1 };
            }
            return { ...prev, second: prev.second - 1 };
          });
        } else {
          setSessionLength((prev) => {
            if (prev.second === 0) {
              return { ...prev, second: 59, minute: prev.minute - 1 };
            }
            return { ...prev, second: prev.second - 1 };
          });
        }

        if (
          breakLength.second === 0 &&
          breakLength.minute === 0 &&
          sessionLength.second === 0 &&
          sessionLength.minute === 0
        ) {
          clearInterval(interval);
          audio.play();
          reset();
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, breakLength, sessionLength]);

  return (
    <div className="App">
      <Title />
      <div className="lengths">
        <TimeLength
          title="Break"
          time={breakLength}
          increment={incrementBreak}
          decrement={decrementBreak}
          isPlaying={isPlaying}
        />
        <TimeLength
          title="Session"
          time={sessionLength}
          increment={incrementSession}
          decrement={decrementSession}
          isPlaying={isPlaying}
        />
      </div>

      <CountdownSession
        currentSession={
          sessionLength.second === 0 && sessionLength.minute === 0
            ? "Break"
            : "Session"
        }
        timeLeft={
          sessionLength.second === 0 && sessionLength.minute === 0
            ? breakLength
            : sessionLength
        }
      />

      <AudioButtons playPause={playPause} reset={reset} />

      <CreatedBy />
    </div>
  );
}

export default App;

