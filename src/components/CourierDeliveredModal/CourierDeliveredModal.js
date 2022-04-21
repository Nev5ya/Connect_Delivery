import React, { useState } from 'react';
import {Typography, Box, CircularProgress} from '@mui/material';
import {MyButtonContained, MyButtonOutlined} from "../Button/button";
import ModalWindow from "../ModalWindow/ModalWindow";

import {useDispatch, useSelector} from "react-redux";
import {selectRequestOrders} from "../../store/orders/selector";

import {changeOrder} from "../../store/orders/actions";
import {REQUEST_STATUS} from "../../utils/constants";
import ErrorWindow from "../ErrorWindow/ErrorWindow";
import SuccessModal from "../SuccessModal/SuccessModal";

const CourierDeliveredModal = ({data={}, closeModal}) => {

    const ordersRequest = useSelector(selectRequestOrders);
    console.log('CourierOrder CourierDeliveredModal', data, ordersRequest)
    let [openRequestModal, setOpenRequestModal] = useState(false);
    let [currentOrder, setCurrentOrder] = useState({});

    /////изменение статуса заказа на Доставлено//
    const dispatch = useDispatch();
    const onChangeDelivered = () => {
        dispatch(changeOrder({id: data.id, order_status_id: 3 }));
    };

    const onClickHandle = () => {
        // console.log('onClickHandle CourierDeliveredModal');
        onChangeDelivered();
        setCurrentOrder({
            id: data.id,
            name: data.name,
            delivery_date: data.delivery_date,
            address: data.address})

            setOpenRequestModal(true);
    };

    const renderModal = () => {
        // console.log('renderModal', openRequestModal, ordersRequest)
        if (!openRequestModal) {
            return null;
        };

        switch (ordersRequest.status) {
            case REQUEST_STATUS.PENDING: {
                return <CircularProgress/>
            };
            case REQUEST_STATUS.FAILURE: {
                return <ModalWindow
                    data={ordersRequest}
                    component={ErrorWindow}
                    openModal={openRequestModal}
                    closeModal={closeModal}
                />
            };
            case REQUEST_STATUS.SUCCESS: {
                return <ModalWindow
                    openModal
                    data={`Заказ ${currentOrder.id} ${currentOrder.name} - доставлен`}
                    component={SuccessModal}
                    closeModal={closeModal}
                />
            };
            default:
                return <></>
        };
    };

    return (
        <>
            <Box>
                <Typography variant='h6' component='h2'>
                    Название доставки: {data.name} ID: {data.id}
                </Typography>
                <Typography sx={{ pt: 1 }}>
                    Доставить до: {data.delivery_date}
                </Typography>
                <Typography sx={{ pt: 1 }}>
                    Адрес доставки: {data.address}
                </Typography>
                <Typography sx={{ pt: 2 }} variant='h5' component='h2'>
                    Перевести статус заказа в "Доставлено"?
                </Typography>
                <Box  sx={{ pt: 5, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <MyButtonContained  text={'Да, доставлено'} onClick={onClickHandle}/>
                    <MyButtonOutlined text={'Отмена'} onClick={closeModal}/>
                </Box>
            </Box>
            {renderModal()}
        </>
    );


};

export default CourierDeliveredModal;