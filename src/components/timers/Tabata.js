import React from "react";

// Import components
import Panel from "../generic/Panel";
import Input from "../generic/Input";
import DisplayTime from "../generic/DisplayTime";
import DisplayRounds from "../generic/DisplayRounds";
import {STATUS} from "../../utils/helpers"

class Tabata extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workSecs: 0,
      restSecs: 0,
      rounds:0,
      curSec: 0,
      curRound: 0,
      status: STATUS.RESET,
    };
  }

  onChange = (event) => {
    const num = parseInt(event.target.value);
    this.setState(
      {seconds: num > 0 ? num : 0,
      curSecond: num > 0 ? num : 0}
    );
  }

  render() {
    const {workSecs, restSecs, rounds, curRound, curSecond, status} = this.state;
    const timerTitle = "Tabata";
    // The amount of total secs in current Tabata segment
    const seconds =  status === STATUS.RESTING ? restSecs : workSecs;
    const label = status === STATUS.RESTING ? 'Rest' : 'Work';
    const inputs = [
         <Input
          onChange={this.onChange}
          label="Work seconds"
          name="Work"
          value={workSecs}
        />,
        <Input
         onChange={this.onChange}
         label="Rest seconds"
         name="rest"
         value={restSecs}
       />,
       <Input
        onChange={this.onChange}
        label="Rounds"
        name="rounds"
        value={rounds}
      />
    ];
    // Countdown displays the single count down time
    const displayTimes = [
      <DisplayTime
        label={label}
        seconds={seconds}
        key="1"
        active={false}
      />,
      <DisplayTime
        label='a'
        seconds={curSecond}
        size='large'
        active={true}
      />
    ];
    const displayRounds = [
      <DisplayRounds
        numRounds={rounds || 4} //TODO: remove temp count
        curRound={curRound || 3} //TODO: remove temp count
      />
    ];

    return (
      <div>
        <Panel
            timerTitle={timerTitle}
            seconds={seconds}
            curSecond={curSecond}
            inputs={inputs}
            displayTimes={displayTimes}
            displayRounds={displayRounds}
        />
      </div>
    );
  }
}

export default Tabata;
