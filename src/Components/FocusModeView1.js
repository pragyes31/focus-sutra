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
    this.state = {};
  }
  handleFocusPeriod = (e) => {
    let focusPeriod = e.target.value;
    if (focusPeriod >= 15 && focusPeriod <= 45) {
      this.setState({ focusPeriod: parseInt(focusPeriod), error: false });
    } else {
      this.setState({ focusPeriod, error: true });
    }
  };
  render() {
    const { classes, error } = this.props;
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
            focussed={true}
          />
        </div>

        <div className={classes.error}>
          {error && "Only Integers between 15 and 45 are accepted"}
        </div>
        <div className={classes.startBtn}>
          <Button variant="contained" color="primary" className={classes.start}>
            Start
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(focusModeView1Styles)(FocusModeView1);
