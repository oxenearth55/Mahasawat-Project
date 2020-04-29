import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./index";

const VendorRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            // NOTE render these if user is vendor  (user.role === 1)
            isAuthenticated() && isAuthenticated().user.role === 1 ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/signin",
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);

export default VendorRoute;

