import React, {useContext, useEffect} from "react";
import TimerProvider, {TimerContext} from '../utils/TimerProvider';

// Import components
import Panel from "../generic/Panel";
import Input from "../generic/Input";
import DisplayTime from "../generic/DisplayTime";

const Countdown = () => {
  const {
    curSecond,
    setCurSecond,
    seconds,
    setSeconds,
    state,
    setState,
  } = useContext(TimerContext);
  // replace all tghese these with context
  // const [curSecond, setCurSecond] = useState(0);
  // const [seconds, setSeconds] = useState(0);
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
      // The time will be provided
      // seconds={curSecond}
      size='large'
      active={true}
    />
  ]

  // Remove the state context
  useEffect(() => {
    console.log('OnMount: Total', seconds, 'Current', curSecond, 'state', state);
    return () => {
      console.log('Cleanup: Total', seconds, 'Current', curSecond, 'state', state);
    }
  })

  return (
    <TimerProvider>
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
    </TimerProvider>
  );
}

export default Countdown;
