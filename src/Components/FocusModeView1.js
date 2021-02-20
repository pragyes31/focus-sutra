/*global chrome*/

import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";

const focusModeView1Styles = {
  focusModeTab: {
    width: "400px",
    height: "500px",
    backgroundColor: "#eee",
  },
  focusLength: {
    width: "50%",
  },
  focusLengthBox: {
    display: "flex",
    justifyContent: "center",
    margin: "1.5rem 0",
  },
  error: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    margin: "1.5rem 0",
    color: "#c70039",
  },
  startBtn: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    margin: "1.5rem 0",
  },
  start: {
    width: "50%",
    borderRadius: "20px",
  },
};

class FocusModeView1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focusPeriod:3,
      error:false
    };
  }
  handleFocusPeriod = (e) => {
    let focusPeriod = e.target.value;
    if (focusPeriod >= 1) {
      this.setState({ focusPeriod: parseInt(focusPeriod), error: false });
      this.props.setTimerLength(focusPeriod)
    } else {
      this.setState({ focusPeriod, error: true });
    }
  };
  startTimer = () => {
    localStorage.setItem('timerLengthinMins', this.state.focusPeriod);
    localStorage.setItem('timerOn', true);
    this.props.startTimer(this.state.focusPeriod)
   // chrome.runtime.sendMessage({timerOn: this.props.timerOn});
  }
  render() {
    const { classes } = this.props;
    const {error} = this.state;
    return (
      <div>
        <div className={classes.focusLengthBox}>
          <TextField
            label="Focus period"
            id="outlined-start-adornment"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">minutes</InputAdornment>
              ),
            }}
            variant="outlined"
            value={this.state.focusPeriod}
            onChange={this.handleFocusPeriod}
            className={classes.focusLength}
            helperText={error && "Integers only please. Duh!"}
            error={error}
          />
        </div>
        <div className={classes.startBtn}>
          <Button variant="contained" color="primary" className={classes.start} onClick={this.startTimer} disabled={error}>
            Start
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(focusModeView1Styles)(FocusModeView1);
