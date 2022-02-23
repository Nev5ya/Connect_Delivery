import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import map from '../../../assets/order_map.png';
import './CourierOrder.css';

export default function CourierOrder() {
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
                    <Grid item xs={8} sx={{ textAlign: 'left' }}>046982</Grid>
                </Grid>

                <Grid container spacing={1}>
                    <Grid item xs={4} sx={{ textAlign: 'right' }}>Доставить до:</Grid>
                    <Grid item xs={8} sx={{ textAlign: 'left' }}>20 февраля, Пн, 18:30</Grid>
                </Grid>

                <Grid container spacing={1}>
                    <Grid item xs={4} sx={{ textAlign: 'right' }}>Адрес доставки:</Grid>
                    <Grid item xs={8} sx={{ textAlign: 'left' }}>119021, Москва, ул. Льва Толстого, 16</Grid>
                </Grid>

                <Grid container spacing={1}>
                    <Grid item xs={4} sx={{ textAlign: 'right' }}>Комментарий:</Grid>
                    <Grid item xs={8} sx={{ textAlign: 'left' }}>Розовые ворота с рюшечками, код домофона 2525,
                        при входе прокукарекать три раза и посмотреть на север.</Grid>
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