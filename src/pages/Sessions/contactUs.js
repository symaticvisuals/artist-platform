import {
  Box,
  Button,
  Grid,
  InputBase,
  makeStyles,
  Paper,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import InputTheme from "../../theme/blackInput/Input";
import SendIcon from "@material-ui/icons/Send";
const useStyles = makeStyles({
  root: {
    background: "#222225",
    margin: "5vw",
    padding: "5vw",
    borderRadius: "15px",
  },

  form: {
    background: "white",
    height: "auto",
    borderRadius: "15px",
    padding: "2vw",
  },
  title: {
    color: "white",
    fontWeight: "700",
    fontFamily: "Sora, sans-serif",
    marginTop: "5vh",
  },
  description: {
    color: "#ACACAC",
    fontWeight: "300",
    fontFamily: "Sora, sans-serif",
    paddingRight: "5vw",
    paddingTop: "2vh",
  },
  contactDiv: {
    "display": "flex",
    "width": "50%",
    "padding": "1vh 1vw",

    "&:hover": {
      border: "2px #FF156E solid",
      borderRadius: "10px",
      background: "rgb(255, 21, 110, .15)",
      transition: ".5s",
    },
  },
  contactIcons: {
    color: "#FF156E",
    marginRight: "1vw",
  },
  social: {
    color: "#FF156E",
  },
  socialIcons: {
    "padding": "15px",
    "&:hover": {
      border: "2px #FF156E solid",
      borderRadius: "100%",
      background: "rgb(255, 21, 110, .15)",
      transition: ".5s",
    },
  },
  label: {
    fontFamily: "Sora, sans-serif",
  },
  buttonSecondary: {
    background: "black",
    fontFamily: "Montserrat",
    color: "white",
    padding: "15px",
    fontWeight: "bold",
    marginLeft: "10px",

    border: "2px black solid",
    borderRadius: "10px",
  },
  ripple: {
    "backgroundPosition": "center",
    "transition": "background .75s",
    "&:hover": {
      background:
        "#222225 radial-gradient(circle, transparent 1%, #222225 1%) center/25000%",
    },
    "&:active": {
      backgroundColor: "grey",
      backgroundSize: "100%",
      transition: "background 0s",
    },
  },
});
export default function ContactUs() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Grid container>
        <Grid
          item
          xs={12}
          md={7}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography component={"h2"} variant="h2" className={classes.title}>
              Contact Us
            </Typography>
            <Typography component={"h5"} variant="h5" className={classes.description}>
              Fill up the form and our Team will get back to you within 24
              hours.
            </Typography>
          </Box>
          <Box>
            <Box className={classes.contactDiv}>
              <CallIcon fontSize="large" className={classes.contactIcons} />
              <Typography component={"h6"} variant="h6">+91 9999 999999</Typography>
            </Box>
            <Box className={classes.contactDiv}>
              <EmailIcon fontSize="large" className={classes.contactIcons} />
              <Typography component={"h6"} variant="h6">hello4Art@gmail.com</Typography>
            </Box>
            <Box className={classes.contactDiv}>
              <LocationOnIcon
                fontSize="large"
                className={classes.contactIcons}
              />
              <Typography component={"h6"} variant="h6">Block A Street 142</Typography>
            </Box>
          </Box>
          <Box display="flex">
            <Box className={classes.socialIcons}>
              <FacebookIcon fontSize="large" className={classes.social} />
            </Box>
            <Box className={classes.socialIcons}>
              <InstagramIcon fontSize="large" className={classes.social} />
            </Box>
            <Box className={classes.socialIcons}>
              <TwitterIcon fontSize="large" className={classes.social} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={5} className={classes.grid}>
          <Paper className={classes.form}>
            <ThemeProvider theme={InputTheme}>
              <Typography component={"h6"} variant="h6" className={classes.label}>
                Your Name
              </Typography>
              <InputBase variant="outlined" fullWidth="true" />
              <Typography component={"h6"} variant="h6" className={classes.label}>
                Email
              </Typography>
              <InputBase variant="outlined" fullWidth="true" />
              <Typography component={"h6"} variant="h6" className={classes.label}>
                Message
              </Typography>
              <InputBase
                variant="outlined"
                fullWidth="true"
                multiline
                rows={4}
              />
              <Box display="flex">
                <Button fullWidth>Subscribe</Button>
                <Button
                  className={clsx(classes.buttonSecondary, classes.ripple)}
                  fullWidth
                >
                  Submit <SendIcon style={{ marginLeft: "5px" }} />
                </Button>
              </Box>
            </ThemeProvider>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
