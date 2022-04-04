import React from "react";

import { Box, makeStyles, Typography } from "@material-ui/core";
import { atomWithHash } from "jotai/utils";
import { useAtom } from "jotai";
import clsx from "clsx";
const useStyles = makeStyles((theme) => ({
  root: {
    height: 200,
    maxWidth: 270,
    // marginRight: "10px",
    borderRadius: "6px",

    maxHeight: "100%",
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // border: "1px solid #F2F2F2",
    [theme.breakpoints.down("xs")]: {
      width: 150,
      height: 60,
    },
  },
  active: {
    color: "#f2f2f2",
  },
  title: {
    fontSize: "1.4em",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
}));
const filterState = atomWithHash("filter", "");

function FilterCard(props) {
  const classes = useStyles();
  const [filterCategory, setFilterCategory] = useAtom(filterState);
  const handleClick = () => {
    setFilterCategory(props.item.title);
  };
  return (
    <Box
      key={props.index}
      onClick={handleClick}
      className={
        filterCategory === props.item.title
          ? clsx(classes.root, classes.active)
          : classes.root
      }
      style={
        filterCategory === props.item.title
          ? {
              background: "#080808",
              backgroundImage: `linear-gradient(rgba(
            0, 0, 0, 0), rgba(0, 0, 0, 0.58))`,
              transition: "all 0.5s ease",
            }
          : {
              backgroundImage: `linear-gradient(rgba(
            0, 0, 0, 0), rgba(0, 0, 0, 0.58)), url(${props.item.image})`,
            }
      }>
      <Typography
        variant="h3"
        component={"h3"}
        className={
          filterCategory === props.item.title ? classes.active : classes.title
        }>
        {props.item.title}
      </Typography>
    </Box>
  );
}
export default FilterCard;
