import {useState} from 'react';

import { Grid, Typography } from '@mui/material'

import Menu from "../../utils/Menu"
import {Statistic} from "./Statistic";
import {Dashboard} from "./Dashboard";

export const ChiefAnalytics = () => {

    const [pageName, setPageName] = useState('Dashboard');

    // Заглушки
    const dataFromDB = {
        name: 'Олег Руководитель',
        menuIsOpened: false,
        date: '12.06.2002',
    }

    const togglePageDashboard = () => {
        if(pageName === 'Statistic') {
            setPageName('Dashboard');
            const stateObj = { page: 'Dashboard' };
            window.history.pushState(stateObj, '', 'Dashboard');
        }
    }

    const togglePageStatistic = () => {
        if(pageName === 'Dashboard') {
            setPageName('Statistic');
            const stateObj = { page: 'Statistic' };
            window.history.pushState(stateObj, '', 'Statistic')
        }
    }

    const menuItem = [
        {name: 'Dashboard', func: togglePageDashboard},
        {name: 'Statistic', func: togglePageStatistic},
    ];


    return (
        <>
            <Grid container spacing={2} alignItems="center" sx={{pt: 1}}>
                <Grid item xs={1}>
                    <Menu menuItem={menuItem}/>
                </Grid>
                <Grid item xs={11}>
                    <Typography align="left" variant="h3">
                        {dataFromDB.name}
                    </Typography>
                </Grid>
                {(pageName === 'Dashboard') ? <Dashboard/> : <Statistic/> }
            </Grid>
        </>
    )
}
