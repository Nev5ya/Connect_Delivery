import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import {iconCourierStatus} from "../../utils/constants";
import {useState} from "react";
import ModalWindow from "../ModalWindow/ModalWindow";
import CourierRedact from "../CourierRedact/CourierRedact";

export const CouriersList = ({name, couriers, status_id}) => {

    /////Флаг открытия/закрытия модального окна//
    let [openModal, setOpenModal] = useState(false);
    const closeModal = () => {
        setOpenModal(false);
        console.log('CloseModal CouriersList',  openModal);
    };

    /////Записываем курьера, на котором произведен клик и открывается модальное окно//
    let [courierCurrent, setCourierCurrent] = useState(null);
    const onClickHandle = (courier, event) => {
        setCourierCurrent(courier);
        setOpenModal(true);
        console.log('onClickHandle CouriersList', courier, openModal, event);
    };

    return (
        <div >
            <Typography sx={{mt: 3}} variant="h6" component="div">
                {name}
            </Typography>
            <List style={{display: "flex", flexDirection: "column"}}>
                {couriers.map((courier) =>
                    <ListItem
                          sx={{'&:hover': {color:'green', cursor: 'pointer'}}}
                          key={courier.id}
                          onClick={(event) => onClickHandle(courier, event)}
                    >
                        <ListItemIcon>
                            {iconCourierStatus(status_id)}
                        </ListItemIcon>
                        {courier.name} ID:{courier.id}
                    </ListItem>)}
            </List>
            {openModal ? (
                <ModalWindow data={courierCurrent} component={CourierRedact} openModal={openModal} closeModal={closeModal}/>
            ) : null}
        </div>
    );
};