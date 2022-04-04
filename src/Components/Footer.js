import { Grid, makeStyles, Typography, useMediaQuery } from "@material-ui/core";
import logo from "../images/brandLogo.png";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const useStyles = makeStyles((theme) => ({
	logo: {
		width: "6em",
	},
	description: {
		color: "#65656F",
		fontFamily: "Sora",
		fontWeight: "400",
		fontSize: ".9em",
		marginTop: "2em",
	},
	social: {
		"color": "white",
		"marginTop": theme.spacing(4),
		"marginRight": ".8em",
		"fontSize": "1.5em",
		"&:hover": {
			transition: "all .6s",
			color: "#FF435F",
		},
	},
	linkNav: {
		color: "#65656F",
		fontFamily: "Sora",
		fontWeight: "400",
		fontSize: "1em",
		marginTop: ".5em",
	},
	link: {
		textDecoration: "none",
		color: "#65656F",
	},
}));
export default function Footer() {
	const classes = useStyles();
	const isXs = useMediaQuery((theme) => theme.breakpoints.down("xs"));

	const loginStatus = useSelector((state) => state.loginStatus.isAuthenticated);
	return (
    <Grid
      container
      spacing={1}
      style={{
        background: "#0C0C0D",
        padding: "3vw 7vw 3vw 7vw",
        marginTop: "10vh",
      }}>
      <Grid item xs={12} md={6}>
        <div>
          <img src={logo} alt="brand Logo" className={classes.logo}></img>
          <Typography
            variant="body1"
            component="p"
            color="inherit"
            className={classes.description}>
            Art should be Accessible. Reachable and Therapeutic. Art is the
            medium to express not impress. Find your inner artist at 4art and
            let the world know what they’re missing out on.
          </Typography>
          <div>
            <LinkedInIcon className={classes.social} />
            <InstagramIcon className={classes.social} />
            <TwitterIcon className={classes.social} />
          </div>
        </div>
      </Grid>
      <Grid item xs={12} sm={4} md={2}>
        <div style={!isXs ? { marginLeft: "2vw" } : null}>
          <Typography>Pages</Typography>
          <div>
            <Typography
              variant="body1"
              component={"p"}
              className={classes.linkNav}>
              <Link to="/" className={classes.link}>
                Home
              </Link>
            </Typography>
            {loginStatus ? (
              <Typography
                variant="body1"
                component={"p"}
                className={classes.linkNav}>
                <Link to="/sessions" className={classes.link}>
                  Sessions
                </Link>
              </Typography>
            ) : null}
            <Typography
              variant="body1"
              component={"p"}
              className={classes.linkNav}>
              <Link to="/" className={classes.link}>
                About Us
              </Link>
            </Typography>

            {loginStatus ? (
              <Typography
                variant="body1"
                component={"p"}
                className={classes.linkNav}>
                <Link to="/myCourses" className={classes.link}>
                  My Courses
                </Link>
              </Typography>
            ) : null}
          </div>
        </div>
      </Grid>
      <Grid item xs={12} sm={4} md={2}>
        <Typography>Contact Us</Typography>
        <Typography variant="body1" component={"p"} className={classes.linkNav}>
          support@4Art.in
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4} md={2}>
        <Typography>Address</Typography>
        <Typography variant="body1" component={"p"} className={classes.linkNav}>
          314 Street-A Block B, Suite A, New York, NY 10003
        </Typography>
      </Grid>
    </Grid>
  );
}
