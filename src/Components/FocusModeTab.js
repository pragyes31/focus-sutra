import React from "react";

import { withStyles } from "@material-ui/core/styles";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import FocusModeOn from './FocusModeOn'

const focusModeTabStyles = {
  switch: {
    display: "flex",
    justifyContent: "center",
    margin: "1.5rem 0",
  },
  switchBtn: {
    marginLeft: "0.5rem",
  },
  description: {
    padding: "1.2rem",
    textAlign: "center",
    lineHeight: "1.7rem",
  },
};

class FocusModeTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focusMode: false
    };
  }
  handleChange = () => {
    this.setState({ focusMode: !this.state.focusMode });
  };
  render() {
    const { classes } = this.props;
    const { focusMode, error, timerOn } = this.state;
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
              //  disabled={focusMode}
              />
            }
            label="Enable Focus mode"
            labelPlacement="start"
            className={classes.switch}
          />
        </div>
        {focusMode ? (
          <FocusModeOn />
        ) : (
          <div className={classes.description}>
            Enabling focus mode would block all the social media websites. Check
            the "Block it" tab for the list of sites blocked by default and to
            add/remove more websites.
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(focusModeTabStyles)(FocusModeTab);
