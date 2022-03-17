import { useState } from 'react';
import {Typography, Box, Button, TextField} from '@mui/material';
import {MyButtonContained, MyButtonOutlined} from "../Button/button";
import ModalWindow from "../ModalWindow/ModalWindow";
import {useDispatch} from "react-redux";
import {changeOrder} from "../../store/orders/actions";
import {changeCourier, deleteCourier} from "../../store/couriers/actions";

const CourierRedactEdit = ({data, closeModal}) => {

    console.log('CourierRedact', data);
    // let [openEdit, setOpenEdit] = useState(false);

    const dispatch = useDispatch();
    const onChangeCourier = (courier_id, name, email) => {
        dispatch(changeCourier(courier_id, name, email))
    };


    const onClickHandle = () => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        console.log('onClickHandle CourierRedactEdit', name);
        onChangeCourier(data.id, name, email)
        closeEdit();
        // setOpenEdit(!openEdit);
    };
    const closeEdit = () => {
        closeModal();
    };

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                <TextField
                     disabled
                     id="id"
                     label="ID курьера"
                     defaultValue={data.id}
                     variant="standard"
                />
                <TextField sx={{ mt: 1 }}
                    required
                    id="name"
                    label="ФИО курьера"
                    defaultValue={data.name}
                    variant="standard"
                />

                <TextField sx={{ mt: 1 }}
                    required
                    id="email"
                    label="email курьера"
                    defaultValue={data.email}
                    variant="standard"
                />
                <Box sx={{ pt: 5, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <MyButtonContained text={'Сохранить'} onClick={onClickHandle}/>
                    <MyButtonOutlined text={'Отмена'} onClick={closeEdit}/>
                </Box>
            </Box>

        </>
    );
};

export default CourierRedactEdit;