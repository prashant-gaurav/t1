import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {PrivateRoute} from './screens/PrivateRoute';
import home from './screens/home'
import pricing from './screens/pricing'
import services from './screens/services'
import solution from './screens/solutions'
import login from './screens/auth/login'
import register from './screens/auth/register'

import dashboard from './screens/dashboard'


const publicRoutes = [
    {
        path: '/',
        exact: true,
        screen: home,
    },
    {
        path: '/solution',
        screen: solution,
    },
    {
        path: '/services',
        screen: services,
    },
    {
        path: '/pricing',
        screen: pricing,
    },
    {
        path: '/login',
        screen: login,
    },
    {
        path: '/sign-up',
        screen: register,
    },
    {
        path: '/forgot-password',
        screen: home,
    },

];


const privateRoute = [
    {
        path: '/dashboard',
        screen: dashboard,
    },
];

const Routers = () => {
    return (
        <Router>
            {publicRoutes.map(route => (
                <Route exact path={route.path} component={route.screen}/>
            ))}
            {privateRoute.map(route => (
                <PrivateRoute path={route.path} component={route.screen}/>
            ))}
        </Router>
    );
}
export default Routers
