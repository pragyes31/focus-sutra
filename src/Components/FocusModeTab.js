import React from "react";

import { withStyles } from "@material-ui/core/styles";


import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import FocusModeOff from './FocusModeOff'
import FocusModeOn from './FocusModeOn'

const focusModeTabStyles = {
  switch: {
    display:"flex",
    justifyContent:"center",
    margin:"1.5rem 0"
  },
  switchBtn: {
    marginLeft:"0.5rem"
  }
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
    const {focusMode} = this.state
    return (
      <div className={classes.focusModeTab}>
        <div className={classes.focusSwitch}>
          <FormControlLabel
            control={
              <Switch
                checked={focusMode}
                onChange={this.handleChange}
                name="focusMode"
                color="primary"
                className={classes.switchBtn}
              />
            }
            label="Enable Focus mode"
            labelPlacement="start"
            className={classes.switch}
          />
        </div>
        {focusMode ? <FocusModeOn />: <FocusModeOff />}
        
      </div>
    );
  }
}

export default withStyles(focusModeTabStyles)(FocusModeTab);
