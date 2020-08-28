import React from 'react';
import {Redirect, Route} from 'react-router-dom';
// import {sessionKey} from '../confg'
const sessionKey = 'dsfbnnfbsdvfbv'
export const PrivateRoute = ({component: PrivateRouteComponent, ...rest}) => (
    <Route {...rest} render={props =>
        window.sessionStorage.getItem(sessionKey) ? (
            <PrivateRouteComponent {...props} />
        ) : (
            <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
        )}/>
);
