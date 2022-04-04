import {
	InputAdornment,
	makeStyles,
	Popover,
	TextField,
	ThemeProvider,
} from "@material-ui/core";
import React from "react";

import FormGroup from "./FormGroup";
import { CourseDetailsContext } from "./CourseDialog";
import TodayIcon from "@material-ui/icons/Today";
import { Calendar } from "react-date-range";
import StepperTheme from "../../theme/StepperTheme";
import courseThumbnail from "../../images/background.jpg";
import { useDispatch } from "react-redux";
import { setSessions } from "../../redux/Slices/publishDetails";
const useStyles = makeStyles((theme) => ({
	root: {},
	textField: {
		width: "100%",
		marginBottom: "20px",
		fontSize: "12px",
	},
	tabIndex: {
		width: "50%",
		// marginTop: "10px",
	},
	outlined: {
		color: "#646464",
	},
	thumbnail: {
		height: "25vh",
		marginBottom: "20px",
	},
}));
function SessionPanelItem(props) {
	const classes = useStyles();
	const { item } = props;
	const dispatch = useDispatch();

	const [content, setContent] = React.useState({});
	const { StepContent, setStepContent } =
		React.useContext(CourseDetailsContext);
	const [date, selectedDate] = React.useState(new Date());
	const handleSelect = (date) => {
		selectedDate(date);
		const StepContentNew = { ...StepContent };
		setContent({ ...StepContentNew, date: date.toDateString() });
		StepContentNew[item].date = date;
		setStepContent(StepContentNew);
		dispatch(setSessions(StepContentNew[item]));
	};
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	const open = Boolean(anchorEl);
	const id = open ? "simple-popover" : undefined;
	return (
		<div style={{ paddingRight: "2vw", width: "100%" }}>
			<div className={classes.thumbnail}>
				<img
					src={courseThumbnail}
					alt=''
					height='100%'
					width='100%'
					style={{ objectFit: "cover", borderRadius: "5px" }}
				/>
			</div>
			<FormGroup
				classes={classes.textField}
				Value={StepContent[item].title}
				onChange={(e) => {
					const StepContentNew = { ...StepContent };
					setContent({ ...content, title: e.target.value });
					StepContentNew[item].title = e.target.value;
					setStepContent(StepContentNew);
					dispatch(setSessions(StepContentNew[item]));
				}}
				Label={"What will be your Session" + JSON.stringify(item+1) + " title?"}
				LabelProps={classes.outlined}
			/>
			<FormGroup
				Placeholder={
					"What will be your Session" + JSON.stringify(item+1) + " description?"
				}
				Value={StepContent[item].description}
				onChange={(e) => {
					const StepContentNew = { ...StepContent };
					StepContentNew[item].description = e.target.value;
					setContent({ ...content, description: e.target.value });
					setStepContent(StepContentNew);
					dispatch(setSessions(StepContentNew[item]));
				}}
				classes={classes.textField}
				Rows={4}
				Label={
					"What will be your Session" + JSON.stringify(item+1) + " description?"
				}
				LabelProps={classes.outlined}
			/>

			<ThemeProvider theme={StepperTheme}>
				<TextField
					placeholder='Duration of the Course?'
					variant='outlined'
					color='secondary'
					value={date.toDateString()}
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
										<Calendar
											className={{ root: classes.dateRangePicker }}
											date={StepContent[item].date}
											rangeColors={["#FF2B51", "#FF2B51"]}
											color='#0E0E0E'
											onChange={handleSelect}
										/>
									</div>
								</Popover>
							</InputAdornment>
						),
					}}
				/>
			</ThemeProvider>
			<FormGroup
				classes={classes.textField}
				Value={StepContent[item].link}
				onChange={(e) => {
					const StepContentNew = { ...StepContent };
					StepContentNew[item].link = e.target.value;
					setContent({ ...content, link: e.target.value });
					setStepContent(StepContentNew);
					dispatch(setSessions(StepContentNew[item]));
				}}
				Label={"Link to your Session " + JSON.stringify(item+1) + " ?"}
				LabelProps={classes.outlined}
			/>
		</div>
	);
}

export default SessionPanelItem;
