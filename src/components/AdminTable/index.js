import {Route, Routes} from "react-router-dom";
import {useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";

import {getOrders} from "../../store/orders/actions";
import {selectCouriers} from "../../store/couriers/selector";
import {selectOrders} from "../../store/orders/selector";
import {getCouriers} from "../../store/couriers/actions";

import {AdminHeader} from "./AdminHeader/AdminHeader";

import {AdminMain} from "./AdminMain/AdminMain";
import {Chat} from "../Chat/Chat";
import MyMap from "../Map/map";
import {CouriersOperation} from "./CouriersOperation/CouriersOperation";
import {CourierRegistration} from "./CourierRegistration/CourierRegistration";

export const AdminTable = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrders());
        dispatch(getCouriers());
    }, []);

    const orders = useSelector(selectOrders)
    const couriers = useSelector(selectCouriers)

    return (
        <>
            <AdminHeader/>
            <Routes>
                <Route index element={<AdminMain/>}/>
                <Route path="Chat" element={<Chat mode="Admin"/>}/>
                <Route path="MyMap" element={<MyMap name={"Местонахождение курьеров и заказов"}
                                                    couriers={couriers}
                                                    orders={orders}
                                             />}
                />
                <Route path="CouriersOperation" element={<CouriersOperation/>}/>
                <Route path="CourierRegistration" element={<CourierRegistration/>}/>
            </Routes>

        </>
    );
};