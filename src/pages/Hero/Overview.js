import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { sections } from "../../data/dataSource";

const useStyles = makeStyles((theme) => ({
  heading: {
    textAlign: "center",
    marginBottom: "3vh",
    // fontSize: "3rem",
    // [theme.breakpoints.up("xs") && theme.breakpoints.down("sm")]: {
    //   fontSize: "2rem",
    // },
    // [theme.breakpoints.down("sm")]: {
    //   fontSize: "1.5rem",
    // },
  },
  card: {
    width: "400px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // margin: "0 20px",
  },
  imageContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    height: "250px",
    "&:hover": {
      transition: "all 0.5s ease",
      // borderTop: "2px solid #FF4257",
      transform: "scale(1.1)",
    },
    // background: "linear-gradient(rgba(17,17,18), rgba(17,17,18,0))",
  },
  root: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",

    marginBottom: "15vh",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "center",
      marginTop: "7vh",

      //   marginBottom: "15vh",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      margin: "7vh 0",

      //   marginBottom: "15vh",
    },
  },
  image: {
    width: "20vw",
    objectFit: "contain",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  contentContainer: {
    width: "100%",
    [theme.breakpoints.up("xs") && theme.breakpoints.down("sm")]: {
      width: "80%",
      marginBottom: "5vh",
    },
  },
  description: {
    fontSize: "0.9rem",
    textAlign: "center",
  },
  title: {
    textAlign: "center",
    color: "#FF4257",
  },
}));
function Overview() {
  const classes = useStyles();
  return (
    <div style={{ marginTop: "10vh" }}>
      <Typography component={"h3"} variant="h3" className={classes.heading}>
        {"What you will Get in 4Art?"}
      </Typography>
      <Box className={classes.root}>
        {sections.map((section, index) => {
          return (
            <Box className={classes.card} key={index}>
              <Box className={classes.imageContainer}>
                <img
                  src={section.image}
                  alt={section.title}
                  className={classes.image}
                />
              </Box>
              <Box className={classes.contentContainer}>
                <Typography component={"h5"} variant="h5" className={classes.title}>
                  {section.title}
                </Typography>
                <Typography component={"p"} variant="body1" className={classes.description}>
                  {section.description}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </div>
  );
}

export default Overview;
