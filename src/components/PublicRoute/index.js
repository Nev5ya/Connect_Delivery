import { Route, Redirect } from "react-router-dom";

export const PublicRoute = ({ authed,role, ...props }) =>
  !authed ? <Route {...props} /> : <Redirect to="/Profile" />;

