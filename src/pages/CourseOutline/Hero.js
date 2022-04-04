import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import musicButton from "../../images/musicButton.png";
import video from "../../images/high2.mp4";

const useStyles = makeStyles({
  background: {
    // "backgroundImage": `linear-gradient(rgba(
    //       0, 0, 0, 0.68), rgba(0, 0, 0, 0.68)), url(${course1})`,
    "minHeight": "60vh",
    "width": "100vw",
    "paddingTop": "2vh",
    "backgroundRepeat": "no-repeat",
    "-webkit-background-size": "cover",
    "-moz-background-size": "cover",
    "-o-background-size": "cover",
    "background-size": "cover",
  },
  gridLeft: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  gridRight: { display: "flex", alignItems: "center" },
  boxMargin: { margin: "15px 0" },
});
export default function Hero(...props) {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.background}>
        <Grid container spacing={4} style={{ padding: "0 5vw 0 5vw" }}>
          <Grid item xs={12} md={6} className={classes.gridLeft}>
            <Box className={classes.boxMargin}>
              <Typography variant="h3" component={"h3"}>
                Spring Framework: Spring MVC Fundamentals
              </Typography>
            </Box>
            <Box display="flex" className={classes.boxMargin}>
              <div
                style={{
                  background: "#e5e5e5",
                  width: "15px",
                  height: "auto",
                  marginRight: "15px",
                }}></div>
              <Typography
                variant="h6"
                component={"h6"}
                style={{
                  paddingRight: "1vw",
                  textAlign: "justify",
                  textJustify: "innter-word",
                }}>
                This course is designed to give you a solid foundation of Spring
                MVC. The course covers the most recent approach of using both
                contained and exported WAR deployments. All configuration is
                done using the Java approach instead of XML.
              </Typography>
            </Box>
            <Box className={classes.boxMargin}>
              <Button>
                <img
                  src={musicButton}
                  alt="button"
                  style={{ marginRight: "6px", color: "white" }}
                />
                Start Course
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} className={classes.gridRight}>
            <Box className={classes.videoFrame}>
              <video
                width="100%"
                height="100%"
                style={{ overflow: "hidden", borderRadius: "8px" }}
                controls
                preload="metadata">
                {" "}
                <source src={video} type="video/mp4" />
              </video>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
