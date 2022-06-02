import React from "react";
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
    Link,
    useParams,
    useLocation,
    useNavigate,
    Navigate as Redirect,
  } from "react-router-dom";
const ProtectedRoute = ({
    component: Component,
    isAuthenticated,
    isVerifying,
    ...rest
}) => (
    <Route
        {...rest}
        render={props =>
            isVerifying ? (
                <div />
            ) : isAuthenticated ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);
export default ProtectedRoute;