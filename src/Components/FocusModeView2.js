import React from "react";
import { withStyles } from "@material-ui/core/styles";

const focusModeOnStyles = {
  focusModeTab: {
    width: "400px",
    height: "500px",
    backgroundColor: "#eee",
  },
};

class FocusModeOn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>Focus mode On</div>;
  }
}

export default withStyles(focusModeOnStyles)(FocusModeOn);
