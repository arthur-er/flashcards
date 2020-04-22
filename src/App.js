import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Root from "./Root";
import CssBaseline from "@material-ui/core/CssBaseline";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <Root />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
