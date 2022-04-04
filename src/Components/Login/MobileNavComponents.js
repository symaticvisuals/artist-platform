import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import ListItemText from "@material-ui/core/ListItemText";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";
import AmpStoriesOutlinedIcon from "@material-ui/icons/AmpStoriesOutlined";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    background: "#0d0d0d",
    padding: "15px",
  },
  text: {
    fontWeight: "500",
    fontSize: "1.2rem",
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        <ListItem button key="Sessions">
          <Link
            to="/sessions"
            style={{ textDecoration: "none", display: "flex" }}>
            <ListItemIcon>
              <VideocamOutlinedIcon
                style={{ color: "white", fontSize: "2rem" }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Sessions"
              classes={{ primary: classes.text }}></ListItemText>
          </Link>
        </ListItem>
        <Divider style={{ background: "#3D3F48", margin: "2px 0" }} />
        <ListItem button key="Sessions">
          <Link
            to="/myCourses"
            style={{ textDecoration: "none", display: "flex" }}>
            <ListItemIcon>
              <AmpStoriesOutlinedIcon
                style={{ color: "white", fontSize: "2rem" }}
              />
            </ListItemIcon>
            <ListItemText
              primary="My Courses"
              classes={{ primary: classes.text }}></ListItemText>
          </Link>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key={"right"}>
        <MenuRoundedIcon
          onClick={toggleDrawer("right", true)}
          style={{ color: "white", marginRight: "10px" }}
        />

        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          classes={{ paper: classes.fullList }}>
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
