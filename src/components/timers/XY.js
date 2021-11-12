import React, {useContext, useEffect, useRef} from "react";
import { TimerContext } from "../../context/TimerProvider";

// Import components
import Panel from "../generic/Panel";
import Input from "../generic/Input";
import DisplayRounds from "../generic/DisplayRounds";
import DisplayTime from "../generic/DisplayTime";
import ConfettiOverlay from "../generic/ConfettiOverlay";

const XY = () => {
  const timerTitle = "XY";
  const {
    curSec,
    workSecs,
    setWorkSecs,
    rounds,
    setRounds,
    curRound,
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

  console.log('KAREN XY curRound', curRound, 'rounds', rounds);

  // On unload reset all this.state
  useEffect(() => {
    console.log('KAREN XY loaded');
    return () => {
      console.log('KAREN XY unloaded');
    };
  },[]);
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
  const displayRounds = [
    <DisplayRounds
      numRounds={rounds}
      curRound={curRound}
      key='display-rounds'
    />
  ];

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
          displayRounds={displayRounds}
          inputs={inputs}
          displayTimes={displayTimes}
      />
    {confetti}
    </div>
  );
}

export default XY;
