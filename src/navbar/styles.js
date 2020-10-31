const { makeStyles } = require("@material-ui/core");

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& div": {
      flexGrow: 1,
    },
  },
  title: {
    width: "max-content",
    "&:hover": {
      cursor: "pointer",
    },
    "&:-webkit-any-link": {
      color: "inherit",
      textDecoration: "none",
    },
  },
  button: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
}));

export default styles;
