import * as React from "react";
import AdminInWork from "../AdminInWork/AdminInWork";
import AdminHistory from "../AdminHistory/AdminHistory";
import {AdminCreateOrder} from "../AdminCreateOrder/AdminCreateOrder";

export const AdminMain = () => {

    return (
        <>
            <AdminInWork/>
            <AdminHistory/>
            <AdminCreateOrder />
        </>
    );
};
