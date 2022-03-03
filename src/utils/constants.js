
//export const PUBLIC_URL = "https://fakestoreapi.com/products";
import Brightness1Icon from '@mui/icons-material/Brightness1';

export const REQUEST_STATUS = {
  IDLE: 0,
  PENDING: 1,
  SUCCESS: 2,
  FAILURE: 3,
};

export const colorLabel = (typeLabel, status) => {
  if (typeLabel === 'courier' && status === 'online') {
    return 'green'
  }
  if (typeLabel === 'courier' && status === 'offline') {
    return 'grey'
  }
  if (typeLabel === 'courier' && status === 'work') {
    return 'red'
  }
  if (typeLabel === 'order' && status === 'expects') {
    return 'blue'
  }
};

export const iconCourierStatus = (status) => {
  if (status === 'online') {
    return <Brightness1Icon sx={{color: "green"}}/>
  }
  if (status === 'offline') {
    return <Brightness1Icon sx={{color: "white"}}/>
  }
  if (status === 'work') {
    return <Brightness1Icon sx={{color: "red"}}/>
  }
}
