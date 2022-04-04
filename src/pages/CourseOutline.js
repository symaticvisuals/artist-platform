import { makeStyles } from "@material-ui/core/styles";

import AboutTeacher from "./CourseOutline/AboutTeacher";
import Feedback from "./CourseOutline/Feedback";
import GetReviews from "./CourseOutline/GetReviews";
import Hero from "./CourseOutline/Hero";
import SessionSection from "./CourseOutline/SessionsSection";
import StudentsSection from "./CourseOutline/StudentsSection";
import SummarySection from "./CourseOutline/SummarySection";

const useStyles = makeStyles((theme) => ({
  heading: {
    marginBottom: "3vh",
    fontFamily: "Sora",
    fontWeight: "600",
    color: "#FF4551",
  },
  subHeading: {
    textAlign: "justify",
    fontFamily: "Sora",
  },
  sessionTitle: {
    marginLeft: "20px",
  },
  sessionStatus: { marginRight: "1.6em" },
}));
export default function CourseOutline(...props) {
  const classes = useStyles();
  return (
    <div>
      <Hero section={props.section} classes={classes} />
      <SummarySection section={props.section} classes={classes} />
      <SessionSection classes={classes} />
      <AboutTeacher classes={classes} />
      <StudentsSection />
      <GetReviews/>
      <Feedback classes={classes} />
    </div>
  );
}
