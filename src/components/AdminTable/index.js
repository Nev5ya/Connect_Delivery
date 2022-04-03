import * as React from 'react';
import {useEffect} from 'react';
import MyMap from "../Map/map.js";
import {useDispatch, useSelector} from "react-redux";
import {getOrders} from "../../store/orders/actions";
import {selectCouriers} from "../../store/couriers/selector";
import {selectOrders} from "../../store/orders/selector";
import {getCouriers} from "../../store/couriers/actions";
import {Chat} from "../Chat/Chat";
import {CouriersOperation} from "../AdminTable/CouriersOperation/CouriersOperation";
import {CourierRegistration} from "../AdminTable/CourierRegistration/CourierRegistration";
import {Route, Routes} from "react-router-dom";
import {AdminHeader} from "./AdminHeader/AdminHeader";
import {AdminMain} from "./AdminMain/AdminMain";

export const AdminTable = () => {

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
        <AdminHeader/>

        <Routes>
            <Route index element={<AdminMain />} />
            <Route path="Chat" element={<Chat  mode="Admin" />} />
            <Route path="MyMap" element={<MyMap  name={"Местонахождение курьеров и заказов"} couriers={couriers} orders={orders} />} />
            <Route path="CouriersOperation" element={<CouriersOperation />} />
            <Route path="CourierRegistration" element={<CourierRegistration />} />
        </Routes>

      </>
  );
};

