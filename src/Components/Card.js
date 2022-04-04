import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  card: {
    marginRight: "5px",
    maxWidth: 300,
    borderRadius: "7px",
    [theme.breakpoints.up("xs")]: {
      maxWidth: 300,
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: 290,
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: 310,
    },
    //260

    [theme.breakpoints.up("lg")]: {
      maxWidth: 300,
    },
    [theme.breakpoints.up("xl")]: {
      maxWidth: 330,
    },
  },
  flexBox: {
    display: "flex",
  },
  media: {
    height: 180,
    [theme.breakpoints.down("xs")]: {
      height: 120,
    },
  },
  title: {
    fontFamily: "Sora, sans-serif",
    color: "white",
    fontWeight: "500",
    margin: "0",
    fontSize: "1rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  content: {
    fontFamily: "Sora, sans-serif",
    color: "#e5e5e5",
    fontWeight: "400",
  },
  author: {
    fontFamily: "Montserrat",
    color: "#c2c2c2",
    fontWeight: "500",
    display: "flex",
  },
}));

// Card Component for the carousels
export default function CardComponent(props) {
  const classes = useStyles();
  return (
    <>
      <Link
        key={props.key}
        to={`/course/${props.item.title}`}
        style={{ textDecoration: "none" }}>
        <Card className={classes.card}>
          <div className={classes.flexBox}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={props.item.image}
                title="course1"
              />
              <CardContent>
                <Box className={classes.flexBox} style={{ minHeight: "70px" }}>
                  <Box style={{ flexGrow: 1 }}>
                    <Typography
                      gutterBottom
                      variant="body1"
                      component={"p"}
                      className={classes.title}>
                      {props.item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      component={"p"}
                      color="textSecondary"
                      className={classes.content}>
                      {props.item.author}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </CardActionArea>
          </div>
        </Card>
      </Link>
    </>
  );
}

CardComponent.propTypes = {
  item: PropTypes.object.isRequired,
  classes: PropTypes.object,
};
