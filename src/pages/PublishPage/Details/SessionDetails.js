import { Box, makeStyles, Snackbar, Tab, Tabs, useMediaQuery } from "@material-ui/core";
import React from "react";
import { CourseDetailsContext } from "../CourseDialog";
import PropTypes from "prop-types";
import SessionPanelItem from "../SessionPanel";

import MuiAlert from "@material-ui/lab/Alert";
import CheckIcon from "@material-ui/icons/Check";
import {
	setCurrentSession,
	setSessions,
} from "../../../redux/Slices/publishDetails";
import { useDispatch } from "react-redux";

function SessionPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && (
				<div>
					<h3>{children}</h3>
				</div>
			)}
		</div>
	);
}

SessionPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function allyProps(index) {
	return {
		"id": `vertical-tab-${index}`,
		"aria-controls": `vertical-tabpanel-${index}`,
	};
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#000",
    display: "flex",
    height: "90vh",
    [theme.breakpoints.down("sm")]: {
      flexGrow: 0,
      height: "auto",
	  marginBottom:"10px"
    },
    // alignItems: "center",
  },
  tabs: {
    backgroundColor: "#000",
    borderRadius: "0 10px 10px 0",
    color: "white",

    marginRight: theme.spacing(3),
  },
  selected: {
    // padding: "20px",
    backgroundColor: "#111111",
    // padding: "15px",
    transition: "all 0.2s ease-out",
    borderRadius: "0 10px 10px 0",
    borderRight: "2px solid #FF4160",
    borderBottom: "2px solid #FF4160",
    borderTop: "2px solid #FF4160",
  },
  snackbar: {
    backgroundColor: "#0E0E0E",
  },
}));
function SessionDetails({ sessionNumber }) {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);
	const { StepContent, setStepContent } =
		React.useContext(CourseDetailsContext);

	const [snackbar, setSnackbar] = React.useState(false);
 const isXs = useMediaQuery((theme) => theme.breakpoints.down("sm"));
	const showSaveAlert = () => {
		setSnackbar(true);
	};

	const snackbarClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setSnackbar(false);
	};

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const dispatch = useDispatch();
	 
	return (
		<Box
			style={!isXs?{
				display: "flex",
				
			}:{
				display: "block",
				
			}}
		>
			<div className={classes.root}>
				<Tabs
					TabIndicatorProps={{ style: { display: "none" } }}
					orientation={isXs?"horizontal":"vertical"}
					variant='scrollable'
					value={value}
					onChange={handleChange}
					aria-label='Vertical tabs'
					className={classes.tabs}
				>
					{Array.from(Array(parseInt(sessionNumber)).keys()).map((item) => {
						return (
							<Tab
								classes={{ selected: classes.selected }}
								label={`Session ${+item + 1}`}
								{...allyProps(item)}
								onClick={(e) => {
									e.preventDefault();
									const StepContentNew = { ...StepContent };

									if (!StepContentNew[+item]) {
										StepContentNew[+item] = {
											order: +item,
											title: "",
											description: "",
											date: "",
											link: "",
										};
										dispatch(setSessions(StepContentNew[+item]));
									}
									showSaveAlert();

									setStepContent(StepContentNew);
									dispatch(setCurrentSession(+item));
								}}
							/>
						);
					})}
				</Tabs>
			</div>
			<Snackbar open={snackbar} autoHideDuration={1000} onClose={snackbarClose}>
				<MuiAlert
					icon={<CheckIcon fontSize='inherit' style={{ color: "#FF4160" }} />}
					// onClose={snackbarClose}
					severity='success'
					classes={{ root: classes.snackbar }}
				>
					<strong style={{ color: "white" }}>Your changes are saved!</strong>
				</MuiAlert>
			</Snackbar>
			<div
				className=''
				style={{
					width: "100%",
					height: "90vh",
					overflowX: "hidden",
					overflowY: "auto",
					marginRight: "30px",
				}}
			>
				{Array.from(Array(parseInt(sessionNumber)).keys()).map((item, key) => {
					return (
						<SessionPanel value={value} index={item}>
							<SessionPanelItem item={item} />
						</SessionPanel>
					);
				})}
			</div>
			<div className=''></div>
		</Box>
	);
}

export default SessionDetails;
