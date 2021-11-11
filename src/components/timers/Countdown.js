import React, {useContext, useEffect} from "react";
import { TimerContext } from "../../context/TimerProvider";
// Import components
import Panel from "../generic/Panel";
import Input from "../generic/Input";
import ConfettiOverlay from "../generic/ConfettiOverlay";
import DisplayTime from "../generic/DisplayTime";

const Countdown = () => {
  const {
    curSec,
    workSecs,
    setWorkSecs,
    setCurSec,
    setIsCountASC,
    isEnded,
  } = useContext(TimerContext);
  const timerTitle = "Stopwatch";
  const inputs = [
     <Input
      onChange={(event) => {
        const num = parseInt(event.target.value);
        // The number of seconds to count down
        setWorkSecs((num > 0 ? num : 0));
        // Setting Cur sec because its starts at the top down to 0
        setCurSec((num > 0 ? num : 0));
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
      seconds={curSec}
      size="large"
      active={true}
      key="display-current-seconds"
    />
  ]

  // Set static timer direction state on load
  useEffect(() => {
    setIsCountASC(false);
  }, [setIsCountASC]);

  let confetti;
  if (isEnded()) {
    confetti = (<ConfettiOverlay />);
  };

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
    {confetti}
    </div>
  );
}

export default Countdown;
