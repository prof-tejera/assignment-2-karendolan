import React, {useContext, useEffect} from "react";

import { TimerContext } from "../../context/TimerProvider";

// Import components
import Panel from "../generic/Panel";
import Input from "../generic/Input";
import DisplayTime from "../generic/DisplayTime";
import DisplayRounds from "../generic/DisplayRounds";
import ConfettiOverlay from "../generic/ConfettiOverlay";

const Tabata = () => {
  const timerTitle = "Tabata";
  const {
    curSec,
    workSecs,
    setWorkSecs,
    restSecs,
    setRestSecs,
    rounds,
    setRounds,
    curRound,
    setIsCountASC,
    isResting,
    isEnded,
  } = useContext(TimerContext);

  console.log('KAREN tabata curRound', curRound, 'rounds', rounds);

  // The amount of total secs in current Tabata segment
  const seconds = isResting() ? restSecs : workSecs;
  const label = isResting() ? 'Resting for' : 'Working for';
  const inputs = [
    <Input
      onChange={(event) => {
        const num = parseInt(event.target.value);
        setWorkSecs((num > 0 ? num : 0));
      }}
      label="Work seconds"
      name="Work"
      value={workSecs}
      key="input-total-work-seconds"
    />,
    <Input
     onChange={(event) => {
       const num = parseInt(event.target.value);
       setRestSecs((num > 0 ? num : 0));
     }}
     label="Rest seconds"
     name="rest"
     value={restSecs}
     key="input-total-rest-seconds"
   />,
   <Input
    onChange={(event) => {
      const num = parseInt(event.target.value);
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
      label={label}
      seconds={seconds}
      key="display-total-time"
      active={false}
    />,
    <DisplayTime
      label='a'
      seconds={curSec}
      size='large'
      active={true}
      key="display-countdown-time"
    />
  ];
  const displayRounds = [
    <DisplayRounds
        numRounds={rounds}
        curRound={curRound}
        key='display-round'
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

    // Render!
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
      {confetti}
      </div>
    );
}

export default Tabata;
