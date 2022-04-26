import {useNavigate} from "react-router-dom";

import {Box, Typography} from "@mui/material";

import Menu from "../../../utils/Menu";

export const AdminHeader = () => {

    const nameUser = localStorage.getItem('name_user');

    const adminMenu = [
        {
            name: 'Основная страница',
            func: () => onMenuItemClick(''),
        },
        {
            name: 'Чаты',
            func: () => onMenuItemClick('Chat'),
        },
        {
            name: 'Карта',
            func: () => onMenuItemClick('MyMap'),
        },
        {
            name: 'Управление курьерами',
            func: () => onMenuItemClick('CouriersOperation'),
        },
        {
            name: 'Зарегистрировать нового курьера',
            func: () => onMenuItemClick('CourierRegistration'),
        },
    ]

    const navigate = useNavigate()

    const onMenuItemClick = (link) => {
        navigate('/Admin/' + link)
    };

    return (
        <>
            <Box sx={{py: 2, mx: -1, display: 'flex', alignItems: 'center'}}>
                <Menu menuItem={adminMenu}/>
                <Typography align="left" variant="h3" marginLeft={2}>
                    {nameUser}
                </Typography>
            </Box>
        </>
    );

}