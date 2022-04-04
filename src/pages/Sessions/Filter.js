import { Box, makeStyles, Typography, useMediaQuery } from "@material-ui/core";
import { useAtom } from "jotai";
import { atomWithHash } from "jotai/utils";

import React from "react";
import { useRef } from "react";
import Slider from "react-slick";
import LeftArrow from "../../Components/LeftArrow";
import RightArrow from "../../Components/RightArrow";
import { filters } from "../../data/dataSource";
import FilterCard from "./FilterCard";
const useStyles = makeStyles((theme) => ({
  root: { margin: "0 4vw", marginBottom: "5vh" },
  heading: {
    marginBottom: "20px",
  },
}));
const filterState = atomWithHash("filter", "");

export default function Filter() {
  const [, setFilterCategory] = useAtom(filterState);
  const slider = useRef(null);
  const isXs = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  const isSm = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isMd = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const isLg = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const isXl = useMediaQuery((theme) => theme.breakpoints.down("xl"));
  const classes = useStyles();
  const renderNoOfSildes = () => {
    if (isXs) {
      return 2;
    } else if (isSm) {
      return 2.7;
    } else if (isMd) {
      return 3.7;
    } else if (isLg) {
      return 5;
    } else if (isXl) {
      return 6;
    }
    return 4;
  };
  const settings = {
    arrows: true,
    infinite: false,
    centerPadding: "10px",
    slidesToShow: renderNoOfSildes(),
    swipeToSlide: true,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
  };

  return (
    <React.Fragment>
      <Box className={classes.root}>
        <Typography
          variant="h3"
          component="h2"
          className={classes.heading}
          onClick={() => {
            setFilterCategory("");
          }}>
          Browse by Categories
        </Typography>

        <Slider {...settings} ref={slider}>
          {filters.map((item, idx) => {
            return <FilterCard index={idx} item={item} />;
          })}
        </Slider>
      </Box>
    </React.Fragment>
  );
}
