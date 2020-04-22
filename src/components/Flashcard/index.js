import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    flexGrow: 1,
  },
}));

export default function Flashcard({ flipHandler, post }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {post.category}
        </Typography>
        <Typography variant="h5" component="h2">
          {post.title}
        </Typography>
        <Typography variant="body2" component="p">
          {post.content}
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
  );
}
