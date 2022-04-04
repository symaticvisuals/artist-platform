import {
	Box,
	Button,
	Grid,
	Typography,
	useMediaQuery,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import img2 from "../images/courseThumbnail.png";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
	root: {
		"height": "12em",
		// width: "auto",
		"background": "white",
		"borderRadius": "10px",
		"backgroundImage": `linear-gradient(rgba(
            0, 0, 0, 0.78), rgba(0, 0, 0, 0.78)), url(${img2})`,
		"backgroundSize": "cover",
		"border": "2px solid #FF416C",
		"padding": "25px",
		"display": "flex",
		"justifyContent": "flex-end",
		"margin": "10px",
		"flexDirection": "column",
		"&:hover": {
			border: "2px solid #e5e5e5",
		},
	},
	text: {
		marginTop: "8x",
	},
	heading: {
		fontWeight: "600",
		color: "#FF4364",
	},
}));

function MyCourseCard(props) {
	const classes = useStyles();
	const isXs = useMediaQuery((theme) => theme.breakpoints.down("xs"));
	return (
    <Grid item xs={12} sm={6} md={4} xl={3}>
      <Box className={classes.root} style={isXs ? { margin: "10px 0" } : null}>
        <Typography
          variant="h5"
          component={"h5"}
          className={clsx(classes.text, classes.heading)}>
          {props.course.heading}
        </Typography>
        <Typography
          variant="subtitle2"
          component={"p"}
          className={classes.text}>
          {props.course.description}
        </Typography>
        <Button style={{ marginTop: "8px" }}>{props.course.status}</Button>
      </Box>
    </Grid>
  );
}

export default MyCourseCard;
