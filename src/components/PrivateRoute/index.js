import { Route, Redirect } from "react-router-dom";
import {Roles} from "../../utils/roles.js"

export const PrivateRoute = ({ authed, ...props }) => 
  authed ? <Route {...props} /> : <Redirect to="/" />;

export const PrivateRouteChief = ({ authed, ...props }) => (
  authed && localStorage.getItem('role') === Roles.Chief  ? <Route {...props} /> : <Redirect to="/" />
);


export const PrivateRouteAdmin = ({ authed, ...props }) => (
  authed && localStorage.getItem('role') === Roles.Admin  ? <Route {...props} /> : <Redirect to="/" />
);


export const PrivateRouteCourier = ({ authed, ...props }) => (
  authed && localStorage.getItem('role') === Roles.Courier  ? <Route {...props} /> : <Redirect to="/" />
);