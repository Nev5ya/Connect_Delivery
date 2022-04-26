import * as React from "react";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Grid, Box} from "@mui/material";

import MyMap from "../Map/map";

import {selectDeliveredOrdersForCourier, selectTransitOrderForCourier} from "../../store/orders/selector";
import {selectCurrentCourier} from "../../store/couriers/selector";
import {getOrders} from "../../store/orders/actions";
import {getCouriers} from "../../store/couriers/actions";

import CourierOrder from "../CourierOrder/CourierOrder";
import CourierHistory from "../CourierHistory/CourierHistory";

const CourierMain = () => {

    const courierID = +localStorage.getItem('id_user');

    const currentCourier = useSelector((state) => selectCurrentCourier(state, courierID));
    const currentOrder = useSelector((state) => selectTransitOrderForCourier(state, courierID));
    const deliveredOrders = useSelector((state) => selectDeliveredOrdersForCourier(state, courierID));
    // console.log('courier', courierID , currentCourier, currentOrder, deliveredOrders)

    const dispatch = useDispatch();
    useEffect((event) => {
        // console.log('useEffect')
        dispatch(getOrders());
        dispatch(getCouriers());
    }, [dispatch]);

    /////отслеживаем клик по карте для увеличения на всю страницу//
    const [clickOnMapToggle, setClickOnMapToggle] = useState(false);
    const clickOnMap = () => {
        // console.log('clickOnMapToggle', clickOnMapToggle);
        setClickOnMapToggle(!clickOnMapToggle);
    };

    return (
        <Box mt={4}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <CourierOrder order={currentOrder[0]}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{mt: -2}}>
                    <MyMap name={''}
                           orders={currentOrder}
                           couriers={currentCourier}
                           clickOnMap={clickOnMap}
                           sizeWidth={'100%'}
                           sizeHeight={'420px'}/>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <CourierHistory orders={deliveredOrders}/>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CourierMain;