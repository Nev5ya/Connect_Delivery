import {useNavigate} from "react-router-dom";

import {Box, Divider, Stack, Typography} from "@mui/material";

import {MyButtonContained} from "../../Button/button";
import Menu from "../../../utils/Menu";

export const AdminHeader = () => {

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
            <Box sx={{width: '100%', typography: 'body1'}}>
                <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between'}}>
                    <Menu menuItem={adminMenu}/>
                    <Typography sx={{mt: 4}} variant='h4' component='h2'>Стас Администратор</Typography>
                    <Stack sx={{mt: 4}} spacing={2} direction='row'>
                        <MyButtonContained  text={'У ВАС СООБЩЕНИЕ'}/>
                    </Stack>
                </Box>
                <Divider variant='string' sx={{ mt: 3, mb: 3 }} />
            </Box>
        </>
    );

}