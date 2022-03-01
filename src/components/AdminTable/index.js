import * as React from 'react';

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
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {Box} from "@mui/material";
import AdminInWork from "./AdminInWork/AdminInWork";
import AdminHistory from "./AdminHistory/AdminHistory";


export const AdminTable = () => {
  const [value, setValue] = useState('0');

  const handleChange = (event, newValue) => {
    console.log('handleChange', newValue)
    setValue(newValue);
  };


  return (
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Главная" value="0"  />
              <Tab label="Карта" value="1"  />
              <Tab label="Чат" value="2"  />
              <Tab label="Управление курьерами" value="3"  />
              <Tab label="Регистрация" value="4"  />
            </TabList>
          </Box>
          <TabPanel value="0" >
            <AdminInWork />
            <hr />
            <AdminHistory />
          </TabPanel>
          <TabPanel value="1" >
            <MyMap name={"Местонахождение курьеров"} couriers={couriers} orders={orders}/>
          </TabPanel>
          <TabPanel value="2" >Чат с администратором</TabPanel>
          <TabPanel value="3" >
            <Grid direction="row" container spacing={2}>
              <Grid item xs={6}>
                <CouriersList name={'Курьеры онлайн:'} couriers={getCouriersOnline} status={'online'}/>
                <CouriersList name={'Курьеры в процессе доставки:'} couriers={getCouriersWork} status={'work'}/>
                <CouriersList name={'Курьеры оффлайн:'} couriers={getCouriersOffline} status={'offline'}/>
              </Grid>
              <Grid item xs={6}>
                <MyMap name={''} orders={[]} couriers={couriers} sizeWidth={'450px'} sizeHeight={'450px'} zoom={8}/>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value="4"  >Item Three</TabPanel>
        </TabContext>
      </Box>
  );





}

