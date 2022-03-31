import * as React from "react";
import {useEffect, useState} from "react";
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import {Grid} from "@mui/material";
import {useParams} from "react-router-dom";
import MyMap from "../Map/map";
import CourierOrder from "../CourierOrder/CourierOrder";
import {CourierStatusChange} from "../CourierStatusChange/CourierStatusChange";
import {Box} from "@mui/material";
import Menu from "../../utils/Menu";
import {CourierMenu} from "../CourierMenu/CourierMenu";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentCourier} from "../../store/couriers/selector";
import {
    selectDeliveredOrdersForCourier,
    selectTransitOrderForCourier
} from "../../store/orders/selector";
import CourierHistory from "../CourierHistory/CourierHistory";
import {Chat} from "../Chat/Chat";
import {getOrders} from "../../store/orders/actions";
import {getCouriers} from "../../store/couriers/actions";


const CouriersPage = () => {
    const courierID = +useParams().id;
    const currentCourier = useSelector((state) => selectCurrentCourier(state, courierID) );
    const currentOrder = useSelector((state) => selectTransitOrderForCourier(state, courierID));
    const deliveredOrders = useSelector((state) => selectDeliveredOrdersForCourier(state, courierID));
    console.log('courier', deliveredOrders)

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
            {(option === '1')
                ? <Chat mode="Courier" currentCourier={currentCourier[0]}/>
                :(option === '0')
                     ? (clickOnMapToggle
                        ? <Box xs={{width: '100%'}}>
                            <MyMap name={''} orders={[currentOrder[0]]} couriers={currentCourier}  clickOnMap={clickOnMap}/>
                         </Box>
                        :
                         <>
                             <Stack sx={{mb: 5}} direction="column" spacing={2}>
                                 <Typography sx={{mt: 2, mb: 4}} variant="h4" component="div" >
                                    {currentCourier[0]?.name}
                                     <span className="courier-status"></span>
                                 </Typography>
                                 <CourierStatusChange />
                             </Stack>

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

                              <CourierHistory orders={deliveredOrders} onClick={() => setOption('2')}/>
                         </>)
                    :(option === '2')
                        ? <CourierHistory orders={deliveredOrders}/>
                        : <> </>
             }
        </>
    );
};

export default CouriersPage;