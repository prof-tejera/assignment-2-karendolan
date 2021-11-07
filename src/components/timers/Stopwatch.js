import React from "react";

// Import components
import Panel from "../generic/Panel";
import Input from "../generic/Input";
import DisplayTime from "../generic/DisplayTime";

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      curSecond: 0,
    };
  }

  onChange = (event) => {
    const num = parseInt(event.target.value);
    this.setState({seconds: num > 0 ? num : 0});
  }

  render() {
    const {seconds, curSecond} = this.state;
    const timerTitle = "Stopwatch";
    const inputs = [
         <Input
          onChange={this.onChange}
          label="End seconds"
          name="seconds"
          value={seconds}
        />
    ];
    // Stop watch shows 2 display times, the count up and end time
    const displayTimes = [
      <DisplayTime
        label=""
        seconds={seconds}
        active={false}
      />,
      <DisplayTime
        seconds={curSecond}
        size='large'
        active={true}
      />
    ]

    return (
      <div>
        <Panel
            displayTimes={displayTimes}
            timerTitle={timerTitle}
            seconds={seconds}
            curSecond={curSecond}
            inputs={inputs}
            // onStart={onStartHandler}
            // onStop={onStopHandler}
            // onPause={onPauseHandler}
        />
      </div>
    );
  }
}

export default Stopwatch;
