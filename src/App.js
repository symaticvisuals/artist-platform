import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "./assets/css/main.css";

import { Box, makeStyles, ThemeProvider } from "@material-ui/core";
import React from "react";

import theme from "./theme/index";
import Routes from "./Routes/routes";

import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { setJwt } from "./redux/Slices/loginStatusSlice";
import { setLoggedUser } from "./redux/Slices/userSlice";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { setNewUser } from "./redux/Slices/newUserSlice";
const queryClient = new QueryClient();
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#080808",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect stroke='%23080808' stroke-width='0.9' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='scale(9.65) translate(-896.37 -672.28)'%3E%3Cuse fill='%23252525' href='%23s' y='2'/%3E%3Cuse fill='%23252525' href='%23s' x='1' y='2'/%3E%3Cuse fill='%23343434' href='%23s' x='2' y='2'/%3E%3Cuse fill='%23343434' href='%23s'/%3E%3Cuse fill='%233f3f3f' href='%23s' x='2'/%3E%3Cuse fill='%233f3f3f' href='%23s' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='scale(9.65) translate(-896.37 -672.28)'%3E%3Cg fill='%23494949'%3E%3Cuse href='%23s'/%3E%3Cuse href='%23s' y='5' /%3E%3Cuse href='%23s' x='1' y='10'/%3E%3Cuse href='%23s' x='2' y='1'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='8'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='5' y='2'/%3E%3Cuse href='%23s' x='5' y='6'/%3E%3Cuse href='%23s' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(9.65) translate(-896.37 -672.28)'%3E%3Cg fill='%23494949'%3E%3Cuse href='%23s' y='5'/%3E%3Cuse href='%23s' y='8'/%3E%3Cuse href='%23s' x='1' y='1'/%3E%3Cuse href='%23s' x='1' y='9'/%3E%3Cuse href='%23s' x='1' y='12'/%3E%3Cuse href='%23s' x='2'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='2'/%3E%3Cuse href='%23s' x='3' y='6'/%3E%3Cuse href='%23s' x='3' y='11'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(9.65) translate(-896.37 -672.28)'%3E%3Cg fill='%23515151'%3E%3Cuse href='%23s' y='11'/%3E%3Cuse href='%23s' x='2' y='9'/%3E%3Cuse href='%23s' x='5' y='12'/%3E%3Cuse href='%23s' x='9' y='4'/%3E%3Cuse href='%23s' x='12' y='1'/%3E%3Cuse href='%23s' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='scale(9.65) translate(-896.37 -672.28)'%3E%3Cg fill='%23080808'%3E%3Cuse href='%23s' y='9'/%3E%3Cuse href='%23s' x='16' y='5'/%3E%3Cuse href='%23s' x='14' y='2'/%3E%3Cuse href='%23s' x='11' y='11'/%3E%3Cuse href='%23s' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%23595959'%3E%3Cuse href='%23s' x='3' y='13'/%3E%3Cuse href='%23s' x='9' y='7'/%3E%3Cuse href='%23s' x='13' y='10'/%3E%3Cuse href='%23s' x='15' y='4'/%3E%3Cuse href='%23s' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='scale(9.65) translate(-896.37 -672.28)'%3E%3Cg fill='%23FF454D'%3E%3Cuse href='%23s' x='2' y='5'/%3E%3Cuse href='%23s' x='16' y='38'/%3E%3Cuse href='%23s' x='46' y='42'/%3E%3Cuse href='%23s' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='scale(9.65) translate(-896.37 -672.28)'%3E%3Cg fill='%23FF454D'%3E%3Cuse href='%23s' x='33' y='13'/%3E%3Cuse href='%23s' x='27' y='54'/%3E%3Cuse href='%23s' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='scale(9.65) translate(-896.37 -672.28)'%3E%3Cg fill='%23FF454D'%3E%3Cuse href='%23s' x='11' y='8'/%3E%3Cuse href='%23s' x='51' y='13'/%3E%3Cuse href='%23s' x='17' y='73'/%3E%3Cuse href='%23s' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E")`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    height: "100vh",
    width: "100%",
    margin: 0,
    padding: 0,
    overflowX: "hidden",
    overflowY: "initial",
    scrollBehavior: "smooth",
  },
}));
function App() {
  const dispatch = useDispatch();
  const checkUser = () => {
    if (Cookies.get("jwt") && Cookies.get("user")) {
      console.log("jwt cookie is present");
      const user = JSON.parse(Cookies.get("user"));
      dispatch(setJwt(Cookies.get("jwt")));
      if (user.newUser === 1) {
        dispatch(setNewUser(user));
      } else {
        dispatch(setLoggedUser(user));
      }
    } else {
      console.log("jwt cookie is not present");
    }
  };
  
  window.onload = function () {
    checkUser();
    // window.alert("You are leaving the page");
  };
  const classes = useStyles();
  return (
    <Box style={{ background: "black" }}>
      <div className={classes.container}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <React.Suspense fallback={<div ><h1>Unable to Load</h1></div>}>
              
              <ThemeProvider theme={theme}>
                <Routes />
              </ThemeProvider>
              <ReactQueryDevtools initialIsOpen={false} />
            </React.Suspense>
          </Router>
        </QueryClientProvider>
      </div>
    </Box>
  );
}

export default App;
