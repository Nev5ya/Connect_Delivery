import {useState} from 'react';

import {Grid, Paper, Typography, Box} from '@mui/material'

import Menu from "../../utils/Menu"
import {Statistic} from "./Statistic";
import {Dashboard} from "./Dashboard";
import {MenuChiefSettings} from "./MenuChiefSettings"


export const ChiefAnalytics = () => {

    // const [pageName, setPageName] = useState('Dashboard');

    // Заглушки
    const dataFromDB = {
        name: 'Олег Руководитель',
        // menuIsOpened: false,
        // date: '12.06.2002',
    }

    // const togglePageDashboard = () => {
    //     if(pageName === 'Statistic') {
    //         setPageName('Dashboard');
    //         // const stateObj = { page: 'Dashboard' };
    //         // window.history.pushState(stateObj, '', 'Dashboard');
    //     }
    // }
    //
    // const togglePageStatistic = () => {
    //     if(pageName === 'Dashboard') {
    //         setPageName('Statistic');
    //         // const stateObj = { page: 'Statistic' };
    //         // window.history.pushState(stateObj, '', 'Statistic')
    //     }
    // }
    //
    // const menuItem = [
    //     {name: 'Dashboard', func: togglePageDashboard},
    //     {name: 'Statistic', func: togglePageStatistic},
    // ];


    return (
        <>
            <Grid container spacing={2} alignItems="center"  sx={{mt: 1}}>
                <Grid item xs={1}>
                    <MenuChiefSettings/>
                </Grid>
                <Grid item xs={11}>
                    <Typography align="left" variant="h3">
                        {dataFromDB.name}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={0}>
                        <Grid container alignItems="center" gap={2}>
                            <Grid item xs={12}>
                                <Box sx={{p: 2}}>
                                    <Typography align="left" variant="h4">
                                        Dashboard
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper elevation={2}>
                                    <Box sx={{p: 3}}>
                                        <Typography variant="h6">В обработке 20 заказов</Typography>
                                        <Typography variant="h6">На линии 42 курьера</Typography>
                                        <Typography variant="h6">
                                            За сегодня доставленно 54 заказа
                                        </Typography>
                                        <Typography variant="h6">
                                            Среднее время доставки 42 минуты
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}