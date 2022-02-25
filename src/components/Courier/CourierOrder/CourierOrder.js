import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import map from '../../../assets/order_map.png';
import '../../CouriersPage/CourierOrder.css';

export default function CourierOrder({order}) {
    return (
        <Grid container columnSpacing={{ xs: 2 }}>
            <Grid item xs={12}>
                <Typography variant="h3" component="div" gutterBottom>
                    Вася Побегайло
                    <span className="courier-status"></span>
                </Typography>
            </Grid>
            <Grid item xs={7} sx={{ border: 1, borderColor: 'grey.500', p: 2 }}>
                <Grid container spacing={1}>
                    <Grid item xs={4} sx={{ textAlign: 'right' }}>ID:</Grid>
                    <Grid item xs={8} sx={{ textAlign: 'left' }}>{order.id}</Grid>
                </Grid>

                <Grid container spacing={1}>
                    <Grid item xs={4} sx={{ textAlign: 'right' }}> Наименование товара:</Grid>
                    <Grid item xs={8} sx={{ textAlign: 'left' }}>{order.name}</Grid>
                </Grid>

                <Grid container spacing={1}>
                    <Grid item xs={4} sx={{ textAlign: 'right' }}>Адрес доставки:</Grid>
                    <Grid item xs={8} sx={{ textAlign: 'left' }}> {order.address}</Grid>
                </Grid>

                <Grid container spacing={1}>
                    <Grid item xs={4} sx={{ textAlign: 'right' }}>Комментарий:</Grid>
                    <Grid item xs={8} sx={{ textAlign: 'left' }}>{order.description}</Grid>
                </Grid>
            </Grid>
            <Grid item xs={5}>
                <img
                    className="img-fluid"
                    src={map}
                    alt='Order map'
                />
            </Grid>
        </Grid>
    );
};