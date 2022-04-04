import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentCourier} from "../../store/couriers/selector";
import {selectDeliveredOrdersForCourier, selectTransitOrderForCourier} from "../../store/orders/selector";
import {useEffect, useState} from "react";
import {getOrders} from "../../store/orders/actions";
import {getCouriers} from "../../store/couriers/actions";
import {Box, Grid} from "@mui/material";
import MyMap from "../Map/map";
import Stack from "@mui/material/Stack";
import CourierOrder from "../CourierOrder/CourierOrder";
import CourierHistory from "../CourierHistory/CourierHistory";
import * as React from "react";

const CourierMain = () => {
    const courierID = +localStorage.getItem('id_user');
    const currentCourier = useSelector((state) => selectCurrentCourier(state, courierID) );
    const currentOrder = useSelector((state) => selectTransitOrderForCourier(state, courierID));
    const deliveredOrders = useSelector((state) => selectDeliveredOrdersForCourier(state, courierID));
   // console.log('courier', courierID , currentCourier, currentOrder, deliveredOrders)


    const dispatch = useDispatch();
    useEffect((event) => {
        console.log('useEffect')
        dispatch(getOrders());
        dispatch(getCouriers());
    }, [dispatch]);

    /////отслеживаем клик по карте для увеличения на всю страницу//
    const [clickOnMapToggle, setClickOnMapToggle] = useState(false);
    const clickOnMap = () => {
        console.log('clickOnMapToggle', clickOnMapToggle);
        setClickOnMapToggle(!clickOnMapToggle);
    };

    return (
        <>


            <Stack direction="row" spacing={2}>
                <Grid container>
                    <CourierOrder order={currentOrder[0]}/>
                    <Grid item xs={6}>
                        <Box sx={{}}>
                            <MyMap name={''}
                                   orders={currentOrder}
                                   couriers={currentCourier}
                                   clickOnMap={clickOnMap}
                                   sizeWidth={'100%'}
                                   sizeHeight={'250px'} />
                        </Box>
                    </Grid>
                </Grid>
            </Stack>

            <CourierHistory orders={deliveredOrders} />
        </>
    );
};

export default CourierMain;