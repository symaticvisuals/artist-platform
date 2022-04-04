import Cookies from "js-cookie";
import React from "react";

import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";

import AdminNavbar from "../Components/Admin/Admin.Navbar";
const AdminRoutes = ({ Comp, restricted, ...rest }) => {
  // const jwtVerify = Cookies.get("jwt");
  // const userVerify = Cookies.get("user");
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={(props) =>
        Cookies.get("admin") === "true" ? (
          <>
            <AdminNavbar>
              <Comp {...props} />
            </AdminNavbar>
          </>
        ) : (
          <Redirect to="/adminlog" />
        )
      }
    />
  );
};

export default AdminRoutes;
AdminRoutes.prototypes = {
  Comp: PropTypes.elementType.isRequired,
};
