import Typography from '@mui/material/Typography';
import {Grid} from "@mui/material";
import * as React from "react";

export const Order = ({order}) => {
    console.log('order', order)
    return (
        <>

                <Grid container spacing={2} sx={{ p: 2 }}>
                    <Grid container spacing={1}>
                        <Grid item xs={6} sx={{ textAlign: 'right' }}>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                ID:
                            </Typography>
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'left' }}>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                {order.id}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item xs={6} sx={{ textAlign: 'right' }}> Наименование товара:</Grid>
                        <Grid item xs={6} sx={{ textAlign: 'left' }}>{order.name}</Grid>
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item xs={6} sx={{ textAlign: 'right' }}>Адрес доставки:</Grid>
                        <Grid item xs={6} sx={{ textAlign: 'left' }}> {order.address}</Grid>
                    </Grid>

                    <Grid container spacing={1}>
                        <Grid item xs={6} sx={{ textAlign: 'right' }}>Комментарий:</Grid>
                        <Grid item xs={6} sx={{ textAlign: 'left' }}>{order.comment}</Grid>
                    </Grid>

                </Grid>


        </>

)
}
export default Order