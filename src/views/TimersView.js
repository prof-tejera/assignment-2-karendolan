import React, {useState} from "react";

import styled from "styled-components";

// Import the timers
import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";

import Button from "../components/generic/Button";

const Timers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Timer = styled.div`
  border: 1px solid gray;
  margin: 20px 0 20px;
  border-radius: 20%;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

function App() {
  //const curTimer = useRef(undefined);
  const [curTimer, setCurTimer] = useState(0);

  const timers = [
    { title: "Stopwatch", C: <Stopwatch /> },
    { title: "Countdown", C: <Countdown /> },
    { title: "XY", C: <XY /> },
    { title: "Tabata", C: <Tabata /> },
  ]

  // previous timer end, current timer load? via effect?
  const chooseTimer = (timer) => {
    console.log('KAREN Choosing timer', timer.title);
    setCurTimer(timer);
  };

  const timerElems = timers.map(timer => {
    return (
      <Button
        key={timer.title}
        size='large'
        active={true}
        text={timer.title}
        onClick={() => chooseTimer(timer)}
      />
    )
  })

  return (
    <Timers>
      <div>
        <h1>Timers</h1>
      </div>
      <div>
        <Container>
          {timerElems}
        </Container>
      </div>
        { curTimer && (
          <Timer>
            {curTimer.C}
          </Timer>
        )
      }
    </Timers>
  );
}

export default App;
