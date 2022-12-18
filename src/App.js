import { useState } from "react";
import Title from "./Components/Title";
import TimeLength from "./Components/TimeLength";
import "./App.css";

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);

  const incrementBreak = () => {
    setBreakLength((prev) => prev + 1);
  };

  const decrementBreak = () => {
    setBreakLength((prev) => prev - 1);
  };

  const incrementSession = () => {
    setSessionLength((prev) => prev + 1);
  };

  const decrementSession = () => {
    setSessionLength((prev) => prev - 1);
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
    </div>
  );
}

export default App;

