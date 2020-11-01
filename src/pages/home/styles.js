const { makeStyles } = require("@material-ui/core");

const styles = makeStyles((theme) => ({
  heading: {
    textAlign: "center",
    margin: `${theme.spacing(2)} auto ${theme.spacing(10)} auto`,
  },
  body: {
    margin: `${theme.spacing(4)} auto 0 auto`,
    width: "30rem",
  },
}));

export default styles;
