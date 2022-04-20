import { useState } from 'react';
import { Typography, Box} from '@mui/material';
import {MyButtonContained} from "../Button/button";
import ModalWindow from "../ModalWindow/ModalWindow";
import CourierRedactEdit from "./CourierRedactEdit";
import CourierRedactDelete from "./CourierRedactDelete";

const CourierRedact = ({data, closeModal}) => {

    // console.log('CourierRedact', data);
    let [openEdit, setOpenEdit] = useState(false);
    let [openDel, setOpenDel] = useState(false);

    const onClickHandleRedact = () => {
        setOpenEdit(true);
        // console.log('onClickHandle CourierRedact');
    };

    const onClickHandleDelete = () => {
        setOpenDel(true);
        // console.log('onClickHandleDelete ', openDel);
    };

    const closeModalEdit = () => {
        setOpenEdit(false);
        // console.log('CloseModal CourierRedact',  openEdit);
        closeModal();
    };

    const closeModalDel = () => {
        setOpenDel(false);
        // console.log('closeModalDel CourierRedact',  openDel);
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
                                       onClick={onClickHandleRedact}
                    />
                    <MyButtonContained text={'Удалить'}
                                       color = 'error'
                                       onClick={onClickHandleDelete}//{onDeleteCourier}
                                       disabled={(data.user_status_id === 3) ? true : false}
                    />
                </Box>
                {openEdit ? (
                    <ModalWindow data={data} component={CourierRedactEdit} openModal={openEdit} closeModal={closeModalEdit}/>
                ) : openDel ? (
                    <ModalWindow data={data} component={CourierRedactDelete} openModal={openDel} closeModal={closeModalDel}/>
                ) : null}
            </Box>

        </>
    );
};

export default CourierRedact;