import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import React from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "20vh",
    background: "#111112",
    padding: "6vh 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      padding: "6vh 2vw",
    },
  },
  heading: {
    fontFamily: "Sora",
    fontWeight: 100,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1em",
    },
  },
  headingMain: {
    fontFamily: "Sora",
    fontWeight: 600,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5em",
    },
  },
  input: {
    background: "#222225",
    border: "none",
    padding: "18px",
    borderRadius: "5px",
    width: "450px",
    height: "100%",
    marginRight: "20px",
    color: "white",
    fontFamily: "Sora",
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.40)",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginRight: "10px",
    },
  },
  questions: {
    textDecoration: "underline",
    marginRight: "5px",
  },
}));

function ContactEmail() {
  const classes = useStyles();
  return (
    <Box className={classes.root} id="contact">
      <Typography variant="h6" component={"h6"} align="center" className={classes.heading}>
        DON’T JUST TAKE OUR WORD FOR IT
      </Typography>
      <Typography variant="h2" component={"h2"} align="center" className={classes.headingMain}>
        Ready to Learn with Teachers?
      </Typography>
      <form style={{ display: "flex", alignItems: "center", marginTop: "3vh" }}>
        <input
          type="email"
          name=""
          id=""
          placeholder="Enter Your Email"
          className={classes.input}
        />
        <Button> Try for Free</Button>
      </form>
      <Box style={{ display: "flex", marginTop: "10px", cursor: "pointer" }}>
        <Typography
          variant="body2" component={"p"}
          align="center"
          className={classes.questions}>
          Questions? Talk to an expert
        </Typography>
        <ArrowRightAltIcon style={{ color: "white" }} />
      </Box>
    </Box>
  );
}

export default ContactEmail;
