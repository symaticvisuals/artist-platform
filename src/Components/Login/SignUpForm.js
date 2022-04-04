import {
  Button,
  makeStyles,
  TextField,
  ThemeProvider,
  Typography,
  FormControlLabel,
  RadioGroup,
  Radio,

} from "@material-ui/core";

import userProfileInput from "../../theme/userProfileInput";

import { useDispatch, useSelector } from "react-redux";

import {
 
  setFormLogin,
 
} from "../../redux/Slices/loginStatusSlice";
import axios from "axios";

import getApi from "../../utils/apis";
import React, { useContext } from "react";
import { FormSnackBarContext, loginDialog } from "./DialogBox";
import stringConsoleLog from "../../utils/utils";
import { useHistory } from "react-router-dom";


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
  textField: {
    marginBottom: "10px",
    "& input.Mui-disabled": {
      color: "#fdfdfd",
    },
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
  type: {
    background: "#0E0E0E",
    borderRadius: 4,
    border: 0,
    color: "white",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    textTransform: "none",
    marginTop: "2em",
    height: "50px",
    "&:active": {
      background: "linear-gradient(135deg,#FF4160 30%,#FF4B20 100% )",
    },
  },
  form: { color: "white" },
  radioContainer: {
    color: "white",
    padding: "10px 10px",
    border: "1px solid #FF4160",
    borderRadius: "5px",
    width: "100%",
  },
  radioContainer__Checked: {
    color: "white",
    background: "#FF4160",
    padding: "10px 10px",
    border: "1px solid #FF4160",
    borderRadius: "5px",
    flexGrow: 1,
  },
}));

function SignUpForm() {
  const classes = useStyles();
  const { setSnackbar} = useContext(FormSnackBarContext);
  const dispatch = useDispatch();
  const name = useSelector((state) => state.newUser.name);
  const email = useSelector((state) => state.newUser.email);
  const { setOpen } = useContext(loginDialog);
  const history = useHistory();
  
    const showSaveAlert = () => {
      setSnackbar({
        open: true,
        message:"Your account has been created successfully and sent for approval.",
      });
    };

  
  const handleSubmit = (inputs) => {
    axios({
      method: "POST",
      url:
        inputs.type !== "Teacher"
          ? getApi("api/user")
          : getApi("api/user/instructor"),
      data: {
        name: name,
        email: email,
        username: newUserData.username,
        phone: newUserData.phone,
        countryCode: "+91",
        type: newUserData.type,
        localCode: "en",
      },
    })
      .then((response) => {
        // Cookies.set("newProfile", true);
        setOpen(false);

        console.log("Response for New User: " + response);
        // dispatch(setJwt(response.data.data.jwt));
        // dispatch(setUser(response.data.data));

        showSaveAlert();
      })
      .catch((err) => {
        console.log("Error for New User: " + stringConsoleLog(err));
        history.replace("/");
      });
    
  };

  const [newUserData, setNewUserData] = React.useState({
    email: email,
    name: name,
  });
  const textFieldProps = {
    color: "secondary",

    fullWidth: "true",
    variant: "outlined",
  };
  return (
    <div style={{ margin: "0 2em", marginTop: "2em" }}>
      <Typography variant="h4" component={"h4"} className={classes.title}>
        Sign Up
      </Typography>
      <ThemeProvider theme={userProfileInput}>
        <form>
          <TextField
            {...textFieldProps}
            name="name"
            placeholder="Full Name"
            className={classes.textField}
            value={name}
            disabled></TextField>
          <TextField
            name="username"
            {...textFieldProps}
            placeholder="Username"
            className={classes.textField}
            style={{ color: "white" }}
            onChange={(e) => {
              setNewUserData({ ...newUserData, username: e.target.value });
            }}
            value={newUserData.username}></TextField>
          <TextField
            name="email"
            type="email"
            {...textFieldProps}
            placeholder="Email ID"
            className={classes.textField}
            value={email}
            disabled></TextField>
          <TextField
            style={{ fontWeight: "bold" }}
            name="phone"
            {...textFieldProps}
            placeholder="Mobile Number"
            onChange={(e) => {
              setNewUserData({ ...newUserData, phone: e.target.value });
            }}
            value={newUserData.phone}
          />
          <div
            style={{
              marginTop: "10px",
              padding: "10px 20px",
              background: "#0E0E0E",
            }}>
            <RadioGroup
              value={newUserData.type || ""}
              onChange={(e) => {
                setNewUserData({ ...newUserData, type: e.target.value });
              }}
              name="type"
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
              }}
              default="Student">
              <FormControlLabel
                value="Student"
                label="Student"
                className={classes.form}
                control={
                  <Radio
                    icon={<div className={classes.radioContainer}></div>}
                    checkedIcon={
                      <div className={classes.radioContainer__Checked}></div>
                    }
                  />
                }
              />

              <FormControlLabel
                value="Teacher"
                label="Teacher"
                className={classes.form}
                control={
                  <Radio
                    icon={<div className={classes.radioContainer}></div>}
                    checkedIcon={
                      <div className={classes.radioContainer__Checked}></div>
                    }
                  />
                }
              />
            </RadioGroup>
          </div>
          <div style={{ marginTop: "10px" }}></div>
          <Button
            fullWidth
            onClick={() => {
              handleSubmit(newUserData);
            }}
            className={classes.submitButton}>
            Submit
          </Button>
        </form>
        <div className={classes.orContainer}>
          <Typography style={{ color: "#e5e5e5" }}>Or</Typography>
          <Button
            style={{ textTransform: "none" }}
            onClick={() => {
              dispatch(setFormLogin(1));
            }}>
            <Typography variant="body1" className={classes.button}>
              Already have a Account? <b>Sign In</b>
            </Typography>
          </Button>
        </div>
      </ThemeProvider>
     
    </div>
  );
}

export default SignUpForm;
