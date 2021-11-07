import React from "react";

// Import components
import Panel from "../generic/Panel";
import Input from "../generic/Input";
import DisplayRounds from "../generic/DisplayRounds";
import DisplayTime from "../generic/DisplayTime";
import { STATUS } from "../../utils/helpers"

class XY extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workSecs: 0,
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

  onResetHandler() {
    // TODO: stop and clear input
  }

  onClickHandler() {
    // TODO: change status to starting
  }

  render() {
    const { workSecs, rounds, curRound, curSecond } = this.state;
    const timerTitle = "XY";
    const inputs = [
       <Input
        onChange={this.onChange}
        label="Seconds"
        name="work"
        value={workSecs}
        key="1"
      />,
       <Input
        onChange={this.onChange}
        label="Rounds"
        name="rounds"
        value={rounds}
        key="2"
      />
    ];
    // Countdown displays the single count down time
    const displayTimes = [
      <DisplayTime
        seconds={workSecs}
        key="1"
        active={false}
      />,
      <DisplayTime
        seconds={curSecond}
        size='large'
        key="2"
        active={true}
      />
    ]
    const displayRounds = [
      <DisplayRounds
        numRounds={8} //{rounds}
        curRound={curRound || 3} //{curRound}
      />
    ];

    return (
      <div>
        <Panel
            timerTitle={timerTitle}
            seconds={workSecs}
            curSecond={curSecond}
            displayRounds={displayRounds}
            inputs={inputs}
            displayTimes={displayTimes}
            onReset={this.onReset}
            onClick={this.onClick}
        />
      </div>
    );
  }
}

export default XY;
