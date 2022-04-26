import {Route, Routes} from "react-router-dom";
import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getOrders} from "../../store/orders/actions";
import {selectCouriers} from "../../store/couriers/selector";
import {selectOrders} from "../../store/orders/selector";
import {getCouriers} from "../../store/couriers/actions";

import {Dashboard} from "./Dashboard";
import {Statistic} from "./Statistic";
import {MenuChiefPageHeader} from "./MenuChiefPageHeader";

export const ChiefAnalytics = () => {

    //ToDo: Раскостылить. Получаем из стора от другого имени, надо прямиком в компонент, минуя стор.

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrders());
        dispatch(getCouriers());
    }, [dispatch]);

    const orders = useSelector(selectOrders)
    const couriers = useSelector(selectCouriers)

    // fetch(`https://xn--l1aej.pw/api/admin/orders?auth-token=${localStorage.getItem("auth-token")}`)
    //     .then(response => {
    //         return response.json()
    //
    //     })
    //     .then(json => {
    //         console.log('ответ', json)
    //     })


    return (
        <>
            <MenuChiefPageHeader/>
            <Routes>
                <Route index element={<Dashboard orders={orders} couriers={couriers}/>}/>
                <Route path="statistic" element={<Statistic orders={orders} couriers={couriers}/>}/>
            </Routes>
        </>
    )
}
