import * as React from "react";
import {useState} from "react";
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import {Grid} from "@mui/material";
import {useParams} from "react-router-dom";
import MyMap from "../Map/map";
import CourierOrder from "../CourierOrder/CourierOrder";
import {getCurrentCourier, getOrderForCourier} from "../../utils/getData";
import {MyButtonContained, MyButtonOutlined} from "../Button/button";
import {CourierStatusChange} from "../CourierStatusChange/CourierStatusChange";
import {Box} from "@mui/material";
import Menu from "../../utils/Menu";
import {CourierMenu} from "../CourierMenu/CourierMenu";


const CouriersPage = () => {
    const courierID = +useParams().id;
    const [clickOnMapToggle, setClickOnMapToggle] = useState(false);
    const [option, setOption] = useState('0');

    const currentCourier = getCurrentCourier(courierID);
    const currentOrder = getOrderForCourier(courierID);
    //console.log('courier', courierID, getCurrentCourier(courierID), getOrderForCourier(courierID), currentCourier[0]?.name)

    const clickOnMap = () => {
     console.log('clickOnMapToggle', clickOnMapToggle)
     setClickOnMapToggle(!clickOnMapToggle);
    };

    const onMenuItemClick = (option) => {
        setOption(option);
    };

     return (
        <>
            <Menu menuItem={CourierMenu(onMenuItemClick)}/>
            {(option === '1')
                ? <MyButtonContained  sx={{cursor: 'pointer'}} text={'Перейти в чат'}/>
                :(option === '0')
                     ? (clickOnMapToggle
                        ? <Box xs={{width: '100%'}}>
                            <MyMap name={''} orders={currentOrder} couriers={currentCourier}  clickOnMap={clickOnMap}/>
                         </Box>
                        :
                         <>
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
                                             <MyMap name={''} orders={currentOrder} couriers={currentCourier} clickOnMap={clickOnMap} sizeWidth={'100%'}
                                                    sizeHeight={'250px'} />
                                         </div>
                                     </Grid>
                                 </Grid>
                            </Stack>
                         </>)
                    : <> </>
             }
        </>
)
};

export default CouriersPage;