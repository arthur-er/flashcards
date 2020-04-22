import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "./components/AppBar";
import Modal from "./components/Modal";
import Flashcard from "./components/Flashcard";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import Dexie from "dexie";

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

export default function Root() {
  const classes = useStyles();
  const db = new Dexie("flashcards");

  db.version(1).stores({
    flashcards: "++id, question, question_content, answer, answer_content",
  });

  const [flashcards, setFlashcards] = useState([]);
  const [open, setOpen] = useState(false);
  const toggleDialog = () => setOpen(!open);

  const loadFlashcards = async () => {
    setFlashcards(await db.flashcards.reverse().toArray());
  };

  loadFlashcards();
  return (
    <div className={classes.root}>
      <AppBar />
      <main className={classes.content}>
        {flashcards.map((flashcard) => (
          <Flashcard key={flashcard.id} flashcard={flashcard} />
        ))}
        <Fab onClick={toggleDialog} color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
        <Modal dialogHandler={{ open, close: toggleDialog }} db={db} />
      </main>
    </div>
  );
}
