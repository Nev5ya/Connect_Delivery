import React, { useState } from 'react';
import {Typography, Box, Button, TextField, CircularProgress} from '@mui/material';
import {MyButtonContained, MyButtonOutlined} from "../Button/button";
import ModalWindow from "../ModalWindow/ModalWindow";
import {useDispatch, useSelector} from "react-redux";
import {changeOrder} from "../../store/orders/actions";
import {changeCourier, deleteCourier} from "../../store/couriers/actions";
import {selectCouriersByStatus, selectRequestCouriers} from "../../store/couriers/selector";
import ErrorWindow from "../ErrorWindow/ErrorWindow";
import {REQUEST_STATUS} from "../../utils/constants";
import SuccessModal from "../SuccessModal/SuccessModal";

const CourierRedactDelete = ({data, closeModal}) => {
    const couriersRequest = useSelector(selectRequestCouriers);
    console.log('CourierRedactDelete', data);
    let [openError, setOpenError] = useState(false);

    const dispatch = useDispatch();
    const onDeleteCourier = () => {
        dispatch(deleteCourier(data.id));
    };


    const onClickHandle = () => {
        setOpenError(false);
        console.log('onClickHandle CourierRedactDelete', data.id);
        onDeleteCourier();

        if (couriersRequest.error === null) {
            console.log('couriersRequest.error', couriersRequest.error)
            closeEdit();
        }
        else {
            setOpenError(true);
        }
    };
    const closeEdit = () => {
        closeModal();
    };

    const closeError = () => {
        setOpenError(false);
        console.log('CloseModal closeError',  openError);
    };

    const renderModal = () => {
        if (!openError) {
            return null;
        }
        console.log('renderModal', openError, couriersRequest)
        switch (couriersRequest.status) {
            case REQUEST_STATUS.PENDING: {
                return <CircularProgress/>
            }
            case REQUEST_STATUS.FAILURE: {
                return <ModalWindow
                    data={couriersRequest}
                    component={ErrorWindow}
                    openModal={openError}
                    closeModal={closeError}
                />
            }
            case REQUEST_STATUS.SUCCESS: {
                return <></>
            }
        }
    };


    return (
        <>
             <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                 <Typography variant='h6' component='h2'>
                     Вы уверены, что хотите удалить курьера:
                 </Typography>
                 <Typography variant='h8' component='h2'>
                     ФИО курьера: {data.name}
                 </Typography>
                 <Typography sx={{ pt: 1 }}>ID: {data.id}</Typography>
                 <Typography sx={{ pt: 1 }}>email: {data.email}</Typography>
                    <Box sx={{ pt: 5, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <MyButtonContained text={'Удалить'} color = 'error' onClick={onClickHandle}/>
                        <MyButtonOutlined text={'Отмена'} onClick={closeEdit}/>
                    </Box>
                 </Box>
            {renderModal()}
        </>
    );
};

export default CourierRedactDelete;