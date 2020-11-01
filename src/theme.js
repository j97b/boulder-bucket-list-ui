const { createMuiTheme } = require("@material-ui/core");

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#788B91",
    },
  },
  typography: {
    fontFamily: '"Nanum Gothic", "Roboto", "Arial", sans-serif',
    h1: {
      fontFamily: '"Roboto", "Arial", sans-serif',
    },
  },
  spacing: (factor) => `${8 * factor}px`,
});

export default theme;
