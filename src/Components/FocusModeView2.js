import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core";

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
    transition: "all 300ms"
  }
  // progress: {
  //   width: (progressBar) => `${progressBar}%`,
  //   backgroundColor: "#aabb66",
  //   transition: "all 300ms",
  // },
});

const FocusModeView2 = (props) => {
  const [minsLeft, setMinsLeft] = useState(props.focusPeriod);
  const [secsLeft, setSecsLeft] = useState(0);
  const [progress, setProgress] = useState(0);
  const styles = focusModeView2Styles(progress);

  useEffect(() => {
    let startTime = Date.now();
    let timeLength = minsLeft * 60 * 1000;
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
      let currentProgress =
          ((timerLengthInSecs - totalSecsLeft) / timerLengthInSecs) * 400;
        setProgress(currentProgress);

      if (newMinsLeft <= 0 && newSecsLeft <= 0) {
        clearInterval(timer);
      }
    }, 1000);
  }, []);

  return (
    <div>
      <div className={styles.timer}>
        {minsLeft < 10 ? `0${minsLeft}` : minsLeft} :{" "}
        {secsLeft < 10 ? `0${secsLeft}` : secsLeft}
      </div>
      <div className={styles.progressBar}>
      </div>
    </div>
  );
};

export default FocusModeView2;

//export default withStyles(focusModeView2Styles)(FocusModeView2);

// let redirectUrl = () => {
//   chrome.webRequest.onBeforeRequest.addListener(
//     () => {
//       return {cancel:true}
//     },
//     {urls:["facebook.com"]},
//     ["blocking"]
//   )
// }
