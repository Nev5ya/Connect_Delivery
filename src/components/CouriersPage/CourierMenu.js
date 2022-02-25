import * as React from 'react';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import MyMap from "../Map/map.js";
import {useState} from "react";
import {couriers, orders} from "../../utils/data";
import {getCouriersOffline, getCouriersOnline, getCouriersWork} from "../../utils/getData";
import {CouriersList} from "../CouriersList/CouriersList";
import Stack from "@mui/material/Stack";
import Order from "../order/order";
import {MyButtonContained, MyButtonOutlined} from "../Button/button";
import {ColumnHeaderItem} from "@material-ui/data-grid";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";


export const CourierMenu = () => {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        console.log('handleChange', newValue)
        setValue(newValue);
    };


    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabList  aria-label="lab API tabs example">
                <Tab label="Карта" value="1"  />
                <Tab label="Чат" value="2"  />
                <Tab label="Управление курьерами" value="3"  />
                <Tab label="Регистрация" value="4"  />
            </TabList>
        </Box>
    );





}

