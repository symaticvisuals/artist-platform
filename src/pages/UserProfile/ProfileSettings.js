import {
	Avatar,
	Badge,
	Box,
	Button,
	FormControlLabel,
	Icon,
	InputAdornment,
	makeStyles,
	Radio,
	RadioGroup,
	TextField,
	ThemeProvider,
	Typography,
	useMediaQuery,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import axios from "axios";
import { loadCSS } from "fg-loadcss";
import Cookies from "js-cookie";
import React, { useRef } from "react";

import { IoFemaleSharp, IoMaleSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { socialMedialHandles } from "../../data/socialMediaHandle";
import useProfile from "../../hooks/useProfile";

import Profile from "../../images/profile.png";
import { setProfile } from "../../redux/Slices/userSlice";
import userProfileInput from "../../theme/userProfileInput";
import getApi from "../../utils/apis";

const useStyles = makeStyles((theme) => ({
	root: { display: "flex", marginLeft: "6vw" },

	profileImage: {
		height: "15em",
		width: "15em",
		borderRadius: "100%",
		backgroundSize: "cover",
	},
	profileImageRes: {
		height: "14em",
		width: "14em",
		backgroundImage: `url(${Profile})`,
		borderRadius: "100%",
		backgroundSize: "cover",
		alignContent: "center",
	},
	detailsContainer: {
		display: "flex",
		justifyContent: "center",
		paddingLeft: "3vw",
		flexDirection: "column",
	},
	radioContainer: {
		width: "5em",
		height: "5em",
		borderRadius: "14px",
		background: "#0E0E0E",
		flexDirection: "column",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	profileBox: {
		display: "flex",
		justifyContent: "center",
		flexGrow: 1,
	},
	detailsContainerRes: {
		display: "flex",
		justifyContent: "center",
		marginTop: "5vh",
		flexDirection: "column",
	},
	background: {
		background: "linear-gradient(to right, #FF416C, #FF4B2B)",
		color: "#0c0c0c",
		height: "3em",
		width: "3em",
		fontSize: "3em",
		fontFamily: "Poppins",
		fontWeight: "bold",
	},
	uploadIcon: {
		background: "#151515",
		borderRadius: "100%",
	},
}));

function ProfileSettings() {
	const classes = useStyles();
	const isSm = useMediaQuery((theme) => theme.breakpoints.down("sm"));
	const isXs = useMediaQuery((theme) => theme.breakpoints.down("xs"));

	React.useEffect(() => {
		const node = loadCSS(
			"https://use.fontawesome.com/releases/v5.12.0/css/all.css",
			document.querySelector("#font-awesome-css")
		);

		return () => {
			node.parentNode.removeChild(node);
		};
	}, []);

	//store image in state
	const image = useRef(null);
	const [imagePreview, setImagePreview] = React.useState(null);
	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("image", image.current[0]);
  
		try {
			const response = await axios({
        method: "post",
        url: getApi("api/image/upload"),
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: Cookies.get("token"),
        },
      });
			console.log(response);
			dispatch(setProfile({ image: imagePreview }));
		} catch (error) {
			console.log(error);
		}
	};
	// const data = JSON.parse(Cookies.get("user"));
  const {data, isError} = useProfile();
  const getInitials = (name) => {
    const names = name.split(" ");
    const initials = names.map((name) => name[0]).join("");
    return initials;
  };
	const [disabled, setDisabled] = React.useState(
		imagePreview === null ? true : false
	);
	const textFieldProps = {
		variant: "outlined",
		color: "secondary",
		fullWidth : true,
	}
	const dispatch = useDispatch();
	return (
    <Box>
      {isError && <div><h1 style={{color:"white"}}>Error</h1></div>}
      {data && (
      <div>
        <Box className={classes.root}>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <Box className={isSm ? classes.profileBox : ""}>
              <Badge
                overlap="circular"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                badgeContent={
                  <div className={classes.uploadIcon}>
                    <input
                      accept="image/*"
                      id="icon-button-file"
                      type="file"
                      style={{ display: "none" }}
                      // multiple
                      name="images"
                      onChange={(e) => {
                        image.current=e.target.files;
                       
                        setImagePreview(URL.createObjectURL(e.target.files[0]));
                        setDisabled(false);
                      }}
                      //FIXME: Add image upload
                    />
                    <label htmlFor="icon-button-file">
                      <IconButton
                        style={{ color: "white" }}
                        aria-label="upload picture"
                        component="span">
                        <PhotoCamera />
                      </IconButton>
                    </label>
                  </div>
                }>
                <Avatar
                  // className={isSm ? classes.profileImageRes : classes.profileImage}
                  className={classes.background}
                  src={imagePreview ? imagePreview : null}>
                  {imagePreview === null ? getInitials(data.data.name) : null}
                </Avatar>
              </Badge>
            </Box>
            <Box
              style={{}}
              className={
                isSm ? classes.detailsContainerRes : classes.detailsContainer
              }>
              <Typography
                component={"h3"}
                variant="h3"
                style={{ color: "#FF416C" }}>
                {data.data.name}
              </Typography>
              <Typography
                component={"h4"}
                variant="body1"
                style={
                  !isSm
                    ? { maxWidth: "50vw", marginTop: ".5em" }
                    : { maxWidth: "50em" }
                }>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              </Typography>
              <Button
                variant="outlined"
                onClick={handleSubmit}
                disabled={disabled}
                style={
                  disabled
                    ? {
                        marginTop: "1em",
                        background: "#0f0f0f",
                        border: "1px solid #a4a4a4",
                        width: "250px",
                        color: "#a4a4a4",
                      }
                    : {
                        marginTop: "1em",
                        background: "#0f0f0f",
                        border: "1px solid white",
                        width: "250px",
                        color: "white",
                        cursor: "pointer",
                      }
                }>
                Update Profile Picture
              </Button>
            </Box>
          </div>
        </Box>
        <ThemeProvider theme={userProfileInput}>
          <div
            style={
              !isSm
                ? { marginTop: "10vh", margin: "10vh 7vw" }
                : { marginTop: "10vh", margin: "6vh 0" }
            }>
            <Typography
              variant="h4"
              component={"h4"}
              style={{
                fontFamily: "Sora",
                fontWeight: "500",
                marginBottom: "3vh",
              }}>
              Personal Details
            </Typography>

            <TextField
              placeholder={data ? data.data.name : "First Name"}
              {...textFieldProps}
            />
         
            <div style={{ marginTop: "2vh" }}>
              <TextField
                placeholder={data ? data.data.email : "Email"}
                {...textFieldProps}
                className={classes.textFieldStyle}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <button
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                        }}>
                        {data.isEmailVerified ? null : (
                          <Typography component={"h4"} color="secondary">
                            Verify
                          </Typography>
                        )}
                      </button>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div style={{ marginTop: "2vh" }}>
              <TextField
                placeholder="Brief Introduction"
                {...textFieldProps}
                multiline
                rows={4}
                className={classes.textFieldStyle}
              />
            </div>
            <div style={{ marginTop: "2vh" }}>
              <TextField
                placeholder={data ? data.phone : "Phone"}
                {...textFieldProps}
                className={classes.textFieldStyle}
              />
            </div>
            <div style={{ marginTop: "2vh" }}>
              <RadioGroup style={{ flexDirection: "row" }} defaultValue="male">
                <FormControlLabel
                  value="male"
                  control={
                    <Radio
                      icon={
                        <div className={classes.radioContainer}>
                          <IoMaleSharp
                            style={{ color: "white", fontSize: "60px" }}
                          />
                          <Typography
                            component={"p"}
                            variant="body1"
                            style={{ color: "white" }}>
                            Male
                          </Typography>
                        </div>
                      }
                      checkedIcon={
                        <div
                          className={classes.radioContainer}
                          style={{
                            background: "#FF454D",
                          }}>
                          {" "}
                          <IoMaleSharp
                            style={{ color: "white", fontSize: "60px" }}
                          />
                        </div>
                      }></Radio>
                  }
                />
                
                <FormControlLabel
                  value="female"
                  control={
                    <Radio
                      icon={
                        <div className={classes.radioContainer}>
                          <IoFemaleSharp
                            style={{ color: "white", fontSize: "60px" }}
                          />
                          <Typography
                            component={"p"}
                            variant="body1"
                            style={{ color: "white" }}>
                            Female
                          </Typography>
                        </div>
                      }
                      checkedIcon={
                        <div
                          className={classes.radioContainer}
                          style={{
                            background: "#FF416C",
                          }}>
                          <IoFemaleSharp
                            style={{ color: "white", fontSize: "60px" }}
                          />
                        </div>
                      }></Radio>
                  }
                />
              </RadioGroup>
            </div>
            <Typography
              component={"h4"}
              variant="h4"
              style={{
                fontFamily: "Sora",
                fontWeight: "500",
                margin: "3vh 0",
              }}>
              Social Media Handles
            </Typography>
            {socialMedialHandles.map((handle, index) => {
              return (
                <div style={{ marginTop: "2vh" }} key={index}>
                  <TextField
                    {...textFieldProps}
                    className={classes.textFieldStyle}
                    placeholder="username"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <button
                            style={{
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                            }}>
                            {isXs ? (
                              <Icon
                                className={handle.icon}
                                color="secondary"></Icon>
                            ) : (
                              <Typography component={"h4"} color="secondary">
                                {handle.title}
                              </Typography>
                            )}
                          </button>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
              );
            })}
          </div>
        </ThemeProvider>
        <div
          style={
            !isSm
              ? { margin: "0 7vw", display: "flex", justifyContent: "flex-end" }
              : { display: "flex", justifyContent: "flex-end" }
          }>
          {!isSm ? (
            <Button>Update Profile</Button>
          ) : (
            <Button fullWidth="true">Update Profile</Button>
          )}
        </div>
      </div>
      )}
    </Box>
  );
}
export default ProfileSettings;
