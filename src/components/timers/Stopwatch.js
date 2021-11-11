import React, {useContext, useEffect} from "react";

// Import components
import Panel from "../generic/Panel";
import Input from "../generic/Input";
import DisplayTime from "../generic/DisplayTime";
import ConfettiOverlay from "../generic/ConfettiOverlay";
import { TimerContext } from "../../context/TimerProvider";

const Stopwatch = () => {
  const timerTitle = "Stopwatch";
  const {
    curSec,
    workSecs,
    setWorkSecs,
    setIsCountASC,
    isEnded,
  } = useContext(TimerContext);

  // Create input components
  const inputs = [
     <Input
      onChange={(event) => {
        if (event && event.target) {
          const num = parseInt(event.target.value);
          setWorkSecs((num > 0 ? num : 0));
        }
      }}
      key="input-total-seconds"
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
      key="display-total-seconds"
    />,
    <DisplayTime
      seconds={curSec}
      size='large'
      active={true}
      key="display-current-seconds"
    />
  ];

  // Set static timer direction state on load
  useEffect(() => {
    setIsCountASC(true);
  }, [setIsCountASC]);

  // Celebrate ending!
  let confetti;
  if (isEnded()) {
    confetti = (<ConfettiOverlay />);
  };

  // The Return Rendered componet
  return (
    <div>
      <Panel
        displayTimes={displayTimes}
        timerTitle={timerTitle}
        inputs={inputs}
      />
    {confetti}
    </div>
  );
}

export default Stopwatch;
