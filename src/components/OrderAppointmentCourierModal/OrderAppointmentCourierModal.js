import {Typography, Box, FormControl, NativeSelect, InputLabel, CircularProgress} from '@mui/material';
import {MyButtonContained} from "../Button/button";
import {useDispatch, useSelector} from "react-redux";
import {changeOrder} from "../../store/orders/actions";
import {selectCouriersByStatus, selectRequestCouriers} from "../../store/couriers/selector";
import React, {useState} from "react";
import {REQUEST_STATUS} from "../../utils/constants";
import ModalWindow from "../ModalWindow/ModalWindow";
import ErrorWindow from "../ErrorWindow/ErrorWindow";
import SuccessModal from "../SuccessModal/SuccessModal";
import {selectRequestOrders} from "../../store/orders/selector";

const OrderAppointmentCourierModal = ({data, closeModal}) => {
    console.log('OrderAppointmentCourierModal', data);
    const ordersRequest = useSelector(selectRequestOrders);

    const couriersOnline = useSelector((state) => selectCouriersByStatus(state, 2));
    const couriersOnlineAndNull = [...couriersOnline, {id: -1, name: 'Не назначен'}]

    let [openError, setOpenError] = useState(false);
    let [openModal, setOpenModal] = useState(false);
    let [currentCourierID, setCurrentCourierID] = useState(null);

    /////Вызов Редактировать курьера//
    const dispatch = useDispatch();
    const onChangeCourier = (event) => {
        console.log('onChangeCourier ', event.target.value);
        setCurrentCourierID ( event.target.value);

    };

    const onClickHandle = () => {
        setOpenError(false);
        console.log('onClickHandle OrderAppointmentCourierModal', currentCourierID);

        dispatch(changeOrder({id: data.id, order_status_id: 2, user_id: currentCourierID}));

        setOpenModal(true);

    };

    const renderModal = () => {
        if (!openModal) {
            return null;
        }
        console.log('renderModal', openModal, ordersRequest)
        switch (ordersRequest.status) {
            case REQUEST_STATUS.PENDING: {
                return <CircularProgress/>
            }
            case REQUEST_STATUS.FAILURE: {
                return <ModalWindow
                    data={ordersRequest}
                    component={ErrorWindow}
                    openModal={openModal}
                    closeModal={closeModal}
                />
            }
            case REQUEST_STATUS.SUCCESS: {
                return <ModalWindow
                    openModal
                    data={`Курьер назначен на заказ: ${data.name}`}
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
                    Название доставки: {data.name} ID: {data.id}
                </Typography>
                <Typography sx={{ pt: 1 }}>
                    Доставить до: {data.delivery_date}
                </Typography>
                <Typography sx={{ pt: 2 }}>
                    Адрес доставки: {data.address}
                </Typography>
                <Box sx={{ pt: 2 }}>
                    <FormControl fullWidth >
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            ФИО курьера, назначаемого на заказ
                        </InputLabel>
                        <NativeSelect
                            defaultValue={-1}
                            onChange={(event) => onChangeCourier(event)}>
                            { couriersOnlineAndNull.map(item => (
                                <option
                                    key={item.id}
                                    value={item.id}
                                >{item.name}</option>
                            ))}
                            </NativeSelect>
                    </FormControl>
                </Box>
            <Box sx={{ pt: 3 }}>
                    <MyButtonContained  text={'Назначить курьера'} onClick={onClickHandle}/>
                </Box>
            </Box>
            {renderModal()}
        </>
    );
};

export default OrderAppointmentCourierModal;