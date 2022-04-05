import {useNavigate} from "react-router-dom";

import Menu from "../../utils/Menu";
import {Box, Typography} from "@mui/material";

export const MenuChiefPageHeader = () => {
    // Заглушки
    const dataFromDB = {
        name: 'Олег Руководитель',
    }

    const navigate = useNavigate();

    const goToDashboard = () => navigate('/ChiefAnalytics/')
    const goToStatistic = () => navigate('/ChiefAnalytics/statistic')

    const menuItem = [
        {name: 'Dashboard', func: goToDashboard},
        {name: 'Statistic', func: goToStatistic},
    ];

    return (
        <>
            <Box sx={{py: 2, mx: -1, display: 'flex', alignItems: 'center'}}>
                <Menu menuItem={menuItem}/>
                <Typography align="left" variant="h3" marginLeft={2}>
                    {dataFromDB.name}
                </Typography>
            </Box>
        </>
    )
}