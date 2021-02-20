import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Dialog from "@material-ui/core/Dialog";

const relaxDialogStyles = {
  focusModeTab: {
    width: "400px",
    height: "500px",
    backgroundColor: "#eee",
  },
};

class RelaxDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relaxDialog: false,
    };
  }
  toggleRelaxDialog = () => {
    this.setState({ relaxDialog: !this.state.relaxDialog });
  };
  render() {
    const { classes } = this.props;
    return (
      <Dialog
        open={this.state.relaxDialog}
        aria-labelledby="Time to relax"
        aria-describedby="Time to relax"
        onBackdropClick={this.toggleRelaxDialog}
        onEscapeKeyDown={this.toggleRelaxDialog}
        classes={{ paper: classes.box }}
      >
        <div>Time to relax</div>
      </Dialog>
    );
  }
}

export default withStyles(relaxDialogStyles)(RelaxDialog);
