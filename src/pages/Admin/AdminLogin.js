import React from "react";

import {
  Button,
  makeStyles,
  TextField,
  ThemeProvider,
  Typography,
} from "@material-ui/core";

import userProfileInput from "../../theme/userProfileInput";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "50vh",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  container: {
    width: "20vw",
    margin: "auto",
    marginTop: "4vh",
    backgroundColor: "#080808",
    // minHeight: "30vh",
    padding: "4vw 4vh",
    paddingTop: "2vh",
    textAlign: "left",
    color: "white",
  },
  textField: {
    marginTop: "1vh",
  },
  button: {
    marginTop: "2vh",
    padding: "15px",
  },
}));
function AdminLogin() {
  const classes = useStyles();
  const [credentials, setCredentials] = React.useState({
    username: "",
    password: "",
  });

  //a function to create a admin cookie on login
  const history = useHistory();
  const createAdminCookie = () => {
    Cookies.set("admin", "true", { expires: 1 });
    history.replace("/admin");
  };

  return (
    <div className={classes.root}>
      <Typography variant="h2">Welcome to Admin Login</Typography>
      <div className={classes.container}>
        {/* form to take admin credentials */}
        <ThemeProvider theme={userProfileInput}>
          <Typography variant="h6" component={"h6"}>
            Username
          </Typography>
          <TextField
            className={classes.textField}
            value={credentials.username}
            variant="outlined"
            color="secondary"
            fullWidth
            autoFocus
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
          />
          <Typography variant="h6" component={"h6"} style={{ marginTop: "2vh" }}>
            Password
          </Typography>
          <TextField
            value={credentials.password}
            className={classes.textField}
            type="password"
            variant="outlined"
            color="secondary"
            fullWidth
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            className={classes.button}
            onClick={createAdminCookie}>
            Login
          </Button>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default AdminLogin;
