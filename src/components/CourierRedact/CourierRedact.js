import { useState } from 'react';
import { Typography, Box, Button} from '@mui/material';

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
                <Typography variant='h4' sx={{pt:1, pb:2}}>
                   {data.name}
                </Typography>
                <Typography>ID: {data.id}</Typography>
                <Typography>email: {data.email}</Typography>
                <Box sx={{ pt: 4, display: 'flex', justifyContent: 'space-between'}}>
                    <Button variant={'outlined'} onClick={onClickHandleDelete} disabled={data.user_status_id === 3}>Удалить</Button>
                    <Button variant={'contained'} onClick={onClickHandleRedact}>Редактировать</Button>

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