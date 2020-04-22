import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardFlip from "react-card-flip";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginBottom: theme.spacing(2),
  },
  button: {
    flexGrow: 1,
  },
}));

export default function Flashcard({ flashcard }) {
  const classes = useStyles();
  const [flip, setFlip] = useState(false);
  const flipHandler = () => {
    setFlip(!flip);
  };

  return (
    <CardFlip isFlipped={flip} flipDirection="vertical">
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" className={classes.title} component="h2">
            {flashcard.question}
          </Typography>
          <Typography variant="body2" component="p">
            {flashcard.question_content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            onClick={flipHandler}
            className={classes.button}
          >
            Ver resposta
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" className={classes.title} component="h2">
            {flashcard.answer}
          </Typography>
          <Typography variant="body2" component="p">
            {flashcard.answer_content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            onClick={flipHandler}
            className={classes.button}
          >
            Ver pergunta
          </Button>
        </CardActions>
      </Card>
    </CardFlip>
  );
}
