import {
  AppBar,
  Avatar,
  Box,
  Button,
  Dialog,
  makeStyles,
  Slide,
  Snackbar,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import React from "react";

import { FormActions } from "../UserProfile/MyCourses";
import CloseIcon from "@material-ui/icons/Close";
import CourseDetails from "./Details/CourseDetails";
import SessionDetails from "./Details/SessionDetails";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { category } from "../../data/categories";
import categoryImage from "../../images/categories/default.png";

import create from "../../images/create.svg";

import MuiAlert from "@material-ui/lab/Alert";
import CheckIcon from "@material-ui/icons/Check";

import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import getApi from "../../utils/apis";
import { useContext } from "react";
import { makeAxiosRequest } from "../../utils/axios";


const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    backgroundColor: "#000",

    maxHeight: "100vh",
    position: "relative",
  },
  title: {
    padding: 0,
  },
  appbar: {
    position: "relative",
    background: "#000",
    padding: "0 4vw",
  },
  main: { display: "flex", overflow: "hidden" },
  profile: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },

  rightPanel: {
    width: "20vw",
    marginRight: "4vw",
    // background: "#0C0C0C",
    height: "auto",
    borderRadius: "10px",
    [theme.breakpoints.down("md")]: {
      marginRight: "2vw",
    },
    [theme.breakpoints.down("sm")]: {
      width: "0",
    },
  },
  middlePannel: {
    flexGrow: 1,
    height: "100%",
    paddingRight: "2vw",
    [theme.breakpoints.down("md")]: {
      paddingRight: "1vw",
    },
  },
  middlePanelSteps: {
    flexGrow: 1,
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginBottom: "20px",
  },
  back: {
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.2)",
      transition: "all 0.3s ease-in-out",
      background: "#FF4160",
    },
  },
  toolbar: {
    padding: 0,
    paddingTop: "2vh",
    display: "flex",
    justifyContent: "space-between",
  },
  course: {
    textAlign: "center",
  },
  heading: {
    fontSize: "1.2rem",
    textAlign: "center",
  },
  description_style: {
    fontSize: "0.6rem",
    textAlign: "center",
  },
  rightPanelContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#0C0C0C",
    padding: "40px 2vw",
    borderRadius: "10px",
    [theme.breakpoints.down("sm")]: {
      width: "0",
    },
  },
  sessions_style: {
    marginTop: "20px",
    width: "100%",
    height: "auto",
    borderRadius: "10px",
    background: "#0C0C0C",
    paddingTop: "20px",
  },
  rightPanelImage: {
    display: "flex",
    alignItems: "flex-end",
    height: "100%",
    width: "30vw",
    marginRight: "5vw",
    [theme.breakpoints.down("sm")]: {
      width: "0",
    },
  },
  rightPaneltext: {
    fontSize: "1rem",
    textAlign: "center",
    color: "#FF4160",
  },
  toobarStep0: {
    padding: 0,
    paddingTop: "2vh",
    display: "flex",
    justifyContent: "flex-end",
  },
  snackbar: {
    backgroundColor: "#0E0E0E",
  },
}));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const CourseDetailsContext = React.createContext();
function CourseDialog() {
  const classes = useStyles();

  const { open, setOpen } = React.useContext(FormActions);

  const [StepInput, setStepInput] = React.useState("");
  const [currentStep, setCurrentStep] = React.useState(0);
  const [TabIndex, setTabIndex] = React.useState(0);
  const [StepContent, setStepContent] = React.useState([
    {
      order: 0,
      title: "",
      description: "",
      visited: false,
    },
  ]);

  const [courseDetails, setCourseDetails] = React.useState({
    title: "",
    description: "",
    category: "",
    startDate: new Date(),
    endDate: null,
    sessions: "1",
  });

  const handleClose = () => {
    console.log(Cookies.get("jwt"));

    // console.log(courseData);
    setOpen(false);
  };
  const isXs = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const [snackbar, setSnackbar] = React.useState(false);
  // const showSaveAlert = () => {
  // 	setSnackbar(true);
  // };

  const snackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar(false);
  };
  // window.onbeforeunload = function () {
  // 	return "Data will be lost if you leave the page, are you sure?";
  // };

  const getImage = () => {
    let obj = category.find((item) => item.name === courseDetails.category);

    //Test
    if (obj) {
      switch (obj.name) {
        case "Art":
          return obj.icon.Art;
        case "Music":
          return obj.icon.Music;
        case "Dance":
          return obj.icon.Dance;
        case "Singing":
          return obj.icon.Singing;
        case "Theatre":
          return obj.icon.Theatre;
        default:
          return "";
      }
    } else {
      return categoryImage;
    }
  };

  return (
    <>
      <Dialog
        classes={{
          paper: classes.dialogPaper,
        }}
        aria-labelledby="form-dialog-title"
        open={open}
        onClose={handleClose}
        fullScreen
        TransitionComponent={Transition}>
        <AppBar className={classes.appbar}>
          <Toolbar
            classes={
              currentStep === 1
                ? { gutters: classes.toolbar }
                : { gutters: classes.toobarStep0 }
            }>
            {currentStep === 1 ? (
              <ArrowBackIcon
                onClick={() => {
                  setCurrentStep(0);
                }}
                className={classes.back}>
                Previous
              </ArrowBackIcon>
            ) : null}
            <CloseIcon onClick={handleClose} className={classes.back} />
          </Toolbar>
        </AppBar>
        <div className={classes.main}>
          <div
            className={
              currentStep === 0
                ? classes.middlePannel
                : classes.middlePanelSteps
            }>
            <CourseDetailsContext.Provider
              value={{
                StepInput,
                setStepInput,
                TabIndex,
                setTabIndex,
                StepContent,
                setStepContent,
                currentStep,
                setCurrentStep,
                courseDetails,
                setCourseDetails,
              }}>
              {currentStep === 0 ? (
                <CourseDetails />
              ) : (
                <SessionDetails sessionNumber={courseDetails.sessions} />
              )}
            </CourseDetailsContext.Provider>
          </div>
          <CourseDetailsContext.Provider value={{ setCurrentStep }}>
            <div
              className={
                currentStep === 1 ? classes.rightPanel : classes.rightPanelImage
              }>
              {currentStep === 0 ? (
                !isXs ? (
                  <img
                    src={create}
                    alt=""
                    width="100%"
                    height="100%"
                    style={{ objectFit: "contain" }}
                  />
                ) : null
              ) : !isXs ? (
                <>
                  <RightPanelContainer
                    classes={classes}
                    getImage={getImage()}
                    courseDetails={courseDetails}
                  />
                </>
              ) : null}
            </div>
          </CourseDetailsContext.Provider>
        </div>
      </Dialog>
      <Snackbar open={snackbar} autoHideDuration={2000} onClose={snackbarClose}>
        <MuiAlert
          icon={<CheckIcon fontSize="inherit" style={{ color: "#FF4160" }} />}
          // onClose={snackbarClose}
          severity="success"
          classes={{ root: classes.snackbar }}>
          <strong style={{ color: "white" }}>
            Your Course Successfully published!
          </strong>
        </MuiAlert>
      </Snackbar>
    </>
  );
}

const RightPanelContainer = ({ classes, getImage, courseDetails }) => {
  const { title, description, sessions } = courseDetails;
  const { heading, description_style, sessions_style, rightPaneltext } =
    classes;

  const { setCurrentStep } = useContext(CourseDetailsContext);

  const getCourseDetails = useSelector((state) => state.publish.Course);
  const getSessionsDetials = useSelector((state) => state.publish.Sessions);
  const { setOpen } = React.useContext(FormActions);

  const publishCourse = () => {
    let sessionsData = getSessionsDetials;
    console.log(sessionsData);
    let newSessions = [];

    for (let key in sessionsData) {
      newSessions.push({
        ...sessionsData[key],
        order: key,
      });
    }
    console.log(newSessions);
    console.log(Cookies.get("jwt"));

    // axios({
    // 	method: "post",
    // 	url: getApi("api/course/instructor"),
    // 	headers: { Authorization: Cookies.get("jwt") },
    // 	data: {
    // 		Course: getCourseDetails,

    // 		Sessions: newSessions,
    // 	},
    // })
    // 	.then((response) => {
    // 		console.log(response);
    // 	})
    // 	.catch((error) => {
    // 		console.log(error);
    // 	});

    makeAxiosRequest(
      getApi("api/course/instructor"),
      "post",
      {
        Authorization: Cookies.get("jwt"),
      },
      {
        Course: getCourseDetails,
        Sessions: newSessions,
      }
    )
      .then((response) => {
        console.log(response);
        setOpen(false);
        setCurrentStep(0);
      })
      .catch((error) => {
        console.log(error);
      });
    setCurrentStep(0);
    setOpen(false);
  };
  return (
    <div>
      <div className={classes.rightPanelContainer}>
        <div className={classes.profile}>
          <Avatar
            variant="rounded"
            className={classes.large}
            sizes="lg"
            src={getImage}
          />
        </div>
        <Typography component={"h4"} variant="h4" className={heading}>
          {title && title === "" ? "Lorem ipsum dolor sit." : title}
        </Typography>
        <Typography component={"p"} variant="body2" className={description_style}>
          {description && description === ""
            ? "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum eveniet sed quo perspiciatis voluptatibus possimus"
            : description}
        </Typography>
      </div>
      <Box display="flex" justifyContent="space-between">
        <div className={sessions_style}>
          <Typography component={"p"} variant="body1" className={rightPaneltext}>
            SESSIONS SCHEDULED
          </Typography>
          <Typography component={"h2"} variant="h2" style={{ textAlign: "center" }}>
            {sessions && sessions}
          </Typography>
        </div>
        
      </Box>

      <Button
        style={{ marginTop: "20px", width: "100%" }}
        onClick={publishCourse}>
        Publish Course
        <ArrowForwardIcon
          style={{
            marginLeft: "10px",
          }}
        />
      </Button>
    </div>
  );
};
export { CourseDialog, CourseDetailsContext };

//FIXME: Publish Course Resonsiveness
