import {Box, makeStyles, Typography} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    experience: {
        [theme.breakpoints.down("xs")]: {
            fontSize: "1rem",
        },
    },
    author: {
        [theme.breakpoints.down("xs")]: {
            fontSize: "1rem",
        },
    },
    designation: {
        [theme.breakpoints.down("xs")]: {
            fontSize: "1rem",
        },
    },
}));

function TeacherCardSm(props) {
    const classes = useStyles();
    return (
      <Box>
        <Box
          className={props.classes.root}
          style={{
            background: "linear-gradient(75deg,#000 0%,#222225 100% )",
            borderRadius: "8px",
            minHeight: "19em",
          }}>
          <Box>
            <Typography
              component={"p"}
              variant="body1"
              style={{ textAlign: "justify", minHeight: "12em" }}
              className={classes.experience}>
              {props.item.experience}
            </Typography>
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "flex-end",
              textAlign: "right",
            }}>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}>
              <Box>
                <Typography
                component={"p"}
                  variant="body1"
                  style={{ fontWeight: "600" }}
                  className={classes.author}>
                  {props.item.author}
                </Typography>
                <Typography
                component={"p"}
                  variant="body1"
                  style={{ color: "#e5e5e5" }}
                  className={classes.designation}>
                  {props.item.designation}
                </Typography>
              </Box>
              <Box >
                <img
                  src={props.item.image}
                  alt="Teacher"
                  style={{
                    clipPath: "circle(40px at center)",
                    height: "120px",
                    background: "white",
                    paddingLeft: "5px",
                    marginLeft: "10px",
                    paddingTop:"15px"
                    
                  }}></img>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
}

export default TeacherCardSm;
