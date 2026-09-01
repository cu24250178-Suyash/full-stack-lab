import { useEffect, useState } from "react";

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  const reset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div>
      <h2>Stopwatch: {seconds} seconds</h2>

      <button onClick={() => setIsRunning(true)}>
        Start
      </button>

      <button onClick={() => setIsRunning(false)}>
        Pause
      </button>

      <button onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default Stopwatch;
