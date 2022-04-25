import {useState} from 'react';
import {Box, TextField, Button, Typography} from '@mui/material';

import ModalWindow from "../ModalWindow/ModalWindow";
import {useDispatch, useSelector} from "react-redux";
import {changeCourier} from "../../store/couriers/actions";
import {selectRequestCouriers} from "../../store/couriers/selector";
import ErrorWindow from "../ErrorWindow/ErrorWindow";

const CourierRedactEdit = ({data, closeModal}) => {

    // console.log('CourierRedact', data);
    let [openError, setOpenError] = useState(false);

    const dispatch = useDispatch();
    const onChangeCourier = (courier_id, name, email) => {
        dispatch(changeCourier({id: courier_id, name: name, email: email}))
    };

    const couriersRequest = useSelector(selectRequestCouriers);

    const onClickHandle = () => {
        setOpenError(false);
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        // console.log('onClickHandle CourierRedactEdit', name);
        onChangeCourier(data.id, name, email);

        if (couriersRequest.error === null) {
            // console.log('couriersRequest.error', couriersRequest.error)
            closeEdit();
        } else {
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


    return (
        <>
            <Typography variant={'h5'} sx={{mb: 2}}>
                ID: {data.id}
            </Typography>
            <TextField sx={{mt: 1}}
                       fullWidth
                       required
                       id="name"
                       label="ФИО курьера"
                       defaultValue={data.name}
                       variant="standard"
            />

            <TextField sx={{mt: 1}}
                       fullWidth
                       required
                       id="email"
                       label="email курьера"
                       defaultValue={data.email}
                       variant="standard"
            />
            <Box sx={{pt: 5, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Button variant={'outlined'} onClick={closeEdit}>Отмена</Button>
                <Button variant={'contained'} onClick={onClickHandle}>Сохранить</Button>
            </Box>
            {openError
                ? <ModalWindow data={couriersRequest} component={ErrorWindow} openModal={openError}
                               closeModal={closeError}/>

                : null
            }
        </>
    );
};

export default CourierRedactEdit;