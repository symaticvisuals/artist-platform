import { makeStyles, useMediaQuery, Typography } from "@material-ui/core";
import CardComponent from "../../Components/Card";
import { data } from "../../data/dataSource";
import { useRef } from "react";
import Slider from "react-slick";
import LeftArrow from "../../Components/LeftArrow";
import RightArrow from "../../Components/RightArrow";
import useCourses from "../../hooks/useCourses";
import Alert from "@material-ui/lab/Alert";

import React from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    margin: "0 4vw",
    "&:prevArr": {
      position: "absolute",
      top: "50%",
      left: 0,
      fontSize: "2rem",
    },

    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      padding: "0 20px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 20px",
      margin: "0 1vw",
    },
  },
  parent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "5vh",
  },

  item: {
    display: "flex",
    alignItems: "center",
    textAlign: "right",
  },
}));

function Corousel() {
  const slider = useRef(null);
  const isXs = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  const isSm = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isMd = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const isLg = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const isXl = useMediaQuery((theme) => theme.breakpoints.down("xl"));

  // a function to get the number of slides to be shown on the carousel
  const renderNoOfSildes = () => {
    if (isXs) {
      return 1.5;
    } else if (isSm) {
      return 2.4;
    } else if (isMd) {
      return 3;
    } else if (isLg) {
      return 5;
    } else if (isXl) {
      return 6;
    }
    return 4;
  };

  const classes = useStyles();
  const showArrow = isXs || isSm ? false : true;
  const settings = {
    arrows: showArrow,
    infinite: false,
    centerPadding: "20px",
    slidesToShow: renderNoOfSildes(),
    swipeToSlide: true,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
  };

  //get all the courses here
  const coursesQuery = useCourses();

  return (
    <div className={classes.root}>
      {coursesQuery.isError ? (
        <Alert severity="error" variant="filled">
          Cannot Fetch Courses
        </Alert>
      ) : (
        () => {
          console.log(
            "🚀 ~ file: Corousel.js ~ line 78 ~ Corousel ~ coursesQuery",
            coursesQuery.data.data.rows
          );
        }
      )}
      {/* creating carousel */}
      {data.map((parent, idx) => {
        return (
          <div className={classes.parent} key={idx}>
            <Typography component={"h3"} variant="h3">
              {parent.title}
            </Typography>
            <br></br>

            <Slider {...settings} ref={slider}>
              {parent.courses.map((item, idx) => {
                return (
                  <CardComponent key={idx} classes={classes} item={item} />
                );
              })}
            </Slider>
            <br></br>
          </div>
        );
      })}
    </div>
  );
}

export default Corousel;
