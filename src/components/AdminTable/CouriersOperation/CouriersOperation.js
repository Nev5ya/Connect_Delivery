import * as React from "react";

import {useState} from "react";
import {useSelector} from "react-redux";

import MyMap from "../../Map/map";

import {Box, Paper, Grid, Typography} from "@mui/material";

import {CouriersList} from "../../CouriersList/CouriersList";
import {selectCouriers, selectCouriersByStatus} from "../../../store/couriers/selector";

export const CouriersOperation = () => {
    const couriers = useSelector(selectCouriers);
    const [clickOnMapToggle, setClickOnMapToggle] = useState(false);

    const clickOnMap = () => {
        console.log('clickOnMapToggle', clickOnMapToggle);
        setClickOnMapToggle(!clickOnMapToggle);
    };

    const couriersOnline = useSelector((state) => selectCouriersByStatus(state, 2));
    const couriersWork = useSelector((state) => selectCouriersByStatus(state, 3));
    const couriersOffline = useSelector((state) => selectCouriersByStatus(state, 1));

    return (
        <>
            <Typography variant='h4' my={2}>Управление курьерами</Typography>
            <Box sx={{mt: 3}}>
                {clickOnMapToggle
                    ? <Box xs={{width: '100%'}}>
                        <MyMap name={''} orders={[]} couriers={couriers} clickOnMap={clickOnMap}/>
                    </Box>
                    : <Grid container spacing={4}>
                        <Grid item xs={12} md={4}>
                            <Paper elevation={3} sx={{p: 3}}>
                                <CouriersList name={'Онлайн:'} couriers={couriersOnline} status_id={2}/>
                                <CouriersList name={'В доставке:'} couriers={couriersWork} status_id={3}/>
                                <CouriersList name={'Оффлайн:'} couriers={couriersOffline} status_id={1}/>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={8} sx={{mt: -2}}>
                            <MyMap name={''}
                                   orders={[]}
                                   couriers={couriers}
                                   clickOnMap={clickOnMap}
                                   sizeWidth={'100%'}
                                   sizeHeight={'600px'}
                                   zoom={8}/>
                        </Grid>
                    </Grid>
                }
            </Box>
        </>
    );
};
