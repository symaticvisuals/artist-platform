import { Box, Typography, useMediaQuery } from "@material-ui/core";
import { useRef } from "react";
import Slider from "react-slick";
import { reviews } from "../../data/dataSource";
import line from "../../images/line.png";
import ReviewCard from "./ReviewCard";

//reviews by students component
function StudentsSection() {
  const slider = useRef(null);
  const isXs = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  const isSm = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isMd = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const isLg = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const isXl = useMediaQuery((theme) => theme.breakpoints.down("xl"));
  const renderNoOfSildes = () => {
    if (isXs) {
      return 1;
    } else if (isSm) {
      return 1;
    } else if (isMd) {
      return 2;
    } else if (isLg) {
      return 2;
    } else if (isXl) {
      return 3;
    }
    return 4;
  };
  const settings = {
    arrows: false,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: renderNoOfSildes(),
    swipeToSlide: true,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 1500,
  };

  return (
    <Box>
      <Typography variant="h2" component={"h2"} style={{ padding: "8vh 5vw" }}>
        What do Our Students Say
      </Typography>

      <Box
        style={{
          background: `url(${line})`,
          height: "auto",
          backgroundRepeat: "repeat-x",
          padding: "2vh 5vw",
        }}>
        <Slider {...settings} ref={slider}>
          {reviews.map((item, idx) => {
            return <ReviewCard key={idx} item={item} />;
          })}
        </Slider>
      </Box>
    </Box>
  );
}
export default StudentsSection;
