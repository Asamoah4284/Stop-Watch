import { useState } from "react";
import "./App.css";

export default function App() {
  const [sec, setSec] = useState(0);

  const startTimer = () => {
    window.myTimer = setInterval(() => {
      setSec((sec) => sec + 1);
    }, 1000);
  };
  const stopTimer = () => {
    clearInterval(window.myTimer);
  };
  const resetTimer = () => {
    clearInterval(window.myTimer);
    setSec(0);
  };
  return (
    <div className="all">
      <h1>Timer</h1>
      <div className="time">
        <p>{Math.trunc(sec / 60)}mins</p>
        <span>{sec % 60} sec</span>
      </div>
      <div className="btn">
        <button className=" btns green" onClick={startTimer}>
          Start
        </button>
        <button className=" btns red" onClick={stopTimer}>
          Stop
        </button>
        <button className=" btns yellow" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
}
