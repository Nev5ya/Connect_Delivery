import {Typography, Box, FormControl, NativeSelect, InputLabel, CircularProgress, Button} from '@mui/material';

import {useDispatch, useSelector} from "react-redux";
import {changeOrder} from "../../store/orders/actions";
import {selectCouriersByStatus} from "../../store/couriers/selector";
import React, {useState} from "react";
import {REQUEST_STATUS} from "../../utils/constants";
import ModalWindow from "../ModalWindow/ModalWindow";
import ErrorWindow from "../ErrorWindow/ErrorWindow";
import SuccessModal from "../SuccessModal/SuccessModal";
import {selectRequestOrders} from "../../store/orders/selector";

const OrderAppointmentCourierModal = ({data, closeModal}) => {
    // console.log('OrderAppointmentCourierModal', data);
    const ordersRequest = useSelector(selectRequestOrders);

    const couriersOnline = useSelector((state) => selectCouriersByStatus(state, 2));
    const couriersOnlineAndNull = [...couriersOnline, {id: -1, name: 'Не назначен'}]

    // let [openError, setOpenError] = useState(false);
    let [openModal, setOpenModal] = useState(false);
    let [currentCourierID, setCurrentCourierID] = useState(null);

    /////Вызов Редактировать курьера//
    const dispatch = useDispatch();
    const onChangeCourier = (event) => {
        // console.log('onChangeCourier ', event.target.value);
        setCurrentCourierID(event.target.value);
    };

    const onClickHandle = () => {
        // setOpenError(false);
        // console.log('onClickHandle OrderAppointmentCourierModal', currentCourierID);
        dispatch(changeOrder({id: data.id, order_status_id: 2, user_id: currentCourierID}));
        setOpenModal(true);
    };

    const renderModal = () => {
        if (!openModal) {
            return null;
        }
        // console.log('renderModal', openModal, ordersRequest)
        switch (ordersRequest.status) {
            case REQUEST_STATUS.PENDING: {
                return <CircularProgress/>
            }
                ;
            case REQUEST_STATUS.FAILURE: {
                return <ModalWindow
                    data={ordersRequest}
                    component={ErrorWindow}
                    openModal={openModal}
                    closeModal={closeModal}
                />
            }
                ;
            case REQUEST_STATUS.SUCCESS: {
                return <ModalWindow
                    openModal
                    data={`Курьер назначен на заказ: ${data.name}`}
                    component={SuccessModal}
                    closeModal={closeModal}
                />
            }
                ;
            default:
                return <></>
        }
        ;
    };


    return (
        <>
            <Box>
                <Typography variant='h4'>
                    {data.name} ID: {data.id}
                </Typography>
                <Typography sx={{mt: 4}}>
                    Доставить до: {data.delivery_date}
                </Typography>
                <Typography>
                    Адрес доставки: {data.address}
                </Typography>
                <Box sx={{mt: 6}}>
                    <FormControl fullWidth>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            ФИО курьера, назначаемого на заказ
                        </InputLabel>
                        <NativeSelect
                            defaultValue={-1}
                            onChange={(event) => onChangeCourier(event)}>
                            {couriersOnlineAndNull.map(item => (
                                <option
                                    key={item.id}
                                    value={item.id}
                                >{item.name}</option>
                            ))}
                        </NativeSelect>
                    </FormControl>
                </Box>
                <Box sx={{mt: 3, display:'flex'}}>
                    <Box sx={{flexGrow: 1}}/>
                    <Button variant={'contained'} onClick={onClickHandle}>Назначить курьера</Button>
                </Box>
            </Box>
            {renderModal()}
        </>
    );
};

export default OrderAppointmentCourierModal;