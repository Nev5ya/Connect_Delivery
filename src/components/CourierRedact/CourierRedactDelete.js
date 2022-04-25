import React, { useState } from 'react';

import {Typography, Box, CircularProgress, Button} from '@mui/material';
import ModalWindow from "../ModalWindow/ModalWindow";
import {useDispatch, useSelector} from "react-redux";
import { deleteCourier} from "../../store/couriers/actions";
import { selectRequestCouriers} from "../../store/couriers/selector";
import ErrorWindow from "../ErrorWindow/ErrorWindow";
import {REQUEST_STATUS} from "../../utils/constants";

const CourierRedactDelete = ({data, closeModal}) => {
    const couriersRequest = useSelector(selectRequestCouriers);
    // console.log('CourierRedactDelete', data);
    let [openError, setOpenError] = useState(false);

    const dispatch = useDispatch();
    const onDeleteCourier = () => {
        dispatch(deleteCourier(data.id));
    };

    const onClickHandle = () => {
        setOpenError(false);
        // console.log('onClickHandle CourierRedactDelete', data.id);
        onDeleteCourier();

        if (couriersRequest.error === null) {
            // console.log('couriersRequest.error', couriersRequest.error)
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
        // console.log('CloseModal closeError',  openError);
    };

    const renderModal = () => {
        if (!openError) {
            return null;
        }
        // console.log('renderModal', openError, couriersRequest)
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
                 <Typography>
                     Вы уверены, что хотите удалить учетную запись ID {data.id}?
                 </Typography>
                 <Typography variant='h4' sx={{my: 2}}>
                     {data.name}
                 </Typography>
                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                        <Button variant={'outlined'} onClick={closeEdit}>Отмена</Button>
                        <Button variant={'contained'} onClick={onClickHandle}>Удалить</Button>
                    </Box>
                 </Box>
            {renderModal()}
        </>
    );
};

export default CourierRedactDelete;