import React, { useState } from "react";

import { makeStyles } from "@material-ui/core";

import FocusModeView1 from "./FocusModeView1";
import FocusModeView2 from "./FocusModeView2";

const focusModeTabStyles = makeStyles({});

const FocusModeTab = (props) => {
  const classes = focusModeTabStyles();
  const [timerOn, toggleTimer] = useState(localStorage.getItem('timerStatus') || false);
  const [focusPeriod, setFocusPeriod] = useState();

  let startTimer = (focusPeriod) => {
    localStorage.setItem("timerStatus", true);
    localStorage.setItem("startTime", Date.now())
    localStorage.setItem("focusPeriod", focusPeriod)
    localStorage.setItem("minsLeft", focusPeriod)
    localStorage.setItem("secsLeft", 0)
    toggleTimer(true);
  };

  let resetTimer = () => {
    localStorage.setItem("timerStatus", false);
    toggleTimer(false);
    localStorage.setItem("minsLeft", 0)
    localStorage.setItem("secsLeft", 0)
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