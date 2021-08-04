import React from "react";
import { Route, Redirect } from "react-router";
import { PrivateRouteProps } from "../../interfaces/private-route-props.interface";

const PrivateRoute = ({ component, authed, ...rest }: PrivateRouteProps) => {
  return (
    <>
      {authed ? (
        <Route {...rest} component={component} />
      ) : (
        <Redirect to={{ pathname: "/" }} />
      )}
    </>
  );
};

export default PrivateRoute;
