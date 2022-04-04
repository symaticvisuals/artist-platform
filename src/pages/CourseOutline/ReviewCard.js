import React from "react";
import Rating from "@material-ui/lab/Rating";
import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  review: {
    minHeight: "11em",
    background: "#0D0D0D",
    margin: "1vh  1vw",
    borderRadius: "10px",
    border: "2px solid #FF4749",
    paddingBottom: "2vh",
  },
  circle: {
    height: "4.6em",
    width: "4.6em",
    borderRadius: "100%",
    background: "white",
  },
  text: {
    marginLeft: "1em",
  },
}));
function ReviewCard(props) {
  const classes = useStyles();
  return (
    <Box className={classes.review}>
      <Box
        style={{
          padding: "3vh 2vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <div className={classes.circle} />
          <div className={classes.text}>
            <Typography
              variant="h6"
              component={"h6"}
              style={{ fontWeight: "600" }}>
              {props.item.name}
            </Typography>
            <Typography
              variant="body1"
              component={"p"}
              style={{ color: "#e5e5e5" }}>
              {props.item.designation}
            </Typography>
          </div>
        </Box>
        <Box>
          <Rating name="read-only" value={props.item.rating} readOnly />
        </Box>
      </Box>
      <Box>
        <Typography
          variant="body2"
          component={"p"}
          style={{ color: "white", margin: "0 2.5vw", textAlign: "justify" }}>
          {props.item.description}
        </Typography>
      </Box>
    </Box>
  );
}
export default ReviewCard;
