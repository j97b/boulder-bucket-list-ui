const { createMuiTheme } = require("@material-ui/core");

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#788B91",
    },
  },
  typography: {
    fontFamily: '"Nanum Gothic", "Roboto", "Arial", sans-serif',
  },
});

export default theme;
