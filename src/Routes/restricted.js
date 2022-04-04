import React from "react";

import { Redirect, Route } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import useProfile from "../hooks/useProfile";

const PrivateRoute = ({ Comp, ...rest }) => {
  
  const { data } = useProfile();
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    
    <Route
      {...rest}
      render={(props) =>
       data ? (
          <>
            <Navbar />
            <Comp {...props} />
            <Footer />
          </>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;
