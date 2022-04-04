import {
  Box,
  CircularProgress,
  makeStyles,
  ThemeProvider,
  Typography,
  useMediaQuery,
} from "@material-ui/core";

import React from "react";
import { useIsFetching } from "react-query";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useProfile from "../hooks/useProfile";

import brandLogo from "../images/brandLogo.png";

import navTheme from "../theme/navTheme";
import { DialogBox } from "./Login/DialogBox";
import MobileNavComponents from "./Login/MobileNavComponents";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "30px 5vw",
    justifyContent: "space-between",
    top: 0,
    alignItems: "center",
    transition: "top 0.3s",
    display: "flex",
    width: "90%",
  },
  brandLogo: {
    width: "auto",
    height: "30px",
    marginRight: "10px",
  },
  navItem: {
    margin: "0 12px",
    fontFamily: "Sora",
    fontSize: "1.1rem",
  },
  conatiner: { flexGrow: 1, display: "flex", alignItems: "center" },
  link: {
    color: "white",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
      borderBottom: "2px solid #FF416C",
      transition: "all 0.5s ease-out",
    },
  },
  scrollingEffect: { background: "black" },
  betaTesterContainer: {},
  betaText: {
    color: "white",
    marginRight: "10px",
  },
}));

export default function Navbar() {
  const jwtVerify = useSelector((state) => state.loginStatus.jwt);
  const userVerify = useSelector((state) => state.user);
  
  const classes = useStyles();
  const isSm = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <ThemeProvider theme={navTheme}>
      <Box display="flex" className={classes.root}>
        <Box className={classes.container}>
          <div>
            <Link to="/">
              <img
                src={brandLogo}
                alt="brandLogo"
                className={classes.brandLogo}></img>
            </Link>
          </div>
        </Box>
        <Box display="flex" style={{ alignItems: "center" }}>
          <div>
            {userVerify && jwtVerify !== null ? (
              isSm ? (
                <MobileNavComponents />
              ) : (
                <DesktopComponents />
              )
            ) : null}
          </div>
          {/* <BetaVersionTester /> */}

          <DialogBox />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

const DesktopComponents = () => {
  const isFetching = useIsFetching();
  const classes = useStyles();
   const { data } = useProfile();
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <CircularProgress
        color="secondary"
        style={{ opacity: isFetching ? 1 : 0 }}
      />
      {data && data.data.roles.includes("student") ? (
        <Typography variant="h6" component={"h6"} className={classes.navItem}>
          <Link to="/sessions" className={classes.link}>
            Courses
          </Link>
        </Typography>
      ) : (
        <></>
      )}

      <Typography variant="h6" component={"h6"} className={classes.navItem}>
        <Link to="/myCourses" className={classes.link}>
          Dashboard
        </Link>
      </Typography>
    </div>
  );
};


