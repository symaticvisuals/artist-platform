import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

import DialogContentText from "@material-ui/core/DialogContentText";
import MuiAlert from "@material-ui/lab/Alert";
import CheckIcon from "@material-ui/icons/Check";
import { Fade, Snackbar, makeStyles } from "@material-ui/core";
import { Form } from "./Form";
import MenuComponent from "./Menu";
import { useSelector } from "react-redux";
const FormSnackBarContext = React.createContext();
const loginDialog = React.createContext();
const useStyles = makeStyles((theme) => ({
  snackbar: {
    backgroundColor: "#0E0E0E",
  },
}));
function DialogBox() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const jwtVerify = useSelector((state) => state.loginStatus.jwt);
  const userVerify = useSelector((state) => state.user);
  const classes = useStyles();
  const [snackbar, setSnackbar] = React.useState({
    open: false,
    message: "",
  });
  const snackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar({
      open: false,
      message: "",
    });
  };
  return (
    <FormSnackBarContext.Provider value={{ snackbar, setSnackbar }}>
      <div>
        {userVerify && jwtVerify != null ? (
          <div style={{ display: "flex", alignItems: "center" }}>
            <MenuComponent />
          </div>
        ) : (
          <div>
            <Button onClick={handleClickOpen}>Join Us</Button>
            <loginDialog.Provider value={{ open, setOpen }}>
              <Dialog
                maxWidth="xs"
                TransitionComponent={Fade}
                fullWidth={true}
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
                style={{
                  background: "transparent",
                  borderRadius: "8px",
                  color: "black",
                }}>
                <DialogContentText
                  style={{
                    background: "#000",
                    margin: "0",
                  }}>
                  <Form />
                </DialogContentText>
              </Dialog>
              <Snackbar
                open={snackbar.open}
                autoHideDuration={1000}
                onClose={snackbarClose}>
                <MuiAlert
                  icon={
                    <CheckIcon
                      fontSize="inherit"
                      style={{ color: "#FF4160" }}
                    />
                  }
                  // onClose={snackbarClose}
                  severity="success"
                  classes={{ root: classes.snackbar }}>
                  <strong style={{ color: "white" }}>
                    {snackbar.message}
                  </strong>
                </MuiAlert>
              </Snackbar>
            </loginDialog.Provider>
          </div>
        )}
      </div>
    </FormSnackBarContext.Provider>
  );
}

export { DialogBox, loginDialog, FormSnackBarContext };
