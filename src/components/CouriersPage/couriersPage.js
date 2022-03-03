import * as React from "react";
import {useCallback, useState} from "react";
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import {styled} from '@mui/material/styles';
import {useParams} from "react-router-dom";
import MyMap from "../Map/map";
import Order from "../order/order";
import {getCurrentCourier, getOrderForCourier} from "../../utils/getData";
import {MyButtonContained, MyButtonOutlined} from "../Button/button";
import {CourierStatusChange} from "../CourierStatusChange/CourierStatusChange";
import './CourierOrder.css';
import TemporaryDrawer from "../../utils/Menu";
import {CourierMenu} from "./CourierMenu";
import {Chat} from "../Chat/Chat";

const CouriersPage = () => {
  const courierID = +useParams().id;
  const [showChat, setShowChat] = useState(false);

  const currentCourier = getCurrentCourier(courierID)
  const currentOrder = getOrderForCourier(courierID)
  console.log('courier', courierID, getCurrentCourier(courierID), getOrderForCourier(courierID), currentCourier[0].name)

  const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const onClickMenu = useCallback(() =>
    setShowChat(!showChat), [showChat, setShowChat]);

  return (
    <>
      <TemporaryDrawer menuContent={CourierMenu} onClick={onClickMenu}/>
      {showChat ? (
        <Chat/>
      )
      : (
      <Stack sx={{ mb: 5}} direction="column" spacing={2}>

        <Typography sx={{mt: 2, mb: 8}} variant="h4" component="div" >
          {currentCourier[0].name} - {currentCourier[0].status}
          <span className="courier-status"></span>
        </Typography>
        <CourierStatusChange />

      <Stack direction="row" spacing={2}>
        <Item>
          <Order order={currentOrder[0]}/>
          {/*<CourierOrder order={currentOrder[0]}/>*/}
          <Stack sx={{mt: 2}} spacing={2} direction="row">
            <MyButtonContained  sx={{ cursor: 'pointer' }} text={'Перейти в чат'}/>
            <MyButtonOutlined   sx={{ cursor: 'pointer' }} text={'Доставлено'}/>
          </Stack>
        </Item>
        <Item>
          <MyMap name={''} orders={currentOrder} couriers={currentCourier} sizeWidth={'400px'} sizeHeight={'250px'}/>
        </Item>

      </Stack>
      </Stack>
        )}




    </>

  )
}
export default CouriersPage

