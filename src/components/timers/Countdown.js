import React, {useContext, useEffect, useRef} from "react";
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
    resetAll,
  } = useContext(TimerContext);
  // ---- Crazy reset code ------------
  const resetCallback = useRef(() => {
    resetAll();
  });
  // On unload reset all this.state
  useEffect(() => {
    return () => {
      resetCallback.current();
    };
  },[resetCallback]);

  resetCallback.current = () => {
    resetAll();
  }
  // ----------------------------------
  const timerTitle = "Countdown";
  const inputs = [
     <Input
      onChange={(event) => {
        const num = parseInt(event.target.value);
        // The number of seconds to count down
        setWorkSecs((num > 0 ? num : 0));
        // Setting Cur sec to start at the total for countdown
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
          inputs={inputs}
          displayTimes={displayTimes}
      />
    {confetti}
    </div>
  );
}

export default Countdown;
