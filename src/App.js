import './App.css';
import React from 'react';

import { withStyles } from "@material-ui/core/styles";

import Header from './Components/Header'
import FocusModeTab from './Components/FocusModeTab'

const appStyles = {
app: {
  width: "400px",
  height: "500px",
  backgroundColor: "#eee"
}
}


function App(props) {
  const { classes } = props;
  return (
    <div className={classes.app}>
      <Header />
      <FocusModeTab />
    </div>
  );
}

export default withStyles(appStyles)(App);
