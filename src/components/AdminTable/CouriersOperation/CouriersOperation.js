import {CouriersList} from "../../CouriersList/CouriersList";
import MyMap from "../../Map/map";
import Grid from "@mui/material/Grid";
import {useDispatch, useSelector} from "react-redux";
import {selectCouriers, selectCouriersByStatus} from "../../../store/couriers/selector";
import {useEffect, useState} from "react";
import {Box} from "@mui/material";
import * as React from "react";
import {MyButtonContained} from "../../Button/button";
import {registrCourier} from "../../../store/couriers/actions";
import {registrOrder} from "../../../store/orders/actions";

export const CouriersOperation = () => {
    const couriers = useSelector(selectCouriers);
    const [clickOnMapToggle, setClickOnMapToggle] = useState(false);

    const clickOnMap = () => {
        console.log('clickOnMapToggle', clickOnMapToggle);
        setClickOnMapToggle(!clickOnMapToggle);
    };

    const couriersOnline = useSelector((state) => selectCouriersByStatus(state, 2));
    const couriersWork = useSelector((state) => selectCouriersByStatus(state, 3));
    const couriersOffline = useSelector((state) => selectCouriersByStatus(state, 1));

    const dispatch = useDispatch();
    // const onRegistrCourierClick = () => {
    //     console.log('onRegistrCourierClick');
    //     dispatch(registrCourier());
    // };
    const onRegistrOrderClick = () => {
        console.log('onRegistrOrderClick');
        dispatch(registrOrder());
    };


      return (
          <>
              {clickOnMapToggle
                  ? <Box xs={{width: '100%'}}>
                        <MyMap name={''} orders={[]} couriers={couriers}  clickOnMap={clickOnMap}/>
                    </Box>
                  : <Grid direction="row" container spacing={2}>
                      <Grid item xs={6}>
                          <CouriersList name={'Курьеры онлайн:'} couriers={couriersOnline} status_id={2}/>
                          <CouriersList name={'Курьеры в процессе доставки:'} couriers={couriersWork} status_id={3}/>
                          <CouriersList name={'Курьеры оффлайн:'} couriers={couriersOffline} status_id={1}/>
                      </Grid>
                      <Grid item xs={6}>
                          <MyMap name={''}
                                 orders={[]}
                                 couriers={couriers}
                                 clickOnMap={clickOnMap}
                                 sizeWidth={'450px'}
                                 sizeHeight={'450px'}
                                 zoom={8}/>
                      </Grid>
                  </Grid>
              }
              {/*<MyButtonContained*/}
              {/*    disabled={false}*/}
              {/*    sx={{cursor: 'pointer'}}*/}
              {/*    text={'Зарегистрировать нового курьера'}*/}
              {/*    onClick={onRegistrCourierClick}*/}
              {/*/>*/}
              <MyButtonContained
                  disabled={false}
                  sx={{cursor: 'pointer'}}
                  text={'Зарегистрировать новый заказ'}
                  onClick={onRegistrOrderClick}
              />
          </>
      );
};
