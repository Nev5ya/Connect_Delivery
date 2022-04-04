import React, {useState, useEffect} from "react";
import {Breadcrumbs, Container} from '@mui/material';
import {signOut, auth} from "../../services/firebase";
import {onAuthStateChanged} from "firebase/auth";
import {Home} from "../Home";
import {Profile} from "../Profile";
import {ChiefAnalytics} from "../ChiefAnalytics/ChiefAnalytics";
import {AdminTable} from "../AdminTable";
import CouriersPage from "../CouriersPage/CouriersPage";
import {NavLink, Route, Router, Routes, BrowserRouter, Navigate} from "react-router-dom";
import {NotFound} from "../NotFound";


const routes = [
    { path: "/", name: "Home", Component: Home },
    { path: "/Profile", name: "Profile", Component: Profile },
    { path: "/ChiefAnalytics/", name: "ChiefAnalytics", Component: ChiefAnalytics },
    { path: "/Admin/", name: "Admin", Component: AdminTable },
    { path: "/CouriersPage/", name: "CouriersPage", Component: CouriersPage },
];


export const Routing = () => {
    const [authed, setAuthed] = useState(false);
    let activeStyle = {
        color: "red",
        fontWeight: "bold",
    };


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

    const currentUserID = +localStorage.getItem('id_user');
    const currentUserRoleID = localStorage.getItem('role_id');
    console.log('currentUser', currentUserID, currentUserRoleID)

    const handleLogout = async () => {
        try {
            await signOut();
        } catch (e) {
            console.log(e);
        }
    };

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
                        element={authed ? <ChiefAnalytics /> : <Navigate to="/" />}
                    >
                    </Route>
                    <Route
                        path="/Admin/*"
                        element={(authed && (currentUserRoleID === '2')) ? <AdminTable /> : <Navigate to="/" />}
                    >
                    </Route>
                    <Route
                        path="/CouriersPage/*"
                        element={(authed && (currentUserRoleID === '1')) ? <CouriersPage /> : <Navigate to="/" />}
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