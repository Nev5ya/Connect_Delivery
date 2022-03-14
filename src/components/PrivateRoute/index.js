import { Route, Redirect } from "react-router-dom";
import {Roles} from "../../utils/roles.js";

const role = localStorage.getItem('role');

export const PrivateRoute = ({ authed, ...props }) => 
  authed ? <Route {...props} /> : <Redirect to="/" />;

export const PrivateRouteChief = ({ authed, ...props }) => (
  authed && role === Roles.Chief  ? <Route {...props} /> : <Redirect to="/" />
);


export const PrivateRouteAdmin = ({ authed, ...props }) => (
  authed && role === Roles.Admin  ? <Route {...props} /> : <Redirect to="/" />
);


export const PrivateRouteCourier = ({ authed, ...props }) => (
  authed && role === Roles.Courier  ? <Route {...props} /> : <Redirect to="/" />
);
