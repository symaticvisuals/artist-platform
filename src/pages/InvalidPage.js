import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Link, Redirect } from "react-router-dom";
import notfound from "../images/notfound.png";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "57.5vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  button: {
    border: "1px solid #FF416C",
    borderRadius: "40px",
    color: "white",
    padding: "10px 30px",
    "&:hover": {
      background: "#FF416C",
    },
  },
}));
function InvalidPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={notfound} alt="notfound" height="500px" />
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button
          className={classes.button}
          variant="outlined"
          //   color="primary"
          onClick={() => {
            Redirect("/");
          }}>
          Back to Home
        </Button>
      </Link>
    </div>
  );
}

export default InvalidPage;
