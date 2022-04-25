import {useState} from "react";

import {List, ListItemButton, ListItemIcon, Typography} from '@mui/material';

import {iconCourierStatus} from "../../utils/constants";
import ModalWindow from "../ModalWindow/ModalWindow";
import CourierRedact from "../CourierRedact/CourierRedact";

export const CouriersList = ({name, couriers, status_id}) => {

    /////Флаг открытия/закрытия модального окна//
    let [openModal, setOpenModal] = useState(false);
    const closeModal = () => {
        setOpenModal(false);
        // console.log('CloseModal CouriersList',  openModal);
    };

    /////Записываем курьера, на котором произведен клик и открывается модальное окно//
    let [courierCurrent, setCourierCurrent] = useState(null);
    const onClickHandle = (courier, event) => {
        setCourierCurrent(courier);
        setOpenModal(true);
        // console.log('onClickHandle CouriersList', courier, openModal, event);
    };

    return (
        <>
            <Typography sx={{mb: 1}} variant="h5">
                {name}
            </Typography>
            <List>
                {couriers.map((courier) =>
                    <ListItemButton
                        key={courier.id}
                        onClick={(event) => onClickHandle(courier, event)}
                    >
                        <ListItemIcon sx={{mx: -2}}>
                            {iconCourierStatus(status_id)}
                        </ListItemIcon>
                        {courier.name} ID:{courier.id}
                    </ListItemButton>)}
            </List>
            {openModal ? (
                <ModalWindow data={courierCurrent} component={CourierRedact} openModal={openModal}
                             closeModal={closeModal}/>
            ) : null}
        </>
    );
};