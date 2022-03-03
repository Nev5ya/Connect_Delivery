import {CouriersList} from "../../CouriersList/CouriersList";
import {getCouriersOffline, getCouriersOnline, getCouriersWork} from "../../../utils/getData";
import MyMap from "../../Map/map";
import Grid from "@mui/material/Grid";
import {useSelector} from "react-redux";
import {selectCouriers} from "../../../store/couriers/selector";


export const CouriersOperation = () => {
    const couriers = useSelector(selectCouriers)

      return (

          <Grid direction="row" container spacing={2}>
            <Grid item xs={6}>
                <CouriersList name={'Курьеры онлайн:'} couriers={getCouriersOnline()} status={'online'}/>
                <CouriersList name={'Курьеры в процессе доставки:'} couriers={getCouriersWork()} status={'work'}/>
                <CouriersList name={'Курьеры оффлайн:'} couriers={getCouriersOffline()} status={'offline'}/>
            </Grid>
            <Grid item xs={6}>
              <MyMap name={''} orders={[]} couriers={couriers} sizeWidth={'450px'} sizeHeight={'450px'}
                     zoom={8}/>
            </Grid>
          </Grid>

          )
          }
