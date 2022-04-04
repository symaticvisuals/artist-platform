import React from 'react'
import {Box, Button, makeStyles, TextField, ThemeProvider, Typography} from '@material-ui/core'
import userProfileInput from '../../theme/userProfileInput';
const useStyles = makeStyles((theme) => ({
  heading:{

  },
  textField:{
    marginTop:"4vh"
  },
  review:{
    marginTop:"2vh",
    justifyContent:"flex-end",
    width:"100%",
    display:"flex"

  },
  button:{
    [theme.breakpoints.down('xs')]: {
      width:"100%",
    }
  }
}))
function GetReviews() {
const classes = useStyles();
  return (
    <Box style={{ margin: "10vh 6vw" }}>
      <Typography variant="h2" component="h2" className={classes.heading}>
        Our Teachers would love to have your words
      </Typography>
      <ThemeProvider theme={userProfileInput}>

        <TextField
          id="outlined-basic"
          placeholder="Write  your Reviews here"
          variant="outlined"
          color="secondary"
          rows={6}
          multiline
          fullWidth
          className={classes.textField}
        />
        <Box flex className={classes.review}>
          <Button variant='outlined' className={classes.button} color="secondary">Post Review</Button>
        </Box>
      </ThemeProvider>
    </Box>
  );
}

export default GetReviews