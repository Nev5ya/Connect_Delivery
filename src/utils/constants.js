
//export const PUBLIC_URL = "https://fakestoreapi.com/products";
import Brightness1Icon from '@mui/icons-material/Brightness1';

export const REQUEST_STATUS = {
  IDLE: 0,
  PENDING: 1,
  SUCCESS: 2,
  FAILURE: 3,
};

export const colorLabel = (typeLabel, status) => {
  console.log('colorLabel', typeLabel, status)
  if (typeLabel === 'courier' && status === 'online') {
    return 'green'
  }
  if (typeLabel === 'courier' && status === 'offline') {
    return 'grey'
  }
  if (typeLabel === 'courier' && status === 'work') {
    return 'red'
  }
  if (typeLabel === 'order' && status === 'processing') {
    return 'blue'
  }
  if (typeLabel === 'order' && status === 'delivered') {
    return 'yellow'
  }
  if (typeLabel === 'order' && status === 'transit') {
    return 'orange'
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
