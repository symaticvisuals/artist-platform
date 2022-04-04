import {Box, makeStyles, Typography} from "@material-ui/core";

import {useRef} from "react";
import Slider from "react-slick";
import {teacherExperience} from "../../data/dataSource";
import TeacherCardLayout from "./TeacherCardLayout";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "100vw",
        background: "linear-gradient(135deg,#000 0%,#222225 100% )",
        height: "50vh",
        [theme.breakpoints.down("sm")]: {
            height: "auto",
            padding: "3vh 5vw",
        },
    },
    media: {
        height: "50vh",
    },
    title: {
        display: "flex",
        [theme.breakpoints.down("xs")]: {fontSize: "1.8rem"},
    },
    designation: {color: "#e5e5e5", marginBottom: ".4em"},
    experience: {
        color: "#bbb",
        overflow: "hidden",
        [theme.breakpoints.down("xs")]: {fontSize: ".8rem"},
    },
    author: {
        marginBottom: "1px",
    },
}));
export default function Corousel(props) {
    const slider = useRef(null);
    const renderNoOfSildes = () => {
        return 1;
    };
    const classes = useStyles();
    const settings = {
        arrows: false,
        infinite: false,
        centerPadding: "20px",
        slidesToShow: renderNoOfSildes(),
        swipeToSlide: true,
    };

    return (
      <div
        style={{
          position: "relative",
          margin: "10vh 5vw",
          "&:prevArr": {
            position: "absolute",
            top: "50%",
            left: 0,
            fontSize: "2rem",
          },
        }}>
        <Box>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="h2"
              component={"h2"}
              style={{}}
              className={classes.title}>
              Founders Vision
            </Typography>
          </Box>

          <br></br>
          <br></br>
          <Slider {...settings} ref={slider}>
            {teacherExperience.map((item, idx) => {
              return (
                <TeacherCardLayout key={idx} classes={classes} item={item} />
              );
            })}
          </Slider>
        </Box>
      </div>
    );
}
