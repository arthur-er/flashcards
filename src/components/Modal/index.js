import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    flexGrow: 1,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
  },
}));

export default function Modal({ dialogHandler, db }) {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const createFlashcard = async ({
    question,
    question_content,
    answer,
    answer_content,
  }) => {
    db.flashcards.add({
      question,
      question_content,
      answer,
      answer_content,
    });
    dialogHandler.close();
  };

  return (
    <Dialog
      open={dialogHandler.open}
      onClose={dialogHandler.close}
      aria-labelledby="form-dialog-title"
      fullWidth={true}
    >
      <DialogTitle id="form-dialog-title">Criar novo Flashcard</DialogTitle>
      <DialogContent>
        <form
          className={classes.form}
          onSubmit={handleSubmit(createFlashcard)}
          id="flashcard-form"
        >
          <TextField
            autoFocus
            margin="dense"
            name="question"
            label="Pergunta"
            type="text"
            inputRef={register}
          />
          <TextField
            autoFocus
            margin="dense"
            name="question_content"
            label="Conteudo da pergunta"
            type="text"
            inputRef={register}
          />
          <TextField
            autoFocus
            margin="dense"
            name="answer"
            label="Resposta"
            type="text"
            inputRef={register}
          />
          <TextField
            autoFocus
            margin="dense"
            name="answer_content"
            label="Conteudo da resposta"
            type="text"
            inputRef={register}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button
          color="primary"
          type="submit"
          form="flashcard-form"
          variant="contained"
          className={classes.button}
        >
          Criar Flashcard
        </Button>
      </DialogActions>
    </Dialog>
  );
}
