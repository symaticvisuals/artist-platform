import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "../../theme/AccordionStyle";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import RemoveCircleRoundedIcon from "@material-ui/icons/RemoveCircleRounded";
import { Box, Button } from "@material-ui/core";
import Lottie from "react-lottie";
import live from "../../data/live.json";
import lock from "../../images/lock.png";
import DoneAllRoundedIcon from "@material-ui/icons/DoneAllRounded";
import DonutLargeRoundedIcon from "@material-ui/icons/DonutLargeRounded";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  accordiomRoot: {
    background: "#121212",
    color: "white",
    marginBottom: "10px",
  },
  accordiomRootLive: {
    background: "#232323",
    color: "white",
    marginBottom: "10px",
  },
  accordionSummary: { margin: "0px" },
  lock: {
    width: "1.5em",
    marginRight: "1em",
  },
}));

export default function SessionCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const { status, session } = props;
  const handleChange = (panel) =>
    (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: live,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        className={
          status === "Live" ? classes.accordiomRootLive : classes.accordiomRoot
        }>
        <AccordionSummary
          expandIcon={
            expanded === false ? (
              <AddCircleRoundedIcon style={{ color: "#FA5C51" }} />
            ) : (
              <RemoveCircleRoundedIcon style={{ color: "white" }} />
            )
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          style={
            expanded === false
              ? { padding: "1em 2.5em" }
              : { transition: "1s", padding: "0em 2.5em" }
          }
          classes={{ content: classes.accordionSummary }}>
          <Box style={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <Box style={{ flexGrow: 1 }}>
              <Typography
                variant="h6"
                component={"h6"}
                style={{ fontFamily: "Sora, sans-serif", fontWeight: "500" }}>
                {session.title}
              </Typography>
            </Box>

            {status === "Live" ? (
              <Box
                display="flex"
                style={{ alignItems: "center", marginRight: "0em" }}>
                <Lottie options={defaultOptions} width={60} height={50} />
              </Box>
            ) : status === "Locked" ? (
              <Box display="flex">
                <img src={lock} alt="locked" className={classes.lock}></img>
              </Box>
            ) : (
              <Typography
                variant="body2"
                component={"p"}
                style={{ marginRight: "1em" }}>
                {status}
              </Typography>
            )}
          </Box>
        </AccordionSummary>
        <AccordionDetails style={{ background: "#0D0D0D" }}>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            <Box style={{ padding: "1em 1.5em 0.5em 1.5em", width: "100%" }}>
              <Typography style={{ textAlign: "justify" }}>
                {session.summary}
              </Typography>
              <Box
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "30px",
                }}>
                <Box style={{ flexGrow: 1 }}>
                  {session.progress === "Completed" ? (
                    <DoneAllRoundedIcon style={{ color: "#FF4261" }} />
                  ) : session.progress === "In Progress" ? (
                    <DonutLargeRoundedIcon style={{ color: "#FF4261" }} />
                  ) : (
                    <DoneAllRoundedIcon />
                  )}
                </Box>
                {session.progress === "Completed" ? (
                  <Button>Watch Again</Button>
                ) : session.progress === "In Progress" ? (
                  <Button>Continue Watching</Button>
                ) : session.progress === "Not Watched" &&
                  status === "Locked" ? (
                  <Button
                    style={{ background: "grey", color: "#333333" }}
                    disabled>
                    Watch Now
                  </Button>
                ) : (
                  <Button>Watch Now</Button>
                )}
              </Box>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
