import React, {useState, useEffect} from "react";
import {Breadcrumbs, Container} from '@mui/material';
import {BrowserRouter, Switch, Route, NavLink, useParams} from "react-router-dom";
//import { createBrowserHistory } from "history";
//import {CSSTransition} from "react-transition-group";
import {signOut, auth} from "../../services/firebase";
import {onAuthStateChanged} from "firebase/auth";

import {PrivateRoute, PrivateRouteAdmin, PrivateRouteChief, PrivateRouteCourier} from "../PrivateRoute";
import {PublicRoute} from "../PublicRoute";
import {Home} from "../Home";
import {Profile} from "../Profile";
import {NotFound} from "../NotFound";
import {ChiefAnalytics} from "../ChiefAnalytics/ChiefAnalytics";
import {Dashboard} from "../ChiefAnalytics/Dashboard";
import {Statistic} from "../ChiefAnalytics/Statistic";
import {AdminTable} from "../AdminTable";
import {Chat} from "../Chat/Chat";
import MyMap from "../Map/map.js";
import {CouriersOperation} from "../AdminTable/CouriersOperation/CouriersOperation";
import {CourierRegistration} from "../AdminTable/CourierRegistration/CourierRegistration";
import CouriersPage from "../CouriersPage/CouriersPage";
import CourierHistory from "../CourierHistory/CourierHistory";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/Profile", name: "Profile", Component: Profile },
  { path: "/ChiefAnalytics/", name: "ChiefAnalytics", Component: ChiefAnalytics },
  { path: "/Admin/", name: "Admin", Component: AdminTable },
  { path: "/CouriersPage/", name: "CouriersPage", Component: CouriersPage },
];

export const Routing = () => {
    const [authed, setAuthed] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                setAuthed(true);
            } else {
                setAuthed(false);
            }
        });

        return unsubscribe;
    }, []);

    const handleLogout = async () => {
        try {
            await signOut();
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <BrowserRouter >
            <Container fixed>

                <Breadcrumbs aria-label="breadcrumb">

                    {routes.map((route) => (
                        <NavLink
                            key={route.path}
                            as={NavLink}
                            to={route.path}
                            activeClassName="active"
                            activeStyle={{color: "#1865BC", fontWeight: "bold"}}
                            exact
                        >
                            {route.name}
                        </NavLink>
                    ))}

                </Breadcrumbs>

                <Switch>
                    <PublicRoute path="/" exact authed={authed}>
                        <Home/>
                    </PublicRoute>

                    <PrivateRoute 
                        path="/Profile" 
                        exact 
                        authed={authed}>
                        <Profile
                            authed={authed}
                            onLogout={handleLogout}
                        />
                    </PrivateRoute>

                    <PrivateRoute
                        exact
                        path="/ChiefAnalytics/"
                        component={ChiefAnalytics}
                        authed={authed}
                    />

                    <Route
                        exact
                        path="/ChiefAnalytics/Dashboard"
                        component={Dashboard}
                        authed={authed}
                    />

                    <Route
                        exact
                        path="/ChiefAnalytics/Statistic"
                        component={Statistic}
                        authed={authed}
                    />

                    <PrivateRoute
                        exact
                        path="/Admin/"
                        component={AdminTable}
                        authed={authed}
                    />

                    <Route
                        exact
                        path="/Admin/Chat"
                        component={Chat}
                        authed={authed}
                    />

                    <Route
                        exact
                        path="/Admin/MyMap"
                        component={MyMap}
                        authed={authed}
                    />

                    <Route
                        exact
                        path="/Admin/CouriersOperation"
                        component={CouriersOperation}
                        authed={authed}
                    />

                    <Route
                        exact
                        path="/Admin/CourierRegistration"
                        component={CourierRegistration}
                        authed={authed}
                    />

                    <PrivateRoute
                        exact
                        path="/CouriersPage/"
                        component={CouriersPage}
                        authed={authed}
                    /> 

                    <Route
                        exact
                        path="/CouriersPage/Chat"
                        component={Chat}
                        authed={authed}
                    />

                    <Route
                        exact
                        path="/CouriersPage/CourierHistory"
                        component={CourierHistory}
                        authed={authed}
                    />


                    <Route>
                        <NotFound/>
                    </Route>
                </Switch>



            </Container>
        </BrowserRouter>
    );
};

/*                 <Switch>
                    <PublicRoute path="/" exact authed={authed}>
                        <Home/>
                    </PublicRoute>

                    <PrivateRoute
                        exact
                        path="/CouriersPage/"
                        component={CouriersPage}
                        authed={authed}
                    />

                    {routes.map(({path, Component}) => (
                        <PrivateRoute
                            key={path}
                            exact
                            authed={authed}
                            path={path}>
                            {({match}) => (
                                <CSSTransition
                                    in={match != null}
                                    timeout={300}
                                    classNames="page"
                                    unmountOnExit
                                >
                                    <div className="page">
                                        <Component onLogout={handleLogout}/>
                                    </div>
                                </CSSTransition>
                            )}
                        </PrivateRoute>
                    ))}


                    <Route>
                        <NotFound/>
                    </Route>
                </Switch> */
