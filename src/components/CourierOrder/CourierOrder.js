import {Box, CircularProgress, Grid} from "@mui/material";
import * as React from "react";
import {MyButtonContained, MyButtonOutlined} from "../Button/button";
import Stack from "@mui/material/Stack";
import {useDispatch, useSelector} from "react-redux";
import {changeOrder} from "../../store/orders/actions";
import Typography from "@mui/material/Typography";
import {changeCourier} from "../../store/couriers/actions";
import {REQUEST_STATUS} from "../../utils/constants";
import ModalWindow from "../ModalWindow/ModalWindow";
import ErrorWindow from "../ErrorWindow/ErrorWindow";
import SuccessModal from "../SuccessModal/SuccessModal";
import {useState} from "react";
import {selectRequestOrders} from "../../store/orders/selector";
import CourierRedact from "../CourierRedact/CourierRedact";
import CourierDeliveredModal from "../CourierDeliveredModal/CourierDeliveredModal";


export const CourierOrder = ({order}) => {

    let [openModal, setOpenModal] = useState(false);
    const closeModal = () => {
        setOpenModal(false);
    };

    const onClickHandle = () => {
        console.log('onClickHandle CourierOrder');
        setOpenModal(true);
    };


    return (
        <>
            <Grid item xs={6} sx={{border: 1, borderColor: 'grey.500', borderRadius: 2}}>
                    <Stack direction="column" justifyContent="space-between" style={{height: '100%'}}>
                        {order
                            ?<Grid container sx={{p: 2}}>
                                <Grid container spacing={2}>
                                    <Grid item xs={4} sx={{textAlign: 'right'}}>ID:</Grid>
                                    <Grid item xs={8} sx={{textAlign: 'left'}}>{order.id}</Grid>
                                </Grid>
                                <Grid container spacing={2}>
                                    <Grid item xs={4} sx={{textAlign: 'right'}}>Название заказа:</Grid>
                                    <Grid item xs={8} sx={{textAlign: 'left'}}>{order.name}</Grid>
                                </Grid>
                                <Grid container spacing={2}>
                                    <Grid item xs={4} sx={{textAlign: 'right'}}>Адрес доставки:</Grid>
                                    <Grid item xs={8} sx={{textAlign: 'left'}}> {order.address}</Grid>
                                </Grid>
                                <Grid container spacing={2}>
                                    <Grid item xs={4} sx={{textAlign: 'right'}}>Комментарий:</Grid>
                                    <Grid item xs={8} sx={{textAlign: 'left'}}>{order.comment}</Grid>
                                </Grid>
                                <Grid container spacing={2}>
                                    <Grid item xs={4} sx={{textAlign: 'right'}}>Статус:</Grid>
                                    <Grid item xs={8} sx={{textAlign: 'left'}}>{order.order_status_id} - {order.status} </Grid>
                                </Grid>
                                <Stack sx={{p: 2, mt: 4}} display="flex" direction="row" justifyContent="space-between" width="100%">
                                    {(order.order_status_id === 3)
                                        ?<MyButtonContained
                                            disabled={true}
                                            sx={{cursor: 'pointer'}}
                                            text={'Доставлено'}
                                            onClick={onClickHandle}
                                        />
                                        :<MyButtonContained
                                            disabled={false}
                                            sx={{cursor: 'pointer'}}
                                            text={'Доставлено'}
                                            onClick={onClickHandle}
                                        />}
                                    <MyButtonOutlined sx={{cursor: 'pointer'}} text={'Перейти в чат'}/>
                                </Stack>
                            </Grid>
                            :<Box display="flex" justifyContent="center">
                                <Typography sx={{mt: 2, mb: 8}} variant="h6" component="div" >
                                    Назначенные заказы отсутствуют
                                </Typography>
                            </Box>
                        }
                    </Stack>
                </Grid>
            {openModal ? (
                <ModalWindow data={order} component={CourierDeliveredModal} openModal={openModal} closeModal={closeModal}/>
            ) : null}
        </>
    );
};
export default CourierOrder;