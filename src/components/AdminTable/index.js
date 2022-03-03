import * as React from 'react';
import {useEffect, useState} from 'react';
import MyMap from "../Map/map.js";
import {Box} from "@mui/material";
import AdminInWork from "./AdminInWork/AdminInWork";
import AdminHistory from "./AdminHistory/AdminHistory";
import {useDispatch, useSelector} from "react-redux";
import {fetchOrders} from "../../store/orders/actions";
import {selectCouriers} from "../../store/couriers/selector";
import {selectOrders} from "../../store/orders/selector";
import {fetchCouriers} from "../../store/couriers/actions";
import {AdminMenu} from "../AdminMenu/AdminMenu";
import {Chat} from "../Chat/Chat";
import TemporaryDrawer from "../../utils/Menu";
import {CouriersOperation} from "./CouriersOperation/CouriersOperation";
import {CourierRegistration} from "./CourierRegistration/CourierRegistration";

export const AdminTable = () => {
  const [option, setOption] = useState('0');

  const onMenuItemClick = (option) => {
    setOption(option);
  };

  const dispatch = useDispatch();
  useEffect((event) => {
    console.log('useEffect')
    dispatch(fetchOrders());
    dispatch(fetchCouriers());
  }, []);

  const orders = useSelector(selectOrders)
  // console.log('state', orders)
  const couriers = useSelector(selectCouriers)
  // console.log('state couriers', couriers)

  const renderOptionalComponent = (option) => {
    switch (option) {
      case '1':
        return <Chat/>;
      case '2':
        return <MyMap  name={"Местонахождение курьеров"} couriers={couriers} orders={orders} />;
      case '3':
        return <CouriersOperation/>;
      case '4':
        return <CourierRegistration/>;
      default:
        return (
            <>
              <AdminInWork/>
              <hr/>
              <AdminHistory/>
            </>
        );
    }
  };

  return (
    <Box sx={{width: '100%', typography: 'body1'}}>
      <TemporaryDrawer menuContent={AdminMenu} onClick={onMenuItemClick}/>
        {renderOptionalComponent(option)}
    </Box>
  );





}

