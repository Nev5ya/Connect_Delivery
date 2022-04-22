import React, {useState, useEffect, useRef, useCallback} from "react";
import {Breadcrumbs, Container} from '@mui/material';
import {signOut, auth} from "../../services/firebase";
import {onAuthStateChanged} from "firebase/auth";
import {Home} from "../Home";
import {Profile} from "../Profile";
import {ChiefAnalytics} from "../ChiefAnalytics/ChiefAnalytics";
import {AdminTable} from "../AdminTable";
import CouriersPage from "../CouriersPage/CouriersPage";
import {NavLink, Route, Routes, BrowserRouter, Navigate} from "react-router-dom";
import {NotFound} from "../NotFound";

export const Routing = () => {
    const [authed, setAuthed] = useState(false);
    let routes = useRef([]);
    let activeStyle = {
        color: "red",
        fontWeight: "bold",
    };

    const handleLogout = async () => {
        try {
            routes.current = [];
            await signOut();
        } catch (e) {
            console.log(e);
        }
    };

    const currentRoute = useCallback(() => {
        routes.current = [
            { path: "/", name: "Home", Component: Home, id: "5" },
            { path: "/Profile", name: "Profile", Component: Profile, id: "4"},
            { path: "/ChiefAnalytics/", name: "ChiefAnalytics", Component: ChiefAnalytics, id: "3" },
            { path: "/Admin/", name: "Admin", Component: AdminTable, id: "2" },
            { path: "/CouriersPage/", name: "CouriersPage", Component: CouriersPage, id: "1" },
        ]
        let currentUserRoleID = localStorage.getItem('role_id');
        routes.current = routes.current.filter(el => el = el.id ===  "4" || el.id === currentUserRoleID );
      }, []);

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthed(true);
                currentRoute()
            } else {
                setAuthed(false);
            }
        });

        return unsubscribe;
    });

    return (
        <BrowserRouter  >
            <Container fixed>
                <Breadcrumbs aria-label="breadcrumb">

                    {routes.current.map((route) => (
                        <NavLink
                            key={route.path}
                            to={route.path}
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            {route.name}
                        </NavLink>
                    ))}

                </Breadcrumbs>

                <Routes>
                    <Route
                        path="/"
                        element={!authed ? <Home/> : <Navigate to="/Profile" />}
                    >
                    </Route>
                    <Route
                        path="/Profile"
                        element={authed ? <Profile onLogout={handleLogout}/> : <Navigate to="/" />}
                    >
                    </Route>
                    <Route
                        path="/ChiefAnalytics/*"
                        element={authed ? <ChiefAnalytics /> : <Navigate to="/ChiefAnalytics/" />}
                    >
                    </Route>
                    <Route
                        path="/Admin/*"
                        element={authed  ? <AdminTable /> : <Navigate to="/Admin/" />}
                    >
                    </Route>
                    <Route
                        path="/CouriersPage/*"
                        element={authed  ? <CouriersPage /> : <Navigate to="/CouriersPage/" />}
                    >
                    </Route>
                    <Route
                        path="*"
                        element={<NotFound/>}
                    />
                    <Route
                        element={<NotFound/>}
                    />
                </Routes>
            </Container>
        </BrowserRouter>
    );
};
