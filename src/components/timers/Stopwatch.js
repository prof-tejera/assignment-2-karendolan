import React, {useState} from "react";

// Import components
import Panel from "../generic/Panel";
import Input from "../generic/Input";
import DisplayTime from "../generic/DisplayTime";

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [curSecond, setCurSecond] = useState(0);
  const timerTitle = "Stopwatch";
  const inputs = [
     <Input
      onChange={(event) => {
        const num = parseInt(event.target.value);
        setSeconds((num > 0 ? num : 0));
      }}
      label="End seconds"
      name="seconds"
      value={seconds}
    />
  ];
  // Stop watch shows 2 display times, the count up and end time
  const displayTimes = [
    <DisplayTime
      label=""
      seconds={seconds}
      active={false}
    />,
    <DisplayTime
      seconds={curSecond}
      size='large'
      active={true}
    />
  ]

  return (
    <div>
      <Panel
          displayTimes={displayTimes}
          timerTitle={timerTitle}
          seconds={seconds}
          curSecond={curSecond}
          inputs={inputs}
          // onStart={onStartHandler}
          // onStop={onStopHandler}
          // onPause={onPauseHandler}
      />
    </div>
  );
}

export default Stopwatch;
