import {useState } from 'react';
import {Box, Grid, Typography, Paper} from '@mui/material'
import Menu from "../../utils/Menu"
import {Statistic} from "./Statistic";
import {Dashboard} from "./Dashboard";

export const ChiefAnalytics = ({page}) => {

    const [pageName, setPageName] = useState('Dashboard');

    // Заглушки
    const dataFromDB = {
        name: 'Олег Руководитель',
        menuIsOpened: false,
        date: '12.06.2002',
    }

    const togglePageDashboard = () => {
        if(pageName === 'Statistic') setPageName('Dashboard');
    }

    const togglePageStatistic = () => {
        if(pageName === 'Dashboard') setPageName('Statistic');
    }

    const menuItem = [
        {name: 'Dashboard', func: togglePageDashboard},
        {name: 'Statistic', func: togglePageStatistic},
    ];

    page = pageName;
    console.log(page);
    return (
        <>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={1}>
                    <Menu menuItem={menuItem}/>
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
                                        {pageName}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                {(pageName === 'Dashboard') ? <Dashboard/> : <Statistic/> }
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}

// <Menu menuItem={menuItem}/>
// <Link to={`ChiefAnalytics/${menuItem}`}/>