import { makeStyles } from "@material-ui/core";
import React from "react";
import FormGroup from "./PublishPage/FormGroup";

const useStyles = makeStyles((theme) => ({
	root: {},
	textField: {
		width: "100%",
		marginTop: "10px",
		fontSize: "12px",
	},
	tabIndex: {
		width: "50%",
		marginTop: "10px",
	},
}));
function CreateCourse() {
	const [CourseTitle, setCourseTitle] = React.useState("");
	const [courseDescription, setCourseDescription] = React.useState("");
	const [courseCategory, setCourseCategory] = React.useState("");

	const classes = useStyles();
	return (
		<div className={classes.root}>
			<FormGroup
				Placeholder='What will be your Course Name?'
				Value={CourseTitle}
				onChange={(e) => setCourseTitle(e.target.value)}
				classes={classes.textField}
			/>
			<FormGroup
				Placeholder='Give some description for your course?'
				Value={courseDescription}
				onChange={(e) => setCourseDescription(e.target.value)}
				classes={classes.textField}
			/>
			<FormGroup
				Placeholder='Select a category for your course'
				Value={courseCategory}
				onChange={(e) => setCourseCategory(e.target.value)}
				classes={classes.textField}
			/>
			<FormGroup
				Placeholder='No. of Sessions planning to Schedule?'
				Value={courseCategory}
				onChange={(e) => setCourseCategory(e.target.value)}
				classes={classes.textField}
			/>
			<FormGroup
				Placeholder='Upload a Thumbnail for the Course'
				Value={courseCategory}
				onChange={(e) => setCourseCategory(e.target.value)}
				classes={classes.textField}
			/>
		</div>
	);
}

export default CreateCourse;
