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
import {Route} from "react-router-dom";

export const AdminTable = (props) => {

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


  return (
<>
        <Typography sx={{mt: 4}} variant='h4' component='h2'>Стас Администратор

      {props.children}
        </Typography>
</>
  );





}

