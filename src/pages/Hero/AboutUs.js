import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "40vh",
    padding: "2vh",
    // textAlign: "center",
    display: "flex",
    // alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#010102",
  },
}));
function AboutUs() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ul>
        <li>
          <Typography variant="h4" component={"h4"} color="secondary">
            4Art is a workshop hosting platform for artists across all art
            forms.
          </Typography>
          <Typography variant="h4" component={"h4"} color="secondary">
            We aim to provide a hassle free way for artists to host their
            workshops.
          </Typography>
          <Typography variant="h4" component={"h4"} color="secondary">
            Learn at 4art and when you think you are ready, apply as a teacher
            and earn at 4art.
          </Typography>
        </li>
      </ul>
    </div>
  );
}

export default AboutUs;
