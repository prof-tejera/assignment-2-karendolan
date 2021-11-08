import React, {useContext, useEffect} from "react";
import { TimerContext } from "../../context/TimerProvider";
// Import components
import Panel from "../generic/Panel";
import Input from "../generic/Input";
import DisplayTime from "../generic/DisplayTime";

const Countdown = () => {
  const {
    curSec,
    workSecs,
    setWorkSecs,
    state,
    end,
  } = useContext(TimerContext);
  const timerTitle = "Stopwatch";
  const inputs = [
     <Input
      onChange={(event) => {
        const num = parseInt(event.target.value);
        // The number of seconds to count down
        setWorkSecs((num > 0 ? num : 0));
        // Setting Cur sec because its starts at the top down to 0
        setWorkSecs((num > 0 ? num : 0));
      }}
      label="Seconds"
      name="seconds"
      value={workSecs}
      key="input-total-seconds"
    />
  ];
  // Countdown displays the single count down time
  const displayTimes = [
    <DisplayTime
      // The time will be provided
      // seconds={curSecond}
      size="large"
      active={true}
      key="display-current-seconds"
    />
  ]

  // Remove the state context
  useEffect(() => {
    console.log('OnMount: Total', workSecs, 'Current', curSec, 'state', state);
    if (curSec === 0) {
      end();
    }
    return () => {
      console.log('Cleanup: Total', workSecs, 'Current', curSec, 'state', state);
    }
  }, [curSec, workSecs, state, end]);

  return (
    <div>
      <Panel
          timerTitle={timerTitle}
          // The time will be provied
          // seconds={seconds}
          // curSecond={curSecond}
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
