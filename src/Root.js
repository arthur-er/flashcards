import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "./components/AppBar";
import Modal from "./components/Modal";
import Flashcard from "./components/Flashcard";
import CardFlip from "react-card-flip";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
  },
  content: {
    margin: "2rem",
    flexGrow: 1,
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export default function Root(content) {
  const classes = useStyles();
  const [flip, setFlip] = useState(false);
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("");

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };
  const toggleFlip = () => setFlip(!flip);
  const toggleDialog = () => setOpen(!open);

  return (
    <div className={classes.root}>
      <AppBar />
      <main className={classes.content}>
        <CardFlip isFlipped={flip} flipDirection="vertical">
          <Flashcard
            flipHandler={toggleFlip}
            post={{
              title: "Como ocorreu a revolução inglesa?",
              category: "História",
              content: "lorem10",
            }}
          />
          <Flashcard
            flipHandler={toggleFlip}
            post={{
              title: "Como ocorreu a revolução inglesa?",
              category: "História",
              content: "lorem9",
            }}
          />
        </CardFlip>
        <Fab onClick={toggleDialog} color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
        <Modal
          dialogHandler={{ open, close: toggleDialog }}
          selectHandler={{ category, handleCategory }}
        />
      </main>
    </div>
  );
}
