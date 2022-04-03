import * as React from 'react';
import {useEffect, useState} from 'react';

import {Box, Divider, Stack} from "@mui/material";




import Typography from "@mui/material/Typography";

import {Route} from "react-router-dom";
import {MyButtonContained} from "../../Button/button";
import Menu from "../../../utils/Menu";
import {AdminMenu} from "../../AdminMenu/AdminMenu";

export const AdminHeader = () => {
    const [option, setOption] = useState('0');
    const [hrefMenu, setHrefMenu] = useState('');

    const onMenuItemClick = (option) => {
        setOption(option);
    };
    const onMenuHref = (href) => {
        setHrefMenu(href);
    };


    return (
        <>
            <Box sx={{width: '100%', typography: 'body1'}}>
                <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between'}}>
                    <Menu menuItem={AdminMenu(onMenuItemClick, onMenuHref)}/>
                    <Typography sx={{mt: 4}} variant='h4' component='h2'>Стас Администратор</Typography>
                    <Stack sx={{mt: 4}}spacing={2} direction='row'>
                        <MyButtonContained  text={'У ВАС СООБЩЕНИЕ'}  onClick={() => {setOption('1')}}/>
                    </Stack>
                </Box>
                <Divider variant='string' sx={{ mt: 3, mb: 3 }} />
            </Box>
        </>
    );

}