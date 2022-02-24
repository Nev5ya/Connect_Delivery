import Typography from '@mui/material/Typography';
import MyMap from "../Map/map";
import {Grid} from "@mui/material";
import Paper from "@mui/material/Paper";

export const Order = ({order}) => {
    console.log('order', order)
    return (
        <>

                <Grid container spacing={2}

                      >
                    <Grid item
                          textAlign="right"


                          >
                        <Typography gutterBottom variant="subtitle1" component="div">
                            Номер заказа:
                        </Typography>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                        Адрес доставки:
                        </Typography>
                        <Typography variant="body2" >
                            Наименование товара:
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Комментарий:
                        </Typography>

                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs textAlign="left">
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    {order.id}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" gutterBottom>
                                {order.address}
                                </Typography>
                                <Typography variant="body2" >
                                    {order.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {order.description}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>


        </>

)
}
export default Order