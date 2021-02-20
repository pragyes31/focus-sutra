import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";

import RelaxDialog from './RelaxDialog'

const focusModeView2Styles = makeStyles({
  timer: {
    margin: "1rem",
    fontFamily: "'Play', cursive",
    fontSize: "4rem",
    textAlign: "center",
  },
  progressBar: {
    margin: "1rem 2rem",
    border: "1px solid #aaa",
    height: "1rem",
    width: (progressBar) => `${progressBar}px`,
    backgroundColor: "#aabb66",
    transition: "all 300ms",
  },
});

const FocusModeView2 = (props) => {
  let minsLeftLocal = parseInt(localStorage.getItem("minsLeft"));
  let secsLeftLocal = parseInt(localStorage.getItem("secsLeft"));
  const [minsLeft, setMinsLeft] = useState(minsLeftLocal);
  const [secsLeft, setSecsLeft] = useState(secsLeftLocal);
  const [progress, setProgress] = useState(0);
  const [relaxDialog, setRelaxDialog] = useState(false);

  const styles = focusModeView2Styles(progress);
console.log("why is this rendering")

  useEffect(() => {
    let startTime = parseInt(localStorage.getItem("startTime"));
    let focusPeriod = parseInt(localStorage.getItem("focusPeriod"));
    let timeLength = focusPeriod * 60 * 1000; // timerLength in milliseconds
    let timerLengthInSecs = props.focusPeriod * 60;
    let endTime = startTime + timeLength;
    let timer = setInterval(() => {
      let currentTime = Date.now();
      let newMinsLeft = Math.floor((endTime - currentTime) / (1000 * 60));
      let newSecsLeft = Math.round(((endTime - currentTime) / 1000) % 60);
      newSecsLeft = newSecsLeft === 60 ? 0 : newSecsLeft;
      let totalSecsLeft = newMinsLeft * 60 + newSecsLeft;
      setMinsLeft(newMinsLeft);
      setSecsLeft(newSecsLeft);

      localStorage.setItem("minsLeft", newMinsLeft);
      localStorage.setItem("secsLeft", newSecsLeft);
      let currentProgress =
        ((timerLengthInSecs - totalSecsLeft) / timerLengthInSecs) * 360;
      setProgress(currentProgress);

      if (newMinsLeft <= 0 && newSecsLeft <= 0) {
        clearInterval(timer);
        props.resetTimer();
        {relaxDialog && <RelaxDialog setRelaxDialog={this.setRelaxDialog}/>}
      }
    }, 1000);
  }, []);


  return (
    <div>
      <div className={styles.timer}>
        {minsLeft < 10 ? `0${minsLeft}` : minsLeft} :{" "}
        {secsLeft < 10 ? `0${secsLeft}` : secsLeft}
      </div>
      <div className={styles.progressBar}></div>
    </div>
  );
};

export default FocusModeView2;
