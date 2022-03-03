import * as React from 'react';
import {useState} from 'react';
import MyMap from "../Map/map.js";
import {Box} from "@mui/material";
import AdminInWork from "./AdminInWork/AdminInWork";
import AdminHistory from "./AdminHistory/AdminHistory";
import {AdminMenu} from "../AdminMenu/AdminMenu";
import {Chat} from "../Chat/Chat";
import TemporaryDrawer from "../../utils/Menu";
import {CouriersOperation} from "./CouriersOperation/CouriersOperation";
import {CourierRegistration} from "./CourierRegistration/CourierRegistration";

export const AdminTable = () => {
  // const [value, setValue] = useState('0');
  //
  // const handleChange = (event, newValue) => {
  //   console.log('handleChange', newValue)
  //   setValue(newValue);
  // };
  const [option, setOption] = useState('0');
  const onMenuItemClick = (option) => {
    setOption(option);
  };

  const renderOptionalComponent = (option) => {
    switch (option) {
      case '1':
        return <Chat/>;
      case '2':
        return <MyMap/>;
      case '3':
        return <CouriersOperation/>;
      case '4':
        return <CourierRegistration/>;
      default:
        return (
          <>
            <AdminInWork/>
            <hr/>
            <AdminHistory/>
          </>
        );
    }
  };

  return (
    <Box sx={{width: '100%', typography: 'body1'}}>
      <TemporaryDrawer menuContent={AdminMenu} onClick={onMenuItemClick}/>
      {renderOptionalComponent(option)}

      {/*                    <MyMap name={"Местонахождение курьеров"} couriers={couriers} orders={orders}/>*/}

      {/*            Чат с администратором*/}
      {/*                <TabPanel value="3">*/}
      {/*                    <Grid direction="row" container spacing={2}>*/}
      {/*                        <Grid item xs={6}>*/}
      {/*                            <CouriersList name={'Курьеры онлайн:'} couriers={getCouriersOnline} status={'online'}/>*/}
      {/*                            <CouriersList name={'Курьеры в процессе доставки:'} couriers={getCouriersWork}*/}
      {/*                                          status={'work'}/>*/}
      {/*                            <CouriersList name={'Курьеры оффлайн:'} couriers={getCouriersOffline} status={'offline'}/>*/}
      {/*<CourierMenu/>*/}
      {/*                        </Grid>*/}
      {/*                        <Grid item xs={6}>*/}
      {/*                            <MyMap name={''} orders={[]} couriers={couriers} sizeWidth={'450px'} sizeHeight={'450px'}*/}
      {/*                                   zoom={8}/>*/}
      {/*                        </Grid>*/}
      {/*                    </Grid>*/}
      {/*                </TabPanel>*/}
      {/*                <TabPanel value="4">Item Three</TabPanel>*/}

    </Box>
  );

}

