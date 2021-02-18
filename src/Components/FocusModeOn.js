import React from "react";
import { withStyles } from "@material-ui/core/styles";

import FocusModeView1 from "./FocusModeView1";
import FocusModeView2 from "./FocusModeView2";

const focusModeOnStyles = {
  focusModeTab: {
    width: "400px",
    height: "500px",
    backgroundColor: "#eee",
  },
};

class FocusModeOn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerOn: false,
      focusPeriod:30
    };
  }
  startTimer = (focusPeriod) => {
    this.setState({ timerOn: true, focusPeriod });
  };
  render() {
    let { timerOn, focusPeriod } = this.state;
    return (
      <div>
        {timerOn ? (
          <FocusModeView2 focusPeriod={focusPeriod}/>
        ) : (
          <FocusModeView1 startTimer={this.startTimer} />
        )}
      </div>
    );
  }
}

export default withStyles(focusModeOnStyles)(FocusModeOn);
