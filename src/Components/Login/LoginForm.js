import { makeStyles, ThemeProvider, Typography } from "@material-ui/core";

import { GoogleLogin } from "react-google-login";
import signIn from "../../data/signIn.json";
import userProfileInput from "../../theme/userProfileInput";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setLoggedUser } from "../../redux/Slices/userSlice";
import axios from "axios";
import Lottie from "react-lottie";
import React from "react";

import { login, setJwt } from "../../redux/Slices/loginStatusSlice";
import { setForm } from "../../redux/Slices/loginStatusSlice";
import getApi from "../../utils/apis";
import { setNewUser } from "../../redux/Slices/newUserSlice";
import { useHistory } from "react-router-dom";
import {FormSnackBarContext} from './DialogBox'
require("dotenv").config();
const useStyles = makeStyles(() => ({
  label: { fontFamily: "Sora", marginBottom: ".5em", color: "#343434" },
  orContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "1em",
  },
  button: {
    color: "#fff",
    margin: "10px 0",
    "&:hover": { textDecoration: "underline" },
  },
  submitButton: {
    background: "linear-gradient(135deg,#FF416C 30%,#FF4B2B 100% )",
    borderRadius: 4,
    border: 0,
    color: "white",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    textTransform: "none",
    marginTop: "1.5em",
    height: "50px",
    "&:hover": {
      background: "linear-gradient(135deg,#FF4160 30%,#FF4B20 100% )",
    },
  },
  title: {
    fontFamily: "Sora",
    fontWeight: "600",
    color: "#FF4450",
    marginBottom: "1em",
  },
  loginButton: {
    width: "100%",

    textColor: "white",
    justifyContent: "center",
    borderRadius: "10px !important",
    padding: "10px !important",
    backgroundColor: "black !important",
    border: "1px solid #FF4450 !important",
  },
}));

function LoginForm() {
  const dispatch = useDispatch();

  const handleNewUser = (data) => {
    dispatch(setNewUser(data));
    dispatch(setForm());
  };


  const handleLogin = (data) => {
    dispatch(setLoggedUser(data));

    dispatch(login());
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: signIn,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // const responseGoogleFailed = (response) => {
  //   //Loads an Alert Message on Problems with Google Login
  //   window.alert("Internal Server Error");
  // };
  const { setSnackbar } = React.useContext(FormSnackBarContext);
  const history = useHistory();
   const showSaveAlert = (email) => {
     setSnackbar({
       open: true,
       message:
         `Successfully Authenticated as ${email}`,
     });
   };
  const responseGoogle = (response) => {
    //Google Login Response
    // Server request to verify as new user or existing user
    response? localStorage.setItem("google-login", response.tokenId): history.replace("/");
    axios({
      method: "POST",
      url: getApi("api/user/googleLogin"),
      data: { tokenId: localStorage.getItem("google-login") },
    })
      .then((response) => {
        console.log("Response From Server", response.data);
        localStorage.removeItem("google-login");
        //If user is new
        if (response.data.success && response.data.data.newUser === 1) {
          handleNewUser(response.data.data);

          //if not then login
        } else if (response.data.success === true && response.data.data.jwt) {
          handleLogin(response.data.data.user);
          Cookies.set("user", JSON.stringify(response.data.data.user), {
            expires: 7,
            path: "",
          });
          Cookies.set("jwt", response.data.data.jwt, { expires: 7, path: "" });
          showSaveAlert(response.data.data.user.email);
          dispatch(setJwt(response.data.data.jwt));
          
        }
      })
      .catch((err) => console.log(err));
  };

  const classes = useStyles();

  return (
    <div style={{ margin: "2em 2em", marginTop: "2em" }}>
      <Typography variant="h4" component={"h4"} className={classes.title}>
        Sign In
      </Typography>
      <ThemeProvider theme={userProfileInput}>
        <Lottie options={defaultOptions} width={200} height={200} />
        <form>
          <GoogleLogin
            clientId="155712534024-h6b4splkepop58h46dc28fgko6oipsq7.apps.googleusercontent.com"
            buttonText="Login With Google"
            // isSignedIn={signin}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
            theme="dark"
            className={classes.loginButton}
            // autoLoad={true}
          />
        </form>
      </ThemeProvider>
    </div>
  );
}

export default LoginForm;
