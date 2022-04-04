import { Avatar, Box, makeStyles, Typography } from "@material-ui/core";
import DoneOutlinedIcon from "@material-ui/icons/DoneOutlined";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import React from "react";
import profile from "../../images/profile.png";
import { users } from "../../data/users";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0 20px",
    display: "flex",
    flexDirection: "column",
    minWidth: "40vw",
    marginLeft: "80px",
  },
  newUsers: {
    // width: "100%",
    height: "100%",
    padding: "20px",
    background: "#0e0e0e",
    borderRadius: "20px",
    boxSizing: "border-box",
  },
  container: {
    display: "flex",
    alignItems: "center",
    marginTop: "10px",
    justifyContent: "space-between",
    background: "#0b0b0b",
    padding: "15px 15px 15px 35px",
    borderRadius: "10px",
  },
  user: {
    display: "flex",
    alignItems: "center",
  },
  actions: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    color: "#fff",
    padding: "10px",
    background: "#0e0e0e",
    margin: "0 5px",
    transition: "all 0.3s ease",
    cursor: "pointer",
    "&:hover": {
      background: "#ff4154",
    },
  },
}));
function AdminDashboard() {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h3" component={"h3"} style={{ padding: "20px", marginLeft: "80px" }}>
        Hi! Deepanshu
      </Typography>
      <Box className={classes.root}>
        {users.map((user) => (
          <User user={user} />
        ))}
      </Box>
    </>
  );
}

export default AdminDashboard;
function User({ user }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.user}>
        <Avatar src={profile} className={classes.avatar}></Avatar>
        <Typography variant="h6" component={"h6"} style={{ marginLeft: "20px" }}>
          {user.name}
        </Typography>
      </div>
      <div className={classes.actions}>
        <DoneOutlinedIcon className={classes.icon} />
        <CloseOutlinedIcon className={classes.icon} />
      </div>
    </div>
  );
}
