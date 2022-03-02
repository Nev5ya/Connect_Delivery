import Typography from '@mui/material/Typography';
import MyMap from "../Map/map";
import {Grid} from "@mui/material";
import Paper from "@mui/material/Paper";
import * as React from "react";

export const CourierOrder = ({order}) => {
    return (
        <>
            <Grid container sx={{p: 2}}>
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
                    <Grid item xs={8} sx={{textAlign: 'left'}}>{order.description}</Grid>
                </Grid>
            </Grid>
        </>

    )
}
export default CourierOrder