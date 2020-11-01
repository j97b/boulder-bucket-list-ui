const { makeStyles } = require("@material-ui/core");

const styles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(3),
    "& h4": {
      marginLeft: "15%",
      width: "20%",
    },
    "& input": {
      width: "400px",
      backgroundColor: "#F3F3F3",
      borderRadius: "inherit",
    },
  },
  select: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#F3F3F3",
  },
}));

export default styles;
