import { useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import {MyButtonContained, MyButtonOutlined} from "../Button/button";
import ModalWindow from "../ModalWindow/ModalWindow";
import CourierRedactEdit from "./CourierRedactEdit";
import {deleteCourier} from "../../store/couriers/actions";
import {useDispatch} from "react-redux";

const CourierRedact = ({data, closeModal}) => {

    console.log('CourierRedact', data);
    let [openEdit, setOpenEdit] = useState(false);

    const dispatch = useDispatch();
    const onDeleteCourier = () => {
        dispatch(deleteCourier(data.id));
        closeModal();
    };

    const onClickHandle = () => {
        setOpenEdit(true);
        console.log('onClickHandle CourierRedact');
    };

    const closeModalEdit = () => {
        setOpenEdit(false);
        console.log('CloseModal CourierRedact',  openEdit);
        closeModal();
    };

    return (
        <>
            <Box>
                <Typography variant='h6' component='h2'>
                   ФИО курьера: {data.name}
                </Typography>
                <Typography sx={{ pt: 1 }}>ID: {data.id}</Typography>
                <Typography sx={{ pt: 1 }}>email: {data.email}</Typography>
                <Box sx={{ pt: 5, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <MyButtonContained text={'Редактировать'}
                                       onClick={onClickHandle}
                    />
                    <MyButtonContained text={'Удалить'}
                                       color = 'error'
                                       onClick={onDeleteCourier}
                                       disabled={(data.user_status_id === 3) ? true : false}
                    />
                </Box>
                {openEdit ? (
                    <ModalWindow data={data} component={CourierRedactEdit} openModal={openEdit} closeModal={closeModalEdit}/>
                ) : null}
            </Box>

        </>
    );
};

export default CourierRedact;