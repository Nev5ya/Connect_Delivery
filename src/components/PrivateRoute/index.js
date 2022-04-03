// import { Route, Navigate } from "react-router-dom";
// import {Roles} from "../../utils/roles.js";
//
// const role = localStorage.getItem('role');
//
// export const PrivateRoute = ({ authed, ...props }) =>
//   authed ? <Route {...props} /> : <Navigate to="/" />;

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = () => {
    const authed = null;
    return authed ? <Outlet/> : <Navigate to="/"/>
}


// export const PrivateRouteChief = ({ authed, ...props }) => (
//   authed && role === Roles.Chief  ? <Route {...props} /> : <Navigate to="/" />
// );
//
//
// export const PrivateRouteAdmin = ({ authed, ...props }) => (
//   authed && role === Roles.Admin  ? <Route {...props} /> : <Navigate to="/" />
// );
//
//
// export const PrivateRouteCourier = ({ authed, ...props }) => (
//   authed && role === Roles.Courier  ? <Route {...props} /> : <Navigate to="/" />
// );
