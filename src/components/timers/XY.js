import React, {useState, useEffect} from "react";

// Import components
import Panel from "../generic/Panel";
import Input from "../generic/Input";
import DisplayRounds from "../generic/DisplayRounds";
import DisplayTime from "../generic/DisplayTime";
import { STATUS } from "../../utils/helpers"

const XY = () => {
  const [workSecs, setWorkSecs] = useState(0);
  const [rounds, setRounds] = useState(0);
  const [curSec, setCurSec] = useState(0);
  const [curRound, setCurRound] = useState(0);
  const [status, setStatus] = useState(STATUS.RESET);

  const timerTitle = "XY";
  const inputs = [
     <Input
      onChange={(event) => {
        const num = parseInt(event.target.value);
        // The number of seconds per round
        workSecs((num > 0 ? num : 0));
      }}
      label="Seconds"
      name="work"
      value={workSecs}
      key="1"
    />,
     <Input
     onChange={(event) => {
       const num = parseInt(event.target.value);
       // The number of rounds
       setRounds((num > 0 ? num : 0));
     }}
      label="Rounds"
      name="rounds"
      value={rounds}
      key="2"
    />
  ];
  // Countdown displays the single count down time
  const displayTimes = [
    <DisplayTime
      seconds={workSecs}
      key="1"
      active={false}
    />,
    <DisplayTime
      seconds={curSec}
      size='large'
      key="2"
      active={true}
    />
  ]
  const displayRounds = [
    <DisplayRounds
      numRounds={8} //{rounds}
      curRound={curRound || 3} //{curRound}
    />
  ];

  // Remove the state context
  useEffect(() => {
    console.log('OnMount: work', curSec, 'round', curRound);
    return () => {
      console.log('OnMount: work', curSec, 'round', curRound);
    }
  })

  // Address status change
  useEffect(() => {
    console.log('OnMount: work', curSec, 'round', curRound);
    return () => {
      console.log('OnMount: work', curSec, 'round', curRound);
    }
  }, [status]);

  return (
    <div>
      <Panel
          timerTitle={timerTitle}
          seconds={workSecs}
          curSecond={curSec}
          displayRounds={displayRounds}
          inputs={inputs}
          displayTimes={displayTimes}
          onReset={() => setStatus(STATUS.RESET)}
          onClick={this.onClick}
      />
    </div>
  );
}

export default XY;
