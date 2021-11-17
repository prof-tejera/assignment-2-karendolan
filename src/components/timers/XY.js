import React, {useContext, useEffect } from "react";
import { TimerContext } from "../../context/TimerProvider";

// Import components
import Panel from "../generic/Panel";
import Input from "../generic/Input";
import DisplayRounds from "../generic/DisplayRounds";
import DisplayTime from "../generic/DisplayTime";
import ConfettiOverlay from "../generic/ConfettiOverlay";

// Hook to reset all state when component unloads
import useResetCallback from "../../utils/useResetCallback";

const XY = () => {
  const timerTitle = "XY";
  const {
    curSec,
    workSecs,
    setWorkSecs,
    rounds,
    setRounds,
    setIsCountASC,
    isEnded,
  } = useContext(TimerContext);
  // Hook to reset all state when component unloads;
  useResetCallback();

  const inputs = [
     <Input
      onChange={(event) => {
        const num = parseInt(event.target.value);
        // The number of seconds per round
        setWorkSecs((num > 0 ? num : 0));
      }}
      label="Seconds"
      name="work"
      value={workSecs}
      key="input-total-work-seconds"
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
      key="input-total-rounds"
    />
  ];
  // Countdown displays the single count down time
  const displayTimes = [
    <DisplayTime
      seconds={workSecs}
      active={false}
      key="display-total-time"
    />,
    <DisplayTime
      seconds={curSec}
      size='large'
      active={true}
      key="display-countdown-time"
    />
  ]

  // Set static timer direction state on load
  useEffect(() => {
    setIsCountASC(true);
  }, [setIsCountASC]);

  let confetti;
  if (isEnded()) {
    confetti = (<ConfettiOverlay />);
  };

  return (
    <div>
      <Panel
          timerTitle={timerTitle}
          displayRound={(<DisplayRounds/>)}
          inputs={inputs}
          displayTimes={displayTimes}
      />
    {confetti}
    </div>
  );
}

export default XY;
