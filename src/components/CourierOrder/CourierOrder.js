import {Box, Grid} from "@mui/material";
import * as React from "react";
import {MyButtonContained, MyButtonOutlined} from "../Button/button";
import Stack from "@mui/material/Stack";
import {useDispatch} from "react-redux";
import {changeOrder} from "../../store/orders/actions";
import Typography from "@mui/material/Typography";
import {changeCourier} from "../../store/couriers/actions";

export const CourierOrder = ({order}) => {
    console.log('CourierOrder', order)

    /////изменение статуса заказа на Доставлено//
    const dispatch = useDispatch();
    const onChangeDelivered = () => {
        //dispatch(changeCourier({id: order.user_id, user_status_id: 2}));
        dispatch(changeOrder({id: order.id, order_status_id: 3 }));

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
                                            onClick={onChangeDelivered}
                                        />
                                        :<MyButtonContained
                                            disabled={false}
                                            sx={{cursor: 'pointer'}}
                                            text={'Доставлено'}
                                            onClick={onChangeDelivered}
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
        </>
    );
};
export default CourierOrder;