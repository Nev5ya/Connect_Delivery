import * as React from "react";
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import {Grid} from "@mui/material";
import {styled} from '@mui/material/styles';
import {useParams} from "react-router-dom";
import MyMap from "../Map/map";
import CourierOrder from "../CourierOrder/CourierOrder";
import {getCurrentCourier, getOrderForCourier} from "../../utils/getData";
import {MyButtonContained, MyButtonOutlined} from "../Button/button";
import {CourierStatusChange} from "../CourierStatusChange/CourierStatusChange";
import './CourierOrder.css';
import TemporaryDrawer from "../../utils/Menu";
import {CourierMenu} from "./CourierMenu";


const CouriersPage = () => {
    const courierID = +useParams().id;

    const currentCourier = getCurrentCourier(courierID)
    const currentOrder = getOrderForCourier(courierID)
    //console.log('courier',courierID, getCurrentCourier(courierID), getOrderForCourier(courierID), currentCourier[0].name)

    return (
        <>
            <TemporaryDrawer menuContent={CourierMenu}/>

            <Stack sx={{mb: 5}} direction="column" spacing={2}>
                <Typography sx={{mt: 2, mb: 2}} variant="h4" component="div">
                    {currentCourier[0].name} - {currentCourier[0].status}
                    <span className="courier-status"></span>
                </Typography>
                <CourierStatusChange/>
            </Stack>
            <Stack direction="row" spacing={2}>
                <Grid container>
                    <Grid item xs={6} sx={{border: 1, borderColor: 'grey.500', borderRadius: 2}}>
                        <Stack direction="column" justifyContent="space-between" style={{height: '100%'}}>
                            <CourierOrder order={currentOrder[0]}/>
                            <Stack sx={{p: 2}} direction="row" justifyContent="space-between">
                                <MyButtonContained sx={{cursor: 'pointer'}} text={'Доставлено'}/>
                                <MyButtonOutlined sx={{cursor: 'pointer'}} text={'Перейти в чат'}/>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <div style={{marginLeft: 16}}>
                            <MyMap name={''} orders={currentOrder} couriers={currentCourier} sizeWidth={'100%'}
                                   sizeHeight={'250px'}/>
                        </div>
                    </Grid>
                </Grid>
            </Stack>
        </>

)
}
export default CouriersPage