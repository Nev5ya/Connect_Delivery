import {useNavigate} from "react-router-dom";

import Menu from "../../utils/Menu";

import {Box, Typography} from "@mui/material";

export const MenuChiefPageHeader = () => {

    const nameUser = localStorage.getItem('name_user');

    const navigate = useNavigate();

    const goToDashboard = () => navigate('/ChiefAnalytics/')
    const goToStatistic = () => navigate('/ChiefAnalytics/statistic')

    const menuItem = [
        {name: 'Дашборд', func: goToDashboard},
        {name: 'Статистика', func: goToStatistic},
    ];

    return (
        <>
            <Box sx={{py: 2, mx: -1, display: 'flex', alignItems: 'center'}}>
                <Menu menuItem={menuItem}/>
                <Typography align="left" variant="h3" marginLeft={2}>
                    {nameUser}
                </Typography>
            </Box>
        </>
    )
}