import React from "react";
import TimerProvider from "../context/TimerProvider";

import styled from "styled-components";

// Import the timers
import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";

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

const TimerTitle = styled.div``;

function App() {
  const timers = [
    //{ title: "Stopwatch", C: <Stopwatch /> },
    { title: "Countdown", C: <Countdown /> },
    //{ title: "XY", C: <XY /> },
    //{ title: "Tabata", C: <Tabata /> },
  ];

  //import Confetti from 'react-confetti'

  return (
    <TimerProvider>
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
    </TimerProvider>
  );
}

export default App;
