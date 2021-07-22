import React, { Component } from 'react'
import { Route, Redirect } from 'react-router';

const PrivateRoute = ({component, authed, ...rest}:any) => {
    return (
        <>
            {
                authed?
                <Route
                    {...rest}
                    component={component}
                />
                : <Redirect to={{pathname: '/'}} />
            }
        </>
    )
}

export default PrivateRoute;
