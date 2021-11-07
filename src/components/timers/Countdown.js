import React from "react";

// Import components
import Panel from "../generic/Panel";
import Input from "../generic/Input";
import DisplayTime from "../generic/DisplayTime";

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      curSecond: 0,
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
    const {seconds, curSecond} = this.state;
    const timerTitle = "Stopwatch";
    const inputs = [
         <Input
          onChange={this.onChange}
          label="Seconds"
          name="seconds"
          value={seconds}
        />
    ];
    // Countdown displays the single count down time
    const displayTimes = [
      <DisplayTime
        seconds={curSecond}
        size='large'
        active={true}
      />
    ]

    return (
      <div>
        <Panel
            timerTitle={timerTitle}
            seconds={seconds}
            curSecond={curSecond}
            inputs={inputs}
            displayTimes={displayTimes}
            // onStart={onStartHandler}
            // onStop={onStopHandler}
            // onPause={onPauseHandler}
        />
      </div>
    );
  }
}

export default Countdown;
