import { Switch } from "react-router-dom";
import Home from "../pages/Home";
import Sessions from "../pages/Sessions";
import CourseOutline from "../pages/CourseOutline";
import UserProfile from "../pages/UserProfile";
import ViewPlans from "../pages/ViewPlans";
import PublicRoute from "./public";
// import PrivateRoute from "./restricted";
import InvalidPage from "../pages/InvalidPage";

import AdminDashboard from "../pages/Admin/AdminDashboard";
import AdminRoutes from "./admin";
import AdminLogin from "../pages/Admin/AdminLogin";
import PrivateRoute from "./restricted";

function Routes() {
  return (
    <>
      <Switch>
        <PublicRoute restricted={false} path="/" exact Comp={Home} />
        <AdminRoutes restricted={false} path="/admin" Comp={AdminDashboard} />
        <PublicRoute restricted={false} path="/adminlog" Comp={AdminLogin} />
        <PublicRoute restricted={false} path="/sessions" Comp={Sessions} />
        <PrivateRoute restricted={false} path="/myCourses" Comp={UserProfile} />
        <PublicRoute restricted={false} path="/course" Comp={CourseOutline} />
        <PublicRoute
          restricted={false}
          path="/course/:id"
          Comp={CourseOutline}
        />
        <PrivateRoute
          restricted={false}
          path="/userProfile"
          Comp={UserProfile}
        />
        <PublicRoute restricted={false} path="/plans" Comp={ViewPlans} />

        <PublicRoute restricted={false} path="*" Comp={InvalidPage} />
      </Switch>
    </>
  );
}
export default Routes;
//TODO: Implement the routes using the react-query library.
//TODO: Manage url using react-location
