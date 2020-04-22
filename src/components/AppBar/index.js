import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Typography, Toolbar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function ActionBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography>Flashcards</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
