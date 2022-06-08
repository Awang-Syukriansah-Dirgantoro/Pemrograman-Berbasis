import React from "react";
import {
    Routes as Switch,
    Route,
    Outlet,
    Navigate as Redirect,
} from "react-router-dom";
import Home from "./Home";
const ProtectedRoute = ({ component: Component, isAuthenticated, isVerifying, ...rest }) => {
    return isVerifying ? (
      <div />
    ) : isAuthenticated ? (
      <Outlet />
    ) : (
      <Redirect replace to={"/login"} />
    );
  };
export default ProtectedRoute;