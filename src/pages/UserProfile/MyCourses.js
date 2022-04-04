import {
	Box,
	Button,
	Fab,
	Grid,
	Typography,
	useMediaQuery,
} from "@material-ui/core";
import coursePage from "../../images/coursePage.png";
import AddCircleSharpIcon from "@material-ui/icons/AddCircleSharp";
import React from "react";
import MyCourseCard from "../../Components/MyCourseCard";
import { myCourses } from "../../data/dataSource";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/styles";

import { CourseDialog } from "../PublishPage/CourseDialog";
import { useAtom } from "jotai";
import { atomWithHash } from "jotai/utils";
import useProfile from "../../hooks/useProfile";
import useMyCourses from "../../hooks/useMyCourses";
const useStyles = makeStyles((theme) => ({
  fab: {
    position: "absolute",
    bottom: theme.spacing(4),
    right: theme.spacing(3),
  },
  courseCreation: {
    display: "flex",
    background: "#090909",
    padding: "1em",
    borderRadius: "10px",
    flexWrap: "wrap",
    border: "2px solid #FF416C",
    alignItems: "baseline",
    marginBottom: "10px",
    margin: "0 10px",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  createCourse: {
    [theme.breakpoints.down("xs")]: {
      marginBottom: "10px",
    },
  },
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    maxHeight: "100vh",
  },
  text: {
    fontWeight: 600,
  },
  button: {
    background: "#222222",
    borderRadius: "60px",
    width: "18em",
  },
}));

const FormActions = React.createContext();
const dialogState = atomWithHash("publish", false);
function MyCourses() {
	const classes = useStyles();
  const { data: user } = useProfile();
	const isXs = useMediaQuery((theme) => theme.breakpoints.down("sm"));
	const [open, setOpen] = useAtom(dialogState);
 
   const { data: courses } = useMyCourses();
 const isSm = useMediaQuery((theme) => theme.breakpoints.down("sm"));
	const handleClickOpen = () => {
		setOpen(true);
	};
	return (
    <>
      {courses && courses.data.count > 0 ? (
        <Box style={!isXs ? { padding: "0 5vw" } : null}>
          {user && user.data.roles.includes("instructor") ? (
            <Box className={classes.courseCreation}>
              <Typography
                variant="h6"
                component={"h6"}
                style={{ flexGrow: 1, fontWeight: "bold", color: "#e5e5e5" }}
                className={classes.createCourse}>
                Dive into Course Creation
              </Typography>

              <Button className={classes.button} onClick={handleClickOpen}>
                Create your Course
              </Button>
            </Box>
          ) : (
            <></>
          )}

          <Grid container direction={"row"} spacing={24}>
            {myCourses.map((course, index) => {
              return <MyCourseCard course={course} key={index}></MyCourseCard>;
            })}
          </Grid>
          {isXs ? (
            <Fab
              className={classes.fab}
              color="secondary"
              aria-label="add"
              onClick={handleClickOpen}>
              <AddIcon
                style={{
                  textDecoration: "none",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
            </Fab>
          ) : null}
        </Box>
      ) : (
        <Box className={classes.root} style={isSm ? { marginTop: "10vh" } : {}}>
          <Typography variant="h4" color="secondary" className={classes.text}>
            Looks like you haven't
          </Typography>
          <Typography
            variant="h4"
            color="secondary"
            style={{ color: "white" }}
            className={classes.text}>
            published a course yet.
          </Typography>
          <Box
            style={{
              maxWidth: "80%",
              maxHeight: "80%",
              display: "flex",
              justifyContent: "center",
              margin: "30px 0",
            }}>
            <img src={coursePage} alt="course" width="75%"></img>
          </Box>
          <Button
            className={classes.button}
            startIcon={<AddCircleSharpIcon />}
            onClick={handleClickOpen}>
            Build your First Course
          </Button>
        </Box>
      )}
      <FormActions.Provider value={{ open, setOpen }}>
        <CourseDialog />
      </FormActions.Provider>
    </>
  );
}

export { MyCourses, FormActions };
