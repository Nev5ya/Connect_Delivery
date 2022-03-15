import React, {useState, useEffect} from "react";
import {Breadcrumbs, Container} from '@mui/material';
import {BrowserRouter, Switch, Route, NavLink} from "react-router-dom";
import {CSSTransition} from "react-transition-group";
import {signOut, auth} from "../../services/firebase";
import {onAuthStateChanged} from "firebase/auth";

import {PrivateRoute, PrivateRouteAdmin, PrivateRouteChief, PrivateRouteCourier} from "../PrivateRoute";
import {PublicRoute} from "../PublicRoute";
import {Home} from "../Home";
import {Profile} from "../Profile";
import {NotFound} from "../NotFound";
import {ChiefAnalytics} from "../ChiefAnalytics/ChiefAnalytics";
import {AdminTable} from "../AdminTable";
import CouriersPage from "../CouriersPage/CouriersPage";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/Profile", name: "Profile", Component: Profile },
  { path: "/ChiefAnalytics/", name: "ChiefAnalytics", Component: ChiefAnalytics },
  { path: "/Admin/", name: "Admin", Component: AdminTable },
  { path: "/CouriersPage/3", name: "CouriersPage", Component: CouriersPage },
];

export const Routing = () => {
    const [authed, setAuthed] = useState(false);
    let role;
    //const [role, setRole] = useState('');

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                localStorage.setItem('role', user.email);
                //setRole(user.email);
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
        <BrowserRouter>
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
                    <PrivateRoute path="/Profile" exact authed={authed}>
                        <Profile
                            authed={authed}

                            onLogout={handleLogout}
                        />
                    </PrivateRoute>

                    <PrivateRoute
                        path="/CouriersPage/:id"
                        component={CouriersPage}
                        authed={authed}
                    />




                    {routes.map(({path, Component}) => (
                        <Route key={path} exact path={path}>
                            {({match}) => (
                                <CSSTransition
                                    in={match != null}
                                    timeout={300}
                                    classNames="page"
                                    unmountOnExit
                                >
                                    <div className="page">
                                        <Component/>
                                    </div>
                                </CSSTransition>
                            )}
                        </Route>
                    ))}

                    <Route>
                        <NotFound/>
                    </Route>
                </Switch>

            </Container>
        </BrowserRouter>
    );
};

/*                     <PrivateRouteChief path="/ChiefAnalytics" exact authed={authed}>
                        <ChiefAnalytics authed={authed}/>
                    </PrivateRouteChief>

                    <PrivateRouteAdmin path="/Admin" exact authed={authed}>
                        <AdminTable authed={authed}/>
                    </PrivateRouteAdmin>
                    
                    <PrivateRouteCourier
                        path="/CouriersPage/:id"
                        component={CouriersPage}
                        authed={authed}
                    />

                    */
