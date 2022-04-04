import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";

import { Link } from "react-router-dom";
import heroImage from "../../images/background.png";
import "../../assets/css/mouse.css";
// import hero from "../../data/hero.json";
// import Corousel from "./Corousel";
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "1em",
    minHeight: "100vh",
    backgroundImage: `linear-gradient(rgba(
        0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)),url(${heroImage})`,

    backgroundSize: "cover",

    maxWidth: "100%",
    boxSizing: "border-box",
    // maxHeight: "100%",
    // zIndex: 3,
    // position: "relative",
    fontSize: "30px",
    marginTop: "-12vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    padding: "0 4vw",
    textAlign: "center",

    [theme.breakpoints.down("xs")]: {
      backgroundPosition: "center",
      maxHeight: "40vh",
    },
    [theme.breakpoints.down("sm")]: {
      minHeight: "60vh",
    },
    [theme.breakpoints.down("md")]: {
      minHeight: "100vh",
    },
  },
  text: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  heading: {
    fontWeight: "800",
    fontSize: "4em",
    lineHeight: ".9",
    marginTop: "25vh",
    "@media (max-width:600px)": {
      fontSize: "2em",
      marginTop: "25vh",
    },
    "@media (min-width:600 && max-width:1040px)": {
      fontSize: "3em",
      marginTop: "25vh",
    },
  },
  conatainer: {
    width: "50%",
    "@media (max-width:1290px)": {
      width: "100%",
    },
  },
  span: {
    fontSize: "1.5em",
    "@media (max-width:600px)": {
      fontSize: "1.3em",
    },
    background: "-webkit-linear-gradient(#ff416c, #ff4a35)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
  description: {
    fontWeight: 400,
    marginTop: "20px",
    fontSize: ".9em",
    lineHeight: "1.1",
    color: "#fff",
    fontFamily: "Outfit",
    "@media (max-width:600px)": {
      fontSize: "0.5em",
    },
  },
  buttons: {
    paddingTop: "30px",
    display: "flex",
    // [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
    // },
  },
  button: {
    fontFamily: "Quicksand",
    [theme.breakpoints.down("xs")]: {
      width: "12em",
    },
  },
  buttonSecondary: {
    fontFamily: "Quicksand",
    background: "transparent",
    "&:hover": {
      background: "transparent",
    },
    [theme.breakpoints.down("xs")]: {
      width: "12em",
    },
  },

  avatars: {
    marginTop: "30px",
    display: "flex",
    alignItems: "center",
  },
}));
export default function Index() {
  const classes = useStyles();
  return (
    <div className={classes.root} style={{}}>
      <div className={classes.conatainer}>
        <Typography
          variant="h1"
          component={"h1"}
          className={clsx(classes.text, classes.heading)}>
          artist’s world is <span className={classes.span}>limitless</span>
        </Typography>
        <Typography
          variant="body1"
          component={"p"}
          className={clsx(classes.text, classes.description)}>
          Pour your heart into art. 4art is the place for you to explore your
          creative mind, take a journey inwards and find the art form that has
          your name written on it!
        </Typography>
        <Box className={classes.buttons}>
          <Link to="/plans" style={{ color: "white", textDecoration: "none" }}>
            <Button className={classes.button}>View Plans</Button>
          </Link>
          <a href="#contact" style={{ textDecoration: "none" }}>
            <Button className={classes.buttonSecondary}>Try for Free</Button>
          </a>
        </Box>
      </div>
      <div>
        <div className="mouse_scroll">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div>
            <span className="m_scroll_arrows unu"></span>
            <span className="m_scroll_arrows doi"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
//TODO: Increase card height on mobile
//TODO: Add About Us Section in place of carousel home page
//TODO: Replace the carousel with categories
