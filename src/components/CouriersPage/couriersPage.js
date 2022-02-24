import Typography from '@mui/material/Typography';
import MyMap from "../Map/map";
import Order from "../order/order";
import {currentOrder} from "../../utils/data";
import {useParams} from "react-router-dom";
import {getCurrentCourier, getOrderForCourier} from "../../utils/getData";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import {MyButtonContained, MyButtonOutlined} from "../Button/button";

 const CouriersPage = () => {
     const courierID = +useParams().id;

     const currentCourier = getCurrentCourier(courierID)
     const currentOrder = getOrderForCourier(courierID)
     console.log('courier',courierID, getCurrentCourier(courierID), getOrderForCourier(courierID), currentCourier[0].name)


     const Item = styled(Paper)(({ theme }) => ({
         backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
         ...theme.typography.body2,
         padding: theme.spacing(1),
         textAlign: 'center',
         color: theme.palette.text.secondary,
     }));

     return (
         <>
             <Stack direction="row" spacing={2}>

                 <Typography sx={{mt: 2, mb: 8}} variant="h6" component="div" >
                     {currentCourier[0].name} - {currentCourier[0].status}
                 </Typography>
                 <Typography sx={{mt: 2, mb: 8}} variant="h6" component="div">

                 </Typography>

             </Stack>
             <Stack direction="row" spacing={2}>
                 <Item>
                     <Order order={currentOrder[0]}/>
                     <Stack sx={{mt: 2, mb: 5}} spacing={5} direction="row">
                         <MyButtonContained sx={{ cursor: 'pointer' }} text={'Перейти в чат'}/>
                         <MyButtonOutlined  sx={{ cursor: 'pointer' }} text={'Доставлено'}/>
                     </Stack>
                 </Item>
                 <Item>
                     <MyMap name={''} orders={currentOrder} couriers={currentCourier} sizeWidth={'400px'} sizeHeight={'200px'}/>
                 </Item>

             </Stack>



         </>

     )
 }
export default CouriersPage