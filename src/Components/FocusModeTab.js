import React, { useState } from "react";

import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import FocusModeView1 from "./FocusModeView1";
import FocusModeView2 from "./FocusModeView2";

const focusModeTabStyles = makeStyles({});

const FocusModeTab = (props) => {
  const classes = focusModeTabStyles();

  let timerStatus = localStorage.getItem("timerOn");

  const [timerOn, toggleTimer] = useState(timerStatus);
  const [focusPeriod, setFocusPeriod] = useState();

  let startTimer = (focusPeriod) => {
    localStorage.setItem("timerOn", true);
    localStorage.setItem("startTime", Date.now())
    localStorage.setItem("focusPeriod", focusPeriod)
    localStorage.setItem("minsLeft", focusPeriod)
    localStorage.setItem("secsLeft", 0)
    toggleTimer(true);
  };

  let resetTimer = () => {
    localStorage.setItem("timerOn", false);
    toggleTimer(false);
  };

  let setTimerLength = (timerLength) => {
    setFocusPeriod(timerLength);
  };

  return (
    <div className={classes.focusModeTab}>
      {timerOn ? (
        <FocusModeView2 focusPeriod={focusPeriod} resetTimer={resetTimer} />
      ) : (
        <FocusModeView1
          setTimerLength={setTimerLength}
          startTimer={startTimer}
        />
      )}
    </div>
  );
};

export default FocusModeTab;

// const focusModeTabStyles = {
//   switch: {
//     display: "flex",
//     justifyContent: "center",
//     margin: "1.5rem 0",
//   },
//   switchBtn: {
//     marginLeft: "0.5rem",
//   },
//   description: {
//     padding: "1.2rem",
//     textAlign: "center",
//     lineHeight: "1.7rem",
//   },
// };

// class FocusModeTab extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       focusMode: false,
//       timerOn:false
//     };
//   }
//   handleChange = () => {
//     this.setState({ focusMode: !this.state.focusMode });
//   };
//   SaveTimerinLocal = (bool) => {

//   }
//   componentDidMount = () => {};
//   render() {
//     const { classes } = this.props;
//     const { focusMode } = this.state;
//     return (
//       <div className={classes.focusModeTab}>
//         <div className={classes.focusSwitch}>
//           <FormControlLabel
//             control={
//               <Switch
//                 checked={focusMode}
//                 onChange={this.handleChange}
//                 name="focusMode"
//                 color="primary"
//                 className={classes.switchBtn}
//                 //disabled={focusMode}
//               />
//             }
//             label="Enable Focus mode"
//             labelPlacement="start"
//             className={classes.switch}
//           />
//         </div>
//         {focusMode ? (
//           <FocusModeOn SaveTimerinLocal={this.SaveTimerinLocal}/>
//         ) : (
//           <div className={classes.description}>
//             Enabling focus mode would block all the social media websites. Check
//             the "Block it" tab for the list of sites blocked by default and to
//             add/remove more websites.
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// // export default withStyles(focusModeTabStyles)(FocusModeTab);
