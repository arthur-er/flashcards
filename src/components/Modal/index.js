import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  DialogActions,
  Grid,
} from "@material-ui/core";

export default function Modal({ dialogHandler, selectHandler }) {
  return (
    <Dialog
      open={dialogHandler.open}
      onClose={dialogHandler.close}
      aria-labelledby="form-dialog-title"
      fullWidth={true}
    >
      <DialogTitle id="form-dialog-title">Criar novo Flashcard</DialogTitle>
      <DialogContent>
        <Grid container direction="column" alignItems="stretch">
          <InputLabel id="categoria-label">Categoria</InputLabel>
          <Select
            labelId="categoria-label"
            id="categoria-select"
            value={selectHandler.category}
            onChange={selectHandler.handleCategory}
          >
            <MenuItem value="historia">História</MenuItem>
            <MenuItem value="geografia">Geografia</MenuItem>
          </Select>
          <TextField
            autoFocus
            margin="dense"
            id="pergunta"
            label="Pergunta"
            type="text"
          />
          <TextField
            autoFocus
            margin="dense"
            id="pergunta"
            label="Resposta"
            type="text"
          />
          <TextField
            autoFocus
            margin="dense"
            id="pergunta"
            label="Conteudo da resposta"
            type="text"
          />
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button>Criar Flashcard</Button>
      </DialogActions>
    </Dialog>
  );
}
