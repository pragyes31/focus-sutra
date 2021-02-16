import React from "react";

import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const headerStyles = {
  title: {
    fontFamily: "'Dosis', sans-serif",
    textAlign: "center",
    fontSize: "1.5rem",
    textDecoration: "underline",
  },
};

function Header(props) {
  const { classes } = props;
  return (
    <div className={classes.header}>
      <Typography variant="h6" className={classes.title}>
        Focus Sutra
      </Typography>
    </div>
  );
}

export default withStyles(headerStyles)(Header);
