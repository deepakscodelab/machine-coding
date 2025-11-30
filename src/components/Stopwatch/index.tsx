import { useEffect, useState } from "react";
import "./index.css";

export default function Stopwatch() {
  const [currentTime, setCurrentTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId: number | undefined;
    if (isRunning) {
      intervalId = setInterval(() => {
        setCurrentTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setCurrentTime(0);
  };

  return (
    <div className="container">
      <div>Stop watch:{currentTime}</div>
      <button onClick={() => handleStartStop()}>
        {isRunning ? "Stop" : "Start"}
      </button>
      <button onClick={() => handleReset()}>Reset</button>
    </div>
  );
}
