import React, {useState, useEffect} from "react";
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
    let [routes, setRoutes] = useState([]);
    let activeStyle = {
        color: "red",
        fontWeight: "bold",
    };
    const currentUserRoleID = localStorage.getItem('role_id');

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

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        routes = [
            { path: "/", name: "Home", Component: Home },
            { path: "/Profile", name: "Profile", Component: Profile },
            { path: "/ChiefAnalytics/", name: "ChiefAnalytics", Component: ChiefAnalytics },
            { path: "/Admin/", name: "Admin", Component: AdminTable },
            { path: "/CouriersPage/", name: "CouriersPage", Component: CouriersPage },
        ]
        
        
        switch (currentUserRoleID) {
            case "1":
                setRoutes(routes = routes.filter(el => el.name === "Profile" || el.name === "CouriersPage"));
                
              break;
            case "2":
                setRoutes(routes = routes.filter(el => el.name === "Profile" || el.name === "Admin"));
                
              break;
            case "3":
                setRoutes(routes = routes.filter(el => el.name === "Profile" || el.name === "ChiefAnalytics"));
                
              break;
            default:
                setRoutes(routes = routes.filter(el => el.name === ""));
                
          }
        }, [currentUserRoleID]);

    return (
        <BrowserRouter  >
            <Container fixed>
                <Breadcrumbs aria-label="breadcrumb">

                    {routes.map((route) => (
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
                        element={(authed && (currentUserRoleID === '2')) ? <AdminTable /> : <Navigate to="/Admin/" />}
                    >
                    </Route>
                    <Route
                        path="/CouriersPage/*"
                        element={(authed && (currentUserRoleID === '1')) ? <CouriersPage /> : <Navigate to="/CouriersPage/" />}
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
