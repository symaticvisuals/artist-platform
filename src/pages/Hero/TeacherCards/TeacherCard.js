import {Box, Card, CardActionArea, makeStyles, Typography,} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        padding: "0 5vw 0 6vw",
    },
    image: {
        objectFit: "scale-down",
        height: "54vh",
    },
    text: {
        display: "flex",
        flexDirection: "column",
        marginLeft: "3vw",
    },
}));

function TeacherCard(props) {
    const classes = useStyles();
    return (
      <Box>
        <Card className={props.classes.root}>
          <CardActionArea className={classes.root}>
            <Box style={{ display: "flex", justifyContent: "center" }}>
              <img src={props.item.image} className={classes.image} alt="profile"></img>
            </Box>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                height: "50vh",
              }}>
              <Box className={classes.text}>
                <Typography
                  variant="h2"
                  component={"h2"}
                  className={props.classes.author}>
                  {props.item.author}
                </Typography>

                <Typography
                  variant="h5"
                  component={"h5"}
                  className={props.classes.designation}>
                  {props.item.designation}
                </Typography>
                <Typography
                  component={"p"}
                  variant="body1"
                  className={props.classes.experience}>
                  {props.item.experience}
                </Typography>
              </Box>
            </Box>
          </CardActionArea>
        </Card>
      </Box>
    );
}

export default TeacherCard;
