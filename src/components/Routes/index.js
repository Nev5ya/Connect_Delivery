import React, {useState, useEffect} from "react";
import {Container, Nav, NavDropdown} from "react-bootstrap";
import {BrowserRouter, Switch, Route, NavLink} from "react-router-dom";
import {CSSTransition} from "react-transition-group";
import {signOut, auth} from "../../services/firebase";
import {onAuthStateChanged} from "firebase/auth";

import {PrivateRoute} from "../PrivateRoute";
import {PublicRoute} from "../PublicRoute";
import {Home} from "../Home";
import {Profile} from "../Profile";
import {NotFound} from "../NotFound";
import {ChiefAnalytics} from "../ChiefAnalytics/ChiefAnalytics";
import {AdminTable} from "../AdminTable";
import {Courier} from "../Courier";
import "./style.css";

const routes = [
    {path: "/", name: "Home", Component: Home},
    {path: "/Profile", name: "Profile", Component: Profile},
    {path: "/ChiefAnalytics/", name: "ChiefAnalytics", Component: ChiefAnalytics},
    {path: "/Admin/", name: "Admin", Component: AdminTable},
    {path: "/Courier", name: "Courier", Component: Courier},
];

export const Routing = () => {
    const [authed, setAuthed] = useState(false);
    const [dropDownOpen, setdropDownOpen] = useState(false);

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
        <BrowserRouter>
            <>
                <Container className="container">
                    <NavDropdown title="Menu" id="nav-dropdown" open={dropDownOpen} onClick={() => {
                        setdropDownOpen(true)
                    }}>

                        {routes.map((route) => (
                            <Nav.Link
                                eventKey={false}
                                key={route.path}
                                as={NavLink}
                                to={route.path}
                                activeClassName="active"
                                activeStyle={{color: "#1865BC", fontWeight: "bold"}}
                                exact
                            >
                                {route.name}
                            </Nav.Link>
                        ))}


                    </NavDropdown>

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
                            path="/DataTable/"
                            component={AdminTable}
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
            </>
        </BrowserRouter>
    );
};
