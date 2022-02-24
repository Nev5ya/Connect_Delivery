import * as React from 'react';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import MyMap from "../Map/map.js";
import {useState} from "react";
import {couriers, labels, orders} from "../../utils/data";


export const AdminTable = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    console.log('handleChange', newValue)
    setValue(newValue);
  };


  return (
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Карта" value="1"  />
              <Tab label="Чат" value="2"  />
              <Tab label="Заказ" value="3"  />
              <Tab label="Регистрация" value="4"  />
            </TabList>
          </Box>
          <TabPanel value="1" >

            <MyMap name={"Местонахождение курьеров"} couriers={couriers} orders={orders}/>
          </TabPanel>
          <TabPanel value="2" >Item Two</TabPanel>
          <TabPanel value="3"  >Item Three</TabPanel>
          <TabPanel value="4"  >Item Three</TabPanel>
        </TabContext>
      </Box>
  );





}

