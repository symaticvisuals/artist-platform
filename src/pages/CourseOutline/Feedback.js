import { Box, Button, Grid, Typography } from "@material-ui/core";
import React from "react";

import { Link } from "react-router-dom";
export default function Feedback() {
  const [feedbackStatus, setFeedbackStatus] = React.useState({
    feedback: "",
    status: false,
  });
  const getFeedback = (e) => {
    
    setFeedbackStatus({
      feedback: "message",
      status: true,
    });
  }
  return (
    <>
      {feedbackStatus.status===false ? (
        <div style={{ margin: "8vh 5vw" }}>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "4em",
            }}>
            <Typography variant="h2" component={"h2"}>
              Was this Course Helpful?
            </Typography>
          </Box>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Button
                  fullWidth
                  style={{ padding: "3em 0" }}
                  onClick={getFeedback}>
                  <Typography variant="h5" component={"h5"}>
                    Yes it was great!
                  </Typography>
                </Button>
              </Grid>
              <Grid item xs={12} md={4}>
                <Button
                  fullWidth
                  style={{ padding: "3em 0" }}
                  onClick={getFeedback}>
                  <Typography variant="h5" component={"h5"}>
                    Sort of, thanks!
                  </Typography>
                </Button>
              </Grid>
              <Grid item xs={12} md={4}>
                <Button
                  fullWidth
                  style={{ padding: "3em 0" }}
                  onClick={getFeedback}>
                  <Typography variant="h5" component={"h5"}>
                    Not really!!
                  </Typography>
                </Button>
              </Grid>
            </Grid>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "2em",
              }}>
              <Typography variant="h6" component={"h6"}>
                Got a suggestion?{" "}
                <Link style={{ color: "white" }}>Let us know</Link>
              </Typography>
            </Box>
          </Box>
        </div>
      ) : (
        <></>
      )}
    </>
  );

}
