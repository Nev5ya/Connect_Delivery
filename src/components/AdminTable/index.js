import * as React from 'react';
import {useEffect, useState} from 'react';
import MyMap from "../Map/map.js";
import {Box, Divider, Stack} from "@mui/material";
import AdminInWork from "./AdminInWork/AdminInWork";
import AdminHistory from "./AdminHistory/AdminHistory";
import {useDispatch, useSelector} from "react-redux";
import {getOrders} from "../../store/orders/actions";
import {selectCouriers} from "../../store/couriers/selector";
import {selectOrders} from "../../store/orders/selector";
import {getCouriers, registrCourier} from "../../store/couriers/actions";
import {AdminMenu} from "../AdminMenu/AdminMenu";
import {Chat} from "../Chat/Chat";
import {CouriersOperation} from "../AdminTable/CouriersOperation/CouriersOperation";
import {CourierRegistration} from "../AdminTable/CourierRegistration/CourierRegistration";
import Menu from "../../utils/Menu";
import Typography from "@mui/material/Typography";
import {MyButtonContained} from "../Button/button";

export const AdminTable = () => {

  const [option, setOption] = useState('0');
  const [hrefMenu, setHrefMenu] = useState('');

  const onMenuItemClick = (option) => {
    setOption(option);
  };
  const onMenuHref = (href) => {
    setHrefMenu(href);
  };

  const dispatch = useDispatch();
  useEffect((event) => {
    console.log('useEffect')
    dispatch(getOrders());
    dispatch(getCouriers());
  }, []);

  const orders = useSelector(selectOrders)
   console.log('state orders', orders)
  const couriers = useSelector(selectCouriers)
   console.log('state couriers', couriers)


  const renderOptionalComponent = (option) => {
    console.log('option', option)
    switch (option) {
      case '1':
        return <Chat  mode="Admin" />;
      case '2':
        return <MyMap  name={"Местонахождение курьеров и заказов"} couriers={couriers} orders={orders} />;
      case '3':
        return <CouriersOperation/>;
      case '4':
        return <CourierRegistration/>;
      default:
        return (
            <>
              <AdminInWork setOption={setOption}/>
              <Divider variant='string' sx={{ mt: 5, mb: 3 }} />
              <AdminHistory/>
            </>
        );
    };
  };

  return (
    <Box sx={{width: '100%', typography: 'body1'}}>
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between'}}>
        <Menu menuItem={AdminMenu(onMenuItemClick, onMenuHref)}/>
        <Typography sx={{mt: 4}} variant='h4' component='h2'>Стас Администратор</Typography>
        <Stack sx={{mt: 4}}spacing={2} direction='row'>
          <MyButtonContained  text={'У ВАС СООБЩЕНИЕ'}  onClick={() => {setOption('1')}}/>
        </Stack>
      </Box>
        <Divider variant='string' sx={{ mt: 3, mb: 3 }} />
      {renderOptionalComponent(option)}
    </Box>
  );





}

