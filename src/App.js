import React, { useEffect, useState } from 'react';
import './App.css'; 
import { FaStopwatch } from 'react-icons/fa'; 

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="app">
      <div className="stopwatch">
        <h1><FaStopwatch /> STOPWATCH</h1>
        <div className="time-display">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span>
        </div>
        <div className="buttons">
          {running ? (
            <button onClick={() => setRunning(false)}>Stop</button>
          ) : (
            <button onClick={() => setRunning(true)}>Start</button>
          )}
          <button onClick={() => {
            setTime(0);
            setRunning(false);
          }}>Restart</button>
        </div>
      </div>
    </div>
  );
}

export default App;
