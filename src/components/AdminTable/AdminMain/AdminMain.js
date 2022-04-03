import * as React from "react";
import AdminInWork from "../AdminInWork/AdminInWork";
import AdminHistory from "../AdminHistory/AdminHistory";
import {Divider} from "@mui/material";

export const AdminMain = () => {

    return (
        <>
            <AdminInWork/>
            <Divider variant='string' sx={{ mt: 3, mb: 3 }} />
            <AdminHistory/>
        </>
    );
};
