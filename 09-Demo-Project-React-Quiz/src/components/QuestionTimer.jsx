import React, { useEffect, useState } from "react";

const QuestionTimer = ({ onTimeout, timeout , mode }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const questionTimeout = setTimeout(onTimeout, timeout);
    return () => {
      clearTimeout(questionTimeout);
    };
  }, [onTimeout, timeout]);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);

    return () => {
      clearInterval(progressInterval);
    };
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} className={mode} />;
};

export default QuestionTimer;
