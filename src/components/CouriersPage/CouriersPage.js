import * as React from "react";
import {useEffect, useState} from "react";
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import {Route, Routes} from "react-router-dom";
import {CourierStatusChange} from "../CourierStatusChange/CourierStatusChange";
import {Box} from "@mui/material";
import Menu from "../../utils/Menu";
import {CourierMenu} from "../CourierMenu/CourierMenu";
import {useDispatch, useSelector} from "react-redux";
import {
    selectDeliveredOrdersForCourier,
    selectTransitOrderForCourier
} from "../../store/orders/selector";
import CourierHistory from "../CourierHistory/CourierHistory";
import {Chat} from "../Chat/Chat";
import {getOrders} from "../../store/orders/actions";
import {getCouriers} from "../../store/couriers/actions";
import CourierMain from "../CourierMain/CourierMain";
import {selectCurrentCourier} from "../../store/couriers/selector";


const CouriersPage = () => {
    const courierID = +localStorage.getItem('id_user');
    const currentCourier = useSelector((state) => selectCurrentCourier(state, courierID) );
    const currentOrder = useSelector((state) => selectTransitOrderForCourier(state, courierID));
    const deliveredOrders = useSelector((state) => selectDeliveredOrdersForCourier(state, courierID));
    const courierBusy = currentOrder?.length > 0;
    console.log('courierBusy', courierBusy, currentOrder?.length > 0)

    //console.log('courier', courierBusy, courierID, currentCourier, currentOrder, deliveredOrders)
    const dispatch = useDispatch();
    useEffect((event) => {
        console.log('useEffect')
        dispatch(getOrders());
        dispatch(getCouriers());
    }, [dispatch]);

    /////отслеживаем клик по меню и выбор страницы для показа//
    const [option, setOption] = useState('0');
    const onMenuItemClick = (option) => {
        setOption(option);
        console.log('onMenuItemClick', option);
    };

    /////отслеживаем клик по карте для увеличения на всю страницу//
    const [clickOnMapToggle, setClickOnMapToggle] = useState(false);
    const clickOnMap = () => {
     console.log('clickOnMapToggle', clickOnMapToggle);
     setClickOnMapToggle(!clickOnMapToggle);
    };

     return (
        <>
            <Menu menuItem={CourierMenu(onMenuItemClick)}/>
            <Stack sx={{mb: 5}} direction="row" spacing={2}>
                <Typography sx={{mt: 2}} variant="h4" component="div" >
                    {currentCourier[0]?.name}
                    <span className="courier-status"></span>
                </Typography>
                <Box sx={{pt: 2}}>
                    <CourierStatusChange  courier={currentCourier} courierBusy={courierBusy}/>
                </Box>
            </Stack>

            <Routes>
                <Route index element={<CourierMain />} />
                <Route path="Chat" element={<Chat  mode="Courier" currentCourier={currentCourier[0]} />} />
                <Route path="CourierHistory" element={<CourierHistory orders={deliveredOrders}/>} />
            </Routes>
        </>
    );
};

export default CouriersPage;