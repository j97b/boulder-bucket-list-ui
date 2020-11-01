const { makeStyles } = require("@material-ui/core");

const styles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minWidth: 600,
    margin: `${theme.spacing(3)} ${theme.spacing(5)}
    ${theme.spacing(3)} ${theme.spacing(5)}`,
    backgroundColor: "#C0C4C4",
    height: theme.spacing(12),
  },
  map: {
    fontSize: 45,
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(2),
  },
}));

export default styles;
