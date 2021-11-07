import React, {useState} from "react";

// Import components
import Panel from "../generic/Panel";
import Input from "../generic/Input";
import DisplayTime from "../generic/DisplayTime";
import DisplayRounds from "../generic/DisplayRounds";
import {STATUS} from "../../utils/helpers"

const Tabata = () => {
  const [workSecs, setWorkSecs] = useState(0);
  const [restSecs, setRestSecs] = useState(0);
  const [rounds, setRounds] = useState(0);
  const [curSec, setCurSec] = useState(0);
  const [curRound, setCurRound] = useState(0);
  const [status, setStatus] = useState(STATUS.RESET);
  const timerTitle = "Tabata";
  // The amount of total secs in current Tabata segment
  const seconds =  status === STATUS.RESTING ? restSecs : workSecs;
  const label = status === STATUS.RESTING ? 'Rest' : 'Work';
  const inputs = [
    <Input
      onChange={(event) => {
        const num = parseInt(event.target.value);
        setWorkSecs((num > 0 ? num : 0));
      }}
      label="Work seconds"
      name="Work"
      value={workSecs}
    />,
    <Input
     onChange={(event) => {
       const num = parseInt(event.target.value);
       setRestSecs((num > 0 ? num : 0));
     }}
     label="Rest seconds"
     name="rest"
     value={restSecs}
   />,
   <Input
    onChange={(event) => {
      const num = parseInt(event.target.value);
      setRounds((num > 0 ? num : 0));
    }}
    label="Rounds"
    name="rounds"
    value={rounds}
    />
  ];
  // Countdown displays the single count down time
  const displayTimes = [
    <DisplayTime
      label={label}
      seconds={seconds}
      key="1"
      active={false}
    />,
    <DisplayTime
      label='a'
      seconds={curSec}
      size='large'
      active={true}
    />
  ];
  const displayRounds = [
    <DisplayRounds
        numRounds={rounds || 4} //TODO: remove temp count
        curRound={curRound || 3} //TODO: remove temp count
      />
    ];

    return (
      <div>
        <Panel
            timerTitle={timerTitle}
            seconds={seconds}
            curSecond={curSec}
            inputs={inputs}
            displayTimes={displayTimes}
            displayRounds={displayRounds}
        />
      </div>
    );
}

export default Tabata;
