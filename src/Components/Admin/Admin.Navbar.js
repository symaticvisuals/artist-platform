import React from "react";
import PropTypes from "prop-types";
import { Avatar, makeStyles } from "@material-ui/core";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import DoneAllOutlinedIcon from "@material-ui/icons/DoneAllOutlined";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import user from "../../images/user.jpg";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    // alignItems: "center",
    // justifyContent: "space-between",
    height: "100vh",
    boxSizing: "border-box",
    padding: "20px",
  },
  sidebar: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "60px",
    position: "fixed",
    zIndex: "1",
    height: "90vh",

    // height: "100%",
    justifyContent: "space-between",
    background: "#0e0e0e",
    borderRadius: "60px",
    padding: "20px 10px",
  },
  brandLogo: {
    width: "100%",
    objectFit: "contain",
  },
  main: {},
  icon: {
    color: "#fff",
    fontSize: "30px",
    margin: "10px 0",
    cursor: "pointer",
  },
  top: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  bottom: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  middle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    marginBottom: "10px",
    background: "#ff4154",
  },
}));
function AdminNavbar(props) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <div className={classes.top}>
          <SidebarNavigations name={"DG"} />
        </div>
        <div className={classes.middle}>
          <SidebarNavigations Icon={HomeOutlinedIcon} link="/" />
          <SidebarNavigations Icon={DoneAllOutlinedIcon} />
          <SidebarNavigations Icon={CancelRoundedIcon} />
        </div>
        <div className={classes.bottom}>
          <SidebarNavigations Icon={ExitToAppIcon} />
        </div>
      </div>
      <div className={classes.main}>{props.children}</div>
    </div>
  );
}

export default AdminNavbar;

function SidebarNavigations({ Icon, name, link }) {
  const classes = useStyles();
  return (
    <>
      {Icon && !link && <Icon className={classes.icon} />}
      {Icon && link && (
        <Link to={link}>
          {" "}
          <Icon className={classes.icon} />
        </Link>
      )}
      {name && (
        <Avatar src={user} className={classes.avatar}>
          {name}
        </Avatar>
      )}
    </>
  );
}
AdminNavbar.propTypes = {
  children: PropTypes.element,
};

SidebarNavigations.propTypes = {
  Icon: PropTypes.element,
  Avatar: PropTypes.string,
  link: PropTypes.string,
};
