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
import CourierOrder from "../CourierOrder/CourierOrder";
import {MyButtonContained, MyButtonOutlined} from "../Button/button";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {Button} from "@mui/material";


export const CourierMenu = () => {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        console.log('handleChange', newValue)
        setValue(newValue);
    };


    return (
        <Box sx={{ width: 400, typography: 'body1' }}>
            <Button >
                Карта
            </Button>
        </Box>
    );





}

