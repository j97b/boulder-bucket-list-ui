const { createMuiTheme } = require("@material-ui/core");

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#788B91",
    },
  },
  typography: {
    fontFamily: '"Rajdhani", "Roboto", "Arial", sans-serif',
    h2: {
      fontFamily: '"Roboto", "Arial", sans-serif',
    },
  },
  spacing: (factor) => `${8 * factor}px`,
});

export default theme;
