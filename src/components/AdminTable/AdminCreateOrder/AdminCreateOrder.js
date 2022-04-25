import * as React from 'react';
import {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {CircularProgress, Stack, Button} from "@mui/material";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import {Box} from "@mui/system";
import {createOrder} from "../../../store/orders/actions";
import {REQUEST_STATUS} from "../../../utils/constants";
import ModalWindow from "../../ModalWindow/ModalWindow";
import ErrorWindow from "../../ErrorWindow/ErrorWindow";
import SuccessModal from "../../SuccessModal/SuccessModal";
import {selectRequestOrders} from "../../../store/orders/selector";

export const AdminCreateOrder = () => {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [deliveryDate, setDeliveryDate] = useState('');
    const [comment, setComment] = useState('');

    const [formVisible, setFormVisible] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false)

    const ordersRequest = useSelector(selectRequestOrders);
    const dispatch = useDispatch();

    const [autoFocus, setAutoFocus] = useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handleDeliveryDateChange = (e) => {
        setDeliveryDate(e.target.value);
    };

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const onRegisterOrderClick = () => {
        dispatch(createOrder(orderData));
        setOpenModal(true);
        showOrderCreationForm();
    };

    const showOrderCreationForm = () => {
        setFormVisible((formVisible) => formVisible = !formVisible);
        setButtonDisabled(!buttonDisabled);
        setAutoFocus(true);
    }

    let [openModal, setOpenModal] = useState(false);
    const closeModal = () => {
        setOpenModal(false);
    };

    const orderData = {
        name: name,
        address: address,
        delivery_date: deliveryDate,
        order_status_id: 1,
        user_id: null,
        comment: comment
    };

    const renderModal = () => {
        if (!openModal) {
            return null;
        }
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
                    data={`Новый заказ ${name} создан`}
                    component={SuccessModal}
                    closeModal={closeModal}
                />
            }
        }
    };


    return (
        <>
            <Stack sx={{mt: 4, mb: 2}} spacing={2} direction='row'>
                <Button
                    variant={'contained'}
                    disabled={buttonDisabled}
                    onClick={showOrderCreationForm}
                >
                    Новый заказ
                </Button>
            </Stack>

            {formVisible &&
                <Box component="form"
                     sx={{display: 'flex', flexDirection: 'column', width: '100%', maxWidth: 500}}>
                    <Typography variant='h6' component='h2' sx={{mb: 2}}>Создание нового заказа</Typography>

                    <TextField sx={{mb: 2}}
                               required
                               id="name-input"
                               label="Наименование"
                               onChange={handleNameChange}
                               autoFocus={autoFocus}
                    />

                    <TextField sx={{mb: 2}}
                               required
                               id="address-input"
                               label="Адрес доставки"
                               onChange={handleAddressChange}
                    />

                    <TextField sx={{mb: 2}}
                               required
                               id="delivery-date-input"
                               label="Доставить до (в формате 'YYYY-MM-DD')"
                               onChange={handleDeliveryDateChange}
                    />

                    <TextField sx={{mb: 2}}
                               id="comment-input"
                               label="Комментарий к заказу"
                               multiline
                               rows={4}
                               onChange={handleCommentChange}
                    />
                    <Box sx={{mb: 4, display: 'flex'}}>
                        <Button variant={'contained'} onClick={showOrderCreationForm}>Отменить</Button>
                        <Box sx={{p:1}}/>
                        <Button variant={'contained'} onClick={onRegisterOrderClick}>Создать заказ</Button>
                    </Box>
                </Box>
            }
            {renderModal()}
        </>
    );
};