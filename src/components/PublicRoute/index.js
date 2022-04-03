 import { Route } from "react-router-dom";
//
// export const PublicRoute = ({ authed,role, ...props }) =>
//   !authed ? <Route {...props} /> : <Navigate to="/Profile" />;

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const PublicRoute = ({ authed,role, ...props }) => {
    console.log('PublicRoute', authed)
    // const authed = null;



    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return  !authed ? <Route {...props}/> : <Navigate to="/Profile" />;
    // return (
    //
    //         !authed ? <Outlet/> : <Navigate to="/Profile"/>
    //
    //         )
}