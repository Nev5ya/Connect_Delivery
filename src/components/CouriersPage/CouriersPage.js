import * as React from "react";
import {useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectDeliveredOrdersForCourier} from "../../store/orders/selector";
import CourierHistory from "../CourierHistory/CourierHistory";
import {Chat} from "../Chat/Chat";
import {getOrders} from "../../store/orders/actions";
import {getCouriers} from "../../store/couriers/actions";
import CourierMain from "../CourierMain/CourierMain";
import {selectCurrentCourier} from "../../store/couriers/selector";
import CouriersPageHeader from "../CouriersPageHeader/CouriersPageHeader";


const CouriersPage = () => {
    const courierID = +localStorage.getItem('id_user');
    const currentCourier = useSelector((state) => selectCurrentCourier(state, courierID) );
    const deliveredOrders = useSelector((state) => selectDeliveredOrdersForCourier(state, courierID));

    //console.log('courier', courierBusy, courierID, currentCourier, currentOrder, deliveredOrders)
    const dispatch = useDispatch();
    useEffect((event) => {
        dispatch(getOrders());
        dispatch(getCouriers());
    }, [dispatch]);


     return (
        <>
            <CouriersPageHeader currentCourier={currentCourier[0]}/>
            <Routes>
                <Route index element={<CourierMain />} />
                <Route path="Chat" element={<Chat  mode="Courier" currentCourier={currentCourier[0]} />} />
                <Route path="CourierHistory" element={<CourierHistory orders={deliveredOrders}/>} />
            </Routes>
        </>
    );
};

export default CouriersPage;