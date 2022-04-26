import {Paper, Typography, Grid, Box} from "@mui/material";

export const Dashboard = ({orders, couriers}) => {

    const ordersInWork = orders.filter(el => el.order_status_id === 1)
    const couriersOnline = couriers.filter(el => el.user_status_id === 2)
    const ordersDelivered = orders.filter(el => el.order_status_id === 3)

    return (
        <>
            <Grid item xs={12}>
                <Paper elevation={0}>
                    <Grid container alignItems="center" gap={1}>
                        <Grid item xs={12}>
                            <Typography align="left" variant="h4" marginY={2}>
                                Дашборд
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Paper elevation={3}>
                                <Box sx={{p: 3}}>
                                    <Typography variant="h5" pb={1}>В обработке <strong>{ordersInWork.length}</strong> заказов</Typography>
                                    <Typography variant="h5">На
                                        линии <strong>{couriersOnline.length}</strong> курьер(а)</Typography>
                                    <Typography variant="h5" pt={1}>
                                        Доставлено <strong>{ordersDelivered.length}</strong> заказ(ов)
                                    </Typography>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </>
    )
}