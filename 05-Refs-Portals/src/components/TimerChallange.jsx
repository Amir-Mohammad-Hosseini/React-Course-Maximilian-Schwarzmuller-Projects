import React, { useEffect, useRef, useState } from "react";
import ResultModal from "./ResultModal";

const TimerChallange = ({ title, targetTime }) => {
  const timerRef = useRef();
  const dialogRef = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timerRef.current);
    dialogRef.current.open();
  }

  const handleStartTimer = () => {
    timerRef.current = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 10);
    }, 10);
  };

  const handleStopTimer = () => {
    clearInterval(timerRef.current);
    dialogRef.current.open();
  };
  const handleResetTimer = () => {
    setTimeRemaining(targetTime * 1000);
  };
  return (
    <>
      <ResultModal
        ref={dialogRef}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleResetTimer}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challange-time">
          {targetTime} second{targetTime > 1 && "s"}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStopTimer : handleStartTimer}>
            {timerIsActive ? "Stop" : "Start"} Challange
          </button>
        </p>
        <p className={timerIsActive ? "active" : ""}>
          {timerIsActive ? "Time is running ..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallange;
