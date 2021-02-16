import React from 'react';
import { withStyles } from "@material-ui/core/styles";

const blockSitesTabStyles = {
    focusModeTab: {
      width: "400px",
      height: "500px",
      backgroundColor: "#eee",
    },
  };
  

class BlockSitesTab extends React.Component {
constructor(props) {
    super(props);
    this.state = {}
}
render() {
    <div>
        Focus mode
    </div>
}
}

export default withStyles(blockSitesTabStyles)(BlockSitesTab);
