import React, {useRef} from "react";

import styled from "styled-components";

// Import the timers
import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";

import Button from "./generic/Button";

const Timers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Timer = styled.div`
  border: 1px solid gray;
  padding: 20px;
  margin: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const TimerTitle = styled.div``;

function App() {
  const curTimer = useRef(undefined);

  const timers = {
    stopwatch: { title: "Stopwatch", C: <Stopwatch /> },
    countdown: { title: "Countdown", C: <Countdown /> },
    xy: { title: "XY", C: <XY /> },
    tabata: { title: "Tabata", C: <Tabata /> },
  };

  //import Confetti from 'react-confetti'
  const timer = timers[curTimer];

  <Container>
    <Button
      size='large'
      active={false}
      text={(isRunning() ? 'End' : (isReset() ? 'Clear' : 'Reset'))}
      onClick={resetButtonFunc}
    />
    <Button
      size='large'
      active={true}
      text={(isRunning() ? 'Pause' : (isPaused() ? 'Resume' : 'Start'))}
      onClick={workButtonFunc}
    />
  </Container>

  return (
    <Timers>
      <div>
        <h1>Timers</h1>

      </div>
      { timer &&
        <Timer
          key={timer.title}
        >
          <TimerTitle>{timer.title}</TimerTitle>
          {timer.C}
        </Timer>
      }
    </Timers>
  );

/*
  return (
    <Timers>
      {timers.map((timer) => (
        <Timer
          key={timer.title}
        >
          <TimerTitle>{timer.title}</TimerTitle>
          {timer.C}
        </Timer>
      ))}
    </Timers>
  );
  */
}

export default App;
