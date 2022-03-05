import * as React from "react";
import {useCallback, useState} from "react";
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import {Grid} from "@mui/material";
import {styled} from '@mui/material/styles';
import {useParams} from "react-router-dom";
import MyMap from "../Map/map";
import CourierOrder from "../CourierOrder/CourierOrder";
import {getCurrentCourier, getOrderForCourier} from "../../utils/getData";
import {MyButtonContained, MyButtonOutlined} from "../Button/button";
import {CourierStatusChange} from "../CourierStatusChange/CourierStatusChange";
import './CourierOrder.css';
import TemporaryDrawer from "../../utils/Menu";
import {CourierMenu} from "./CourierMenu";
import {Chat} from "../Chat/Chat";
import {Box} from "@mui/material";


const CouriersPage = () => {
  const courierID = +useParams().id;
  const [showChat, setShowChat] = useState(false);
  const [clickOnMapToggle, setClickOnMapToggle] = useState(false)

  const currentCourier = getCurrentCourier(courierID)
  const currentOrder = getOrderForCourier(courierID)
  console.log('courier', courierID, getCurrentCourier(courierID), getOrderForCourier(courierID), currentCourier[0]?.name)

 const Item = styled(Paper)(({ theme }) => ({
     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
     ...theme.typography.body2,
     padding: theme.spacing(1),
     textAlign: 'center',
     color: theme.palette.text.secondary,
 }));

 const clickOnMap1 = () => {
     setClickOnMapToggle(!clickOnMapToggle);
 }

 const onClickMenu = useCallback(() =>
     setShowChat(!showChat), [showChat, setShowChat]);

     return (
        <>
            {showChat ?
                <MyButtonContained  sx={{cursor: 'pointer'}} text={'Перейти в чат'}/>
            :
                (clickOnMapToggle ?
                 <Box xs={{width: '100%'}}>
                    <MyMap name={''} orders={currentOrder} couriers={currentCourier}  clickOnMap={clickOnMap1}/>
                 </Box>
                 :
                 <>
                     <TemporaryDrawer menuContent={CourierMenu} onClick={onClickMenu}/>
                     <Stack sx={{mb: 5}} direction="column" spacing={2}>
                         <Typography sx={{mt: 2, mb: 8}} variant="h4" component="div" >
                            {currentCourier[0]?.name}
                             <span className="courier-status"></span>
                         </Typography>
                         <CourierStatusChange />
                     </Stack>
                     <Stack direction="row" spacing={2}>
                         <Grid container>
                             <Grid item xs={6} sx={{border: 1, borderColor: 'grey.500', borderRadius: 2}}>
                                 <Stack direction="column" justifyContent="space-between" style={{height: '100%'}}>
                                     <CourierOrder order={currentOrder[0]}/>
                                     <Stack sx={{p: 2}} direction="row" justifyContent="space-between">
                                         <MyButtonContained sx={{cursor: 'pointer'}} text={'Доставлено'}/>
                                         <MyButtonOutlined sx={{cursor: 'pointer'}} text={'Перейти в чат'}/>
                                     </Stack>
                                 </Stack>
                             </Grid>
                             <Grid item xs={6}>
                                 <div style={{marginLeft: 16}}>
                                     <MyMap name={''} orders={currentOrder} couriers={currentCourier} sizeWidth={'100%'}
                                            sizeHeight={'250px'}/>
                                 </div>
                             </Grid>
                         </Grid>
                    </Stack>
                 </>)
             }
        </>




)
}
export default CouriersPage