import {
	Button,
	makeStyles,
	Step,
	StepLabel,
	Stepper,
	Typography,
} from "@material-ui/core";
import React from "react";
import StepperTheme from "../theme/StepperTheme";
import CourseDetails from "./PublishPage/CourseDetails";
import FinalPublish from "./PublishPage/FinalPublish";
import PlanningSessions from "./PublishPage/PlanningSessions";
import { ThemeProvider } from "@material-ui/core/styles";
import Lottie from "react-lottie";
import completed from "../data/completed.json";

const useStyles = makeStyles((theme) => ({
	root: {
		padding: "5vh 10vw",
	},
	button: {
		margin: "10px",
		marginLeft: "0px",
	},
	disabledButton: {
		display: "none",
	},
	stepper: {
		background: "#101010",
		borderRadius: "10px",
		padding: "30px",
	},
	stepperButton: {
		color: "white",
	},
	labelText: {
		color: "white",
		fontWeight: 500,
		fontFamily: "Sora",
		fontSize: "1.1rem",
	},
	icon: {
		background: "red",
	},
	backButton: {
		"background": "#222222",
		"marginRight": "10px",
		"&:hover": {
			background: "#121212",
		},
	},
	instructions: {
		fontSize: "1.2rem",
		color: "#FF4160",
	},
}));
function getSteps() {
	return ["Course Details", "Planning Sessions", "Publish Course"];
}
function getStepContent(step) {
	switch (step) {
		case 0:
			return <CourseDetails />;
		case 1:
			return <PlanningSessions />;
		case 2:
			return <FinalPublish />;
		default:
			return "Unknown step";
	}
}

function PublishCourse() {
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);
	const [skipped, setSkipped] = React.useState(new Set());
	const steps = getSteps();

	const defaultOptions = {
		loop: false,
		autoplay: true,
		animationData: completed,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	const isStepOptional = (step) => {
		return step === 1;
	};

	const isStepSkipped = (step) => {
		return skipped.has(step);
	};

	const handleNext = () => {
		let newSkipped = skipped;
		if (isStepSkipped(activeStep)) {
			newSkipped = new Set(newSkipped.values());
			newSkipped.delete(activeStep);
		}

		setActiveStep((prevActiveStep) => prevActiveStep + 1);
		setSkipped(newSkipped);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleSkip = () => {
		if (!isStepOptional(activeStep)) {
			// You probably want to guard against something like this,
			// it should never occur unless someone's actively trying to break something.
			throw new Error("You can't skip a step that isn't optional.");
		}

		setActiveStep((prevActiveStep) => prevActiveStep + 1);
		setSkipped((prevSkipped) => {
			const newSkipped = new Set(prevSkipped.values());
			newSkipped.add(activeStep);
			return newSkipped;
		});
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	return (
		<div className={classes.root}>
			<ThemeProvider theme={StepperTheme}>
				<Stepper activeStep={activeStep} className={classes.stepper}>
					{steps.map((label, index) => {
						const stepProps = {};
						const labelProps = {};

						if (isStepSkipped(index)) {
							stepProps.completed = false;
						}
						return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps} style={{ color: "white" }}>
                  <Typography
                    variant="body1"
                    component={"p"}
                    className={classes.labelText}>
                    {label}
                  </Typography>
                </StepLabel>
              </Step>
            );
					})}
				</Stepper>
			</ThemeProvider>
			<div>
				{activeStep === steps.length ? (
					<div>
						<Lottie options={defaultOptions} width={200} height={200} />
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Typography className={classes.instructions}>
								Course Published Successfully!
							</Typography>
						</div>
						<Button onClick={handleReset} className={classes.button}>
							Undo
						</Button>
					</div>
				) : (
					<div>
						<Typography className={classes.instructions}>
							{getStepContent(activeStep)}
						</Typography>
						<div style={{ display: "flex", alignItems: "center" }}>
							<div>
								{isStepOptional(activeStep) && (
									<Button onClick={handleSkip} className={classes.backButton}>
										Continue Later
									</Button>
								)}
							</div>
							<div
								style={{
									display: "flex",
									justifyContent: "flex-end",
									alignItems: "center",
									flexGrow: 1,
								}}
							>
								<Button
									disabled={activeStep === 0}
									onClick={handleBack}
									className={
										activeStep === 0
											? classes.disabledButton
											: classes.backButton
									}
								>
									Back
								</Button>
								<Button onClick={handleNext} className={classes.button}>
									{activeStep === steps.length - 1 ? "Finish" : "Next Step"}
								</Button>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default PublishCourse;
