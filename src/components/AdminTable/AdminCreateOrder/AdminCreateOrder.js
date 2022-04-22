import * as React from 'react';
import {useState} from 'react';
import {useDispatch} from "react-redux";
import {Stack} from "@mui/material";
import {MyButtonContained} from "../../Button/button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import {Box} from "@mui/system";
import {registrOrder} from "../../../store/orders/actions";


export const AdminCreateOrder = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [deliveryDate, setDeliveryDate] = useState('');
    const [comment, setComment] = useState('');
    const [formVisible, setFormVisible] = useState(false);

    const dispatch = useDispatch();

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
        dispatch(registrOrder(orderData));
        showOrderCreationForm();
    };

    const showOrderCreationForm = () => {
        setFormVisible((formVisible) => formVisible = !formVisible)
    }

    const orderData = {
        name: name,
        address: address,
        delivery_date: deliveryDate,
        order_status_id: 1,
        user_id: null,
        comment: comment
    };

    return (
        <>
            <Stack sx={{mt: 4, mb: 2}} spacing={2} direction='row'>
                <MyButtonContained
                    disabled={false}
                    sx={{cursor: 'pointer'}}
                    text={'Новый заказ'}
                    onClick={showOrderCreationForm}
                />
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

                    <MyButtonContained text={"Создать заказ"} onClick={onRegisterOrderClick}/>
                </Box>
            }
        </>
    );
};