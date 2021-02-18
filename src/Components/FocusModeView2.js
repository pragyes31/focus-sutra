import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";

const focusModeView2Styles = {
  focusModeTab: {
    width: "400px",
    height: "500px",
    backgroundColor: "#eee",
  },
};

const FocusModeView2 = (props) => {
  const [minsLeft, setMinsLeft] = useState(props.focusPeriod);
  const [secsLeft, setSecsLeft] = useState(0);

// let redirectUrl = () => {
//   chrome.webRequest.onBeforeRequest.addListener(
//     () => {
//       return {cancel:true}
//     },
//     {urls:["facebook.com"]},
//     ["blocking"]
//   )
// }

  useEffect(() => {
    let startTime = Date.now();
    let timeLength = minsLeft * 60 * 1000;
    let endTime = startTime + timeLength;
    let timer = setInterval(() => {
      let currentTime = Date.now();
      let newMinsLeft = Math.floor((endTime - currentTime) / (1000 * 60));
      let newSecsLeft = Math.floor(((endTime - currentTime) / 1000) % 60);
      setMinsLeft(newMinsLeft);
      setSecsLeft(newSecsLeft);
      if (newMinsLeft <= 0 && newSecsLeft <= 0) {
        clearInterval(timer);
      }
    }, 1000);
  }, []);

  return (
    <div>
      <div>
        {minsLeft < 10 ? `0${minsLeft}` : minsLeft} :{" "}
        {secsLeft < 10 ? `0${secsLeft}` : secsLeft}
      </div>
    </div>
  );
};

export default withStyles(focusModeView2Styles)(FocusModeView2);

// class FocusModeOn extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       timeLeft: {
//         minsLeft: this.props.focusPeriod,
//         secsLeft: 0,
//       },
//     };
//   }
//   render() {
//     let { minsLeft, secsLeft } = this.state.timeLeft;
//     return (
//       <div>
//         <div>
//           {minsLeft < 10 ? `0${minsLeft}` : minsLeft} :{" "}
//           {secsLeft < 10 ? `0${secsLeft}` : secsLeft}
//         </div>
//       </div>
//     );
//   }
// }
