import React, {useContext, useEffect} from "react";

// Import components
import Panel from "../generic/Panel";
import Input from "../generic/Input";
import DisplayTime from "../generic/DisplayTime";
import { TimerContext } from "../../context/TimerProvider";

const Stopwatch = () => {
  const timerTitle = "Stopwatch";
  const {
    curSec,
    workSecs,
    setWorkSecs,
    isCountASC,
    setIsCountASC,
  } = useContext(TimerContext);
  console.log("isCountASC", isCountASC, "setIsCountASC", setIsCountASC);
  // Set count direction to be ascending
  setIsCountASC(true);
  // Create input components
  const inputs = [
     <Input
      onChange={(event) => {
        const num = parseInt(event.target.value);
        setWorkSecs((num > 0 ? num : 0));
      }}
      label="End seconds"
      name="seconds"
      value={workSecs}
    />
  ];
  // Create Display Time components
  // Stop watch shows 2 display times, the count up and end time
  const displayTimes = [
    <DisplayTime
      label=""
      seconds={workSecs}
      active={false}
    />,
    <DisplayTime
      seconds={curSec}
      size='large'
      active={true}
    />
  ]
  // The Return Rendered componet
  return (
    <div>
      <Panel
          displayTimes={displayTimes}
          timerTitle={timerTitle}
          // seconds={curSec}
          // curSecond={curSecond}
          inputs={inputs}
          // onStart={onStartHandler}
          // onStop={onStopHandler}
          // onPause={onPauseHandler}
      />
    </div>
  );
}

export default Stopwatch;
