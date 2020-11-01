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
  nameAndLocation: {
    display: "flex",
    width: "40%",
  },
  map: {
    fontSize: 80,
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(2),
  },
  location: {
    display: "flex",
  },
  name: {
    fontSize: "1.5rem",
    marginLeft: theme.spacing(2),
  },
  grade: {
    width: "20%",
  },
  completed: {
    display: "flex",
    flexGrow: 1,
  },
  date: {
    marginLeft: theme.spacing(3),
  },
  cardActions: {
    display: "flex",
    marginRight: theme.spacing(4),
  },
  delete: {
    color: "#690303",
  },
}));

export default styles;
