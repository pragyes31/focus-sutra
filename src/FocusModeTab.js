import React from "react";

import { withStyles } from "@material-ui/core/styles";

import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";

const focusModeTabStyles = {
  focusModeTab: {
    width: "400px",
    height: "500px",
    backgroundColor: "#eee",
  },
};

class FocusModeTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focusMode: false,
      focusPeriod:30,
      error:false
    };
  }
  handleChange = () => {
    this.setState({ focusMode: !this.state.focusMode });
  };
  handleFocusPeriod = (e) => {
let focusPeriod = e.target.value;
if(focusPeriod >=15 && focusPeriod <=45) {
    this.setState({focusPeriod:parseInt(focusPeriod), error:false})
}
else {
    this.setState({focusPeriod, error:true})
}
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.focusModeTab}>
        <div className={classes.focusSwitch}>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.focusMode}
                onChange={this.handleChange}
                name="focusMode"
                color="primary"
              />
            }
            label="Enable Focus mode"
            labelPlacement="start"
          />
        </div>
        <div className={classes.focusLength}>
        
           <TextField
          label="Focus period"
          id="outlined-start-adornment"
          InputProps={{
            endAdornment: <InputAdornment position="end">minutes</InputAdornment>,
          }}
          variant="outlined"
          value={this.state.focusPeriod}
          onChange={this.handleFocusPeriod}
        />
        <div>{this.state.error && "Only Integers between 15 and 45 are accepted"}</div>
        <Button variant="contained" color="primary">
        Start
      </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(focusModeTabStyles)(FocusModeTab);
