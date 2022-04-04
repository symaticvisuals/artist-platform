import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { plans } from "../data/plans";
import PlansCard from "../Components/PlansCard";

const useStyles = makeStyles((theme) => ({
	viewplans: {
		padding: "3vh 5vw",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		marginBottom: "30px",
	},
	main__title: {
		[theme.breakpoints.down("sm")]: {
			fontSize: "1.8rem",
		},
	},
	main__subtitle: {
		color: "#FF2B51",
		[theme.breakpoints.down("sm")]: {
			fontSize: "1.2rem",
		},
	},
	card: {
		"height": "auto",
		"maxWidth": 350,
		"background": "#0B0B0B",
		"margin": "0 2vw",
		"marginBottom": "20px",
		"border": "1px solid #FF2B51",
		"borderRadius": "8px",
		"&:hover": {
			border: "1px solid white",
			transition: ".5s",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "1rem",
			maxWidth: 300,
		},
	},
	planItems: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		flexWrap: "wrap",
		marginBottom: "4em",
	},
	divider: {
		background: "#3D3D42",
	},
	pointers: {
		color: "#FF2B51",
		marginTop: "0",
	},
	card__Sections: {
		padding: "20px",
		paddingBottom: "10px",
	},
	card__button: { padding: "0 20px 20px 20px" },
	button: {
		"background": "#0B0B0B",
		"border": "1px solid #FF2B51",
		"&:hover": {
			background: "linear-gradient(135deg,#FF416C 30%,#FF4B2B 100% )",
			transition: "all .5s",
		},
	},
	line: {
		width: "45vh",
		height: "5px",
		borderRadius: "10px",
		marginTop: "10px",
		background: "linear-gradient(135deg,#FF416C 30%,#FF4B2B 100% )",
		[theme.breakpoints.down("sm")]: {
			width: "40vh",
		},
	},
}));
function ViewPlans() {
	const classes = useStyles();
	return (
    <div style={{ margin: "0 2vw" }}>
      <div className={classes.viewplans}>
        <Typography
          variant="h2"
          component={"h2"}
          className={classes.main__title}>
          Create your Career.
        </Typography>
        <Typography
          variant="h4"
          component={"h4"}
          className={classes.main__subtitle}>
          Learn and grow with the Best.
        </Typography>
        <div className={classes.line}></div>
      </div>
      <div className={classes.planItems}>
        {plans.map((plan, id) => (
          <PlansCard key={id} plan={plan} classes={classes} />
        ))}
      </div>
    </div>
  );
}

export default ViewPlans;
