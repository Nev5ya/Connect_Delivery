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

const CourierDeliveredModal = ({order, closeModal}) => {

    const ordersRequest = useSelector(selectRequestOrders);
    console.log('CourierOrder', order, ordersRequest)
    let [openRequestModal, setOpenRequestModal] = useState(false);

    /////изменение статуса заказа на Доставлено//
    const dispatch = useDispatch();
    const onChangeDelivered = () => {
        dispatch(changeOrder({id: order.id, order_status_id: 3 }));
    };

    const onClickHandle = () => {
        setOpenRequestModal(false);
        console.log('onClickHandle CourierDeliveredModal');
        onChangeDelivered();

        if (ordersRequest.error === null) {
            console.log('ordersRequest.error', ordersRequest.error)
            closeModal();
        }
        else {
            setOpenRequestModal(true);
        }
    };

    const closeError = () => {
        setOpenRequestModal(false);
        console.log('CloseModal closeError',  openRequestModal);
    };

    const renderModal = () => {
        if (!openRequestModal) {
            return null;
        }
        console.log('renderModal', openRequestModal, ordersRequest)
        switch (ordersRequest.status) {
            case REQUEST_STATUS.PENDING: {
                return <CircularProgress/>
            }
            case REQUEST_STATUS.FAILURE: {
                return <ModalWindow
                    data={ordersRequest}
                    component={ErrorWindow}
                    openModal={openRequestModal}
                    closeModal={closeModal}
                />
            }
            case REQUEST_STATUS.SUCCESS: {
                return <ModalWindow
                    openModal
                    data={`Заказ ${order.id} ${order.name} - доставлен`}
                    component={SuccessModal}
                    closeModal={closeModal}
                />
            }
        }
    };

    return (
        <>
            <Box>
                <Typography variant='h6' component='h2'>
                    Название доставки: {order.name} ID: {order.id}
                </Typography>
                <Typography sx={{ pt: 1 }}>
                    Доставить до: {order.delivery_date}
                </Typography>
                <Typography sx={{ pt: 2 }}>
                    Адрес доставки: {order.address}
                </Typography>
                <Typography variant='h4' component='h2'>
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