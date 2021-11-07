import React, {useState, useEffect} from "react";

// Import components
import Panel from "../generic/Panel";
import Input from "../generic/Input";
import DisplayTime from "../generic/DisplayTime";

const Countdown = () => {
  const [seconds, setSeconds] = useState(0);
  const [curSecond, setCurSecond] = useState(0);
  const timerTitle = "Stopwatch";
  const inputs = [
     <Input
      onChange={(event) => {
        const num = parseInt(event.target.value);
        // The number of seconds to count down
        setSeconds((num > 0 ? num : 0));
        // Setting Cur sec because its starts at the top down to 0
        setCurSecond((num > 0 ? num : 0));
      }}
      label="Seconds"
      name="seconds"
      value={seconds}
    />
  ];
  // Countdown displays the single count down time
  const displayTimes = [
    <DisplayTime
      seconds={curSecond}
      size='large'
      active={true}
    />
  ]

  // Remove the state context
  useEffect(() => {
    console.log('OnMount: Total', seconds, 'Current', curSecond);
    return () => {
      console.log('Cleanup: Total', seconds, 'Current', curSecond);
    }
  })

  return (
    <div>
      <Panel
          timerTitle={timerTitle}
          seconds={seconds}
          curSecond={curSecond}
          inputs={inputs}
          displayTimes={displayTimes}
          // onStart={onStartHandler}
          // onStop={onStopHandler}
          // onPause={onPauseHandler}
      />
    </div>
  );
}

export default Countdown;
