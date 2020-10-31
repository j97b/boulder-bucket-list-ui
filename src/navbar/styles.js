const { makeStyles } = require("@material-ui/core");

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    "&:hover": {
      cursor: "pointer",
    },
  },
  button: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
}));

export default styles;
