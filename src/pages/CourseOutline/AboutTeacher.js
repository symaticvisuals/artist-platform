import { sessions } from "../../data/dataSource";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import thumbnail from "../../images/thumbnail.jpg";
const useStyles = makeStyles({
  image: {
    display: "flex",
    justifyContent: "center",
  },
  heading: {
    marginBottom: "1em",
    color: "#FF4261",
  },
});
export default function AboutTeacher() {
  const classes = useStyles();
  return (
    <div
      style={{
        padding: "2vh 0vw",

        margin: "8vh 5vw 0 5vw",
        borderRadius: "15px",
      }}>
      <Box>
        <Grid
          container
          display="flex"
          spacing={1}
          style={{ alignItems: "center" }}>
          <Grid item xs={12} md={8} lg={8}>
            <Box>
              <Typography
                variant="h2"
                component={"h2"}
                className={classes.heading}>
                About the Teacher
              </Typography>
            </Box>
            <Typography
              variant="h3"
              component={"h3"}
              style={{ marginBottom: "10px" }}>
              {sessions.teacher}
            </Typography>
            <Typography
              variant="h5"
              component={"h5"}
              style={{ marginBottom: "8px" }}>
              {sessions.designation}
            </Typography>
            <Typography variant="body1" component={"p"}>
              {sessions.description}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Box className={classes.image}>
              <img
                src={thumbnail}
                alt="teacher"
                style={{ clipPath: "circle(160px at center)" }}></img>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
