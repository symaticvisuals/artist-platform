import {
	Button,
	InputAdornment,
	makeStyles,
	Popover,
	TextField,
	ThemeProvider,
	Typography,
} from "@material-ui/core";
import TodayIcon from "@material-ui/icons/Today";
import React from "react";

import FormGroup from "../FormGroup";
import { CourseDetailsContext } from "../CourseDialog";

import { setCourse } from "../../../redux/Slices/publishDetails";
import { useDispatch } from "react-redux";
import { DateRange } from "react-date-range";
import StepperTheme from "../../../theme/StepperTheme";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import isNumeric from "../../../data/assets";

const useStyles = makeStyles((theme) => ({
	root: {},
	textField: {
		width: "100%",
		marginTop: "20px",
		fontSize: "12px",
	},
	tabIndex: {
		width: "50%",
		marginTop: "10px",
	},
	outlined: {
		color: "#646464",
	},
	icon: { color: "#646464", fill: "#646464", backgroundColor: "#fff" },
	textFields: {
		margin: "10px 0",
		color: "#e5e5e5",
	},
	selectField: {
		"background": "#0E0E0E",
		"color": "white",
		"padding": "10px",
		// "marginTop": "10px",
		"&:hover": {
			borderLeft: "2px solid #FF2B51",
			background: "#0E0E1A",
		},
	},
	dateRangePicker: {
		display: "none",
	},
}));
function CourseDetails() {
	const { setCurrentStep } = React.useContext(CourseDetailsContext);

	const { courseDetails, setCourseDetails } =
		React.useContext(CourseDetailsContext);

	const classes = useStyles();

	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	const open = Boolean(anchorEl);
	const id = open ? "simple-popover" : undefined;
	const dispatch = useDispatch();
	const [state, setState] = React.useState([
		{
			startDate: new Date(),
			endDate: null,
			key: "selection",
		},
	]);
	return (
		<div style={{ marginLeft: "7vw" }}>
			{/* <img src={create} alt='' style={{ height: "25vh" }} /> */}
			<Typography variant='h1' style={{ marginBottom: "40px" }}>
				Create Course
			</Typography>

			<div className={classes.root}>
				
				<FormGroup
					Value={courseDetails.title}
					onChange={(e) =>
						setCourseDetails({ ...courseDetails, title: e.target.value })
					}
					classes={classes.textField}
					Label='What will be your Course Name?'
					LabelProps={classes.outlined}
				/>

				<FormGroup
					Placeholder=''
					Value={courseDetails.description}
					onChange={(e) =>
						setCourseDetails({ ...courseDetails, description: e.target.value })
					}
					Label='Give some description for your course?'
					LabelProps={classes.outlined}
					classes={classes.textField}
					Rows='4'
				/>

				<FormGroup
					Value={courseDetails.category}
					onChange={(e) => {
						setCourseDetails({ ...courseDetails, category: e.target.value });
						console.log(e.target.value);
					}}
					classes={classes.textField}
					InputType='select'
					LabelProps={classes.outlined}
				/>

				<FormGroup
					Value={courseDetails.sessions}
					onChange={(e) =>
						setCourseDetails({ ...courseDetails, sessions: e.target.value })
					}
					classes={classes.textField}
					Label='No. of Sessions planning to Schedule?'
					LabelProps={classes.outlined}
					Type='number'
				/>
				<ThemeProvider theme={StepperTheme}>
					<TextField
						variant='outlined'
						color='secondary'
						label='Select the duration of the Course'
						placeholder='Select the duration of the Course'
						InputLabelProps={{ className: classes.outlined }}
						value={
							courseDetails.startDate === "" || courseDetails.endDate === null
								? new Date().toDateString()
								: courseDetails.startDate.toDateString() +
								  " - " +
								  courseDetails.endDate.toDateString()
						}
						fullWidth
						className={classes.textField}
						InputProps={{
							endAdornment: (
								<InputAdornment position='end'>
									<buttton
										aria-describedby={id}
										onClick={handleClick}
										style={{ cursor: "pointer" }}
									>
										<TodayIcon style={{ marginRight: "12px" }} />
									</buttton>
									<Popover
										id={id}
										open={open}
										anchorEl={anchorEl}
										onClose={handleClose}
										anchorOrigin={{
											vertical: "center",
											horizontal: "left",
										}}
										transformOrigin={{
											vertical: "center",
											horizontal: "center",
										}}
									>
										<div>
											{" "}
										
											<DateRange
												editableDateInputs={true}
												onChange={(item) => {
													setState([item.selection]);
													setCourseDetails({
														...courseDetails,
														startDate: item.selection.startDate,
														endDate: item.selection.endDate,
													});
													console.log(courseDetails);
												}}
												moveRangeOnFirstSelection={false}
												ranges={state}
												rangeColors={["#FF2B51", "#FF2B51"]}
												color='#0E0E0E'
											/>
										</div>
									</Popover>
								</InputAdornment>
							),
						}}
					/>
				</ThemeProvider>
			</div>
			<Button
				onClick={() => {
					if (isNumeric(CourseDetails.sessions) || courseDetails.sessions < 1) {
						alert("Invalid Sessions");
						setCourseDetails({ ...courseDetails, sessions: "1" });
					} else if (
						courseDetails.title === "" ||
						courseDetails.description === "" ||
						courseDetails.category === ""
					) {
						alert("You can't leave this field Empty");
					} else {
						setCurrentStep(1);
						console.log(courseDetails);
						dispatch(setCourse(courseDetails));
					}
				}}
				style={{ marginTop: "20px" }}
			>
				Next
			</Button>
		</div>
	);
}

export default CourseDetails;
