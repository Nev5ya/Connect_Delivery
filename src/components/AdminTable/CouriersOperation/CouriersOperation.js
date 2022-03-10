import {CouriersList} from "../../CouriersList/CouriersList";
import {getCouriersByStatus} from "../../../utils/getData";
import MyMap from "../../Map/map";
import Grid from "@mui/material/Grid";
import {useSelector} from "react-redux";
import {selectCouriers} from "../../../store/couriers/selector";
import {useState} from "react";
import {Box} from "@mui/material";
import * as React from "react";

export const CouriersOperation = () => {
    const couriers = useSelector(selectCouriers);
    const [clickOnMapToggle, setClickOnMapToggle] = useState(false);

    const clickOnMap = () => {
        console.log('clickOnMapToggle', clickOnMapToggle)
        setClickOnMapToggle(!clickOnMapToggle);
    };

      return (
          <>
              {clickOnMapToggle
              ? <Box xs={{width: '100%'}}>
                    <MyMap name={''} orders={[]} couriers={couriers}  clickOnMap={clickOnMap}/>
                </Box>
              :
              <Grid direction="row" container spacing={2}>
                  <Grid item xs={6}>
                      <CouriersList name={'Курьеры онлайн:'} couriers={getCouriersByStatus('online')} status='online'/>
                      <CouriersList name={'Курьеры в процессе доставки:'} couriers={getCouriersByStatus('work')} status='work'/>
                      <CouriersList name={'Курьеры оффлайн:'} couriers={getCouriersByStatus('offline')} status='offline'/>
                  </Grid>
                  <Grid item xs={6}>
                      <MyMap name={''} orders={[]} couriers={couriers} clickOnMap={clickOnMap} sizeWidth={'450px'} sizeHeight={'450px'}
                             zoom={8}/>
                  </Grid>
              </Grid>}
          </>

      )
}
