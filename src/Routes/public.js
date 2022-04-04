import Cookies from "js-cookie";
import React from "react";

import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const PublicRoute = ({ Comp, restricted, ...rest }) => {
  const jwtVerify = Cookies.get("jwt");
  const userVerify = Cookies.get("user");
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route

    <Route
      {...rest}
      render={(props) =>
        jwtVerify && userVerify && restricted ? (
          <Redirect to="/" />
        ) : (
          <>
            <Navbar />
            <Comp {...props} />
            <Footer />
          </>
        )
      }
    />
  );
};

export default PublicRoute;
PublicRoute.prototypes = {
  Comp: PropTypes.elementType.isRequired,
};
