import { makeStyles, Typography, useMediaQuery, Box } from "@material-ui/core";

import { homePage } from "../../data/dataSource";

import { useRef } from "react";
import Slider from "react-slick";

import HomePageCard from "../../Components/HomePageCard";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    margin: "0 4vw",
    marginBottom: "4vh",
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
  },

  item: {
    display: "flex",
    alignItems: "center",
    textAlign: "right",
  },
  title: {
    marginBottom: "10px",
    textAlign: "center",
  },
}));

export default function Corousel() {
  const slider = useRef(null);
  const isXs = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  const isSm = useMediaQuery(
    (theme) => theme.breakpoints.up("xs") && theme.breakpoints.down("sm")
  );
  const isMd = useMediaQuery(
    (theme) => theme.breakpoints.up("sm") && theme.breakpoints.down("md")
  );
  const isLg = useMediaQuery(
    (theme) => theme.breakpoints.up("md") && theme.breakpoints.down("lg")
  );
  const isXl = useMediaQuery(
    (theme) => theme.breakpoints.up("lg") && theme.breakpoints.down("xl")
  );

  const renderNoOfSildes = () => {
    if (isXs) {
      return 1;
    } else if (isSm) {
      return 2;
    } else if (isMd) {
      return 4;
    } else if (isLg) {
      return 4;
    } else if (isXl) {
      return 6;
    }
    return 3;
  };
  const classes = useStyles();

  const settings = {
    arrows: false,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: renderNoOfSildes(),
    swipeToSlide: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "ease",
  };

  return (
    <div className={classes.root}>
      <div className={classes.parent}>
        <br />
        <Typography variant="h3" component={"h3"} className={classes.title}>
          {homePage.title}
        </Typography>
        <Box mt={4} mb={4}>
          <Slider {...settings} ref={slider}>
            {homePage.categories.map((item, idx) => {
              return <HomePageCard key={idx} classes={classes} item={item} />;
            })}
          </Slider>
        </Box>
        <br></br>
      </div>
    </div>
  );
}
