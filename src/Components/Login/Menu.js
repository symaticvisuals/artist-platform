import {
	Avatar,
	Button,
	Fade,
	makeStyles,
	Menu,
	MenuItem,
	Typography,
} from "@material-ui/core";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import PersonOutlineRoundedIcon from "@material-ui/icons/PersonOutlineRounded";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";

import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setJwt } from "../../redux/Slices/loginStatusSlice";
import { setLoggedUser } from "../../redux/Slices/userSlice";
import useProfile from "../../hooks/useProfile";


const useStyles = makeStyles((theme) => ({
	menu: { background: "#1C1D21", padding: " 5px 10px", borderRadius: "10px" },
	avatar: {
		background: "linear-gradient(to right, #FF416C, #FF4B2B)",
		color: "#fff",
		fontFamily: "Poppins",
		fontSize: "1.1em",
		boxShadow: "0px 5px 15px #1c1c1c",
	},
}));

function MenuComponent() {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const getInitials = (name) => {
    const names = name.split(" ");
    const initials = names.map((name) => name[0]).join("");
    return initials;
  };
  const history = useHistory();
  const {data} = useProfile();
	const handleClose = () => {
		setAnchorEl(null);
	};
	const dispatch = useDispatch();

	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<Avatar
				aria-controls='simple-menu'
				aria-haspopup='true'
				onClick={handleClick}
				className={classes.avatar}
			>
				{data && getInitials(data.data.name)}
				
			</Avatar>
			<Menu
				classes={{ paper: classes.menu }}
				id='simple-menu'
				TransitionComponent={Fade}
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<MenuItem onClick={handleClose}>
					<Link
						to='/userProfile'
						style={{
							textDecoration: "none",
							color: "white",
							fontFamily: "Sora",
							display: "flex",
						}}
					>
						<PersonOutlineRoundedIcon
							style={{ fontSize: "1.5em", marginRight: "8px" }}
						/>
						<Typography>Profile</Typography>
					</Link>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<Button
						style={{
							fontSize: "1.5em",
							marginRight: "8px",
							background: "none",
						}}
						onClick={() => {
							Cookies.remove("jwt");
							Cookies.remove("user");
							history.push("/");
							// queryClient.resetQueries();
							dispatch(setJwt(null));

							dispatch(setLoggedUser(null));
						}}
					>
						<ExitToAppRoundedIcon style={{ marginRight: "8px" }} />
						<Typography>Logout</Typography>
					</Button>
				</MenuItem>
			</Menu>
		</div>
	);
}

export default MenuComponent;
