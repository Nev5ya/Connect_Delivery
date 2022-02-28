
//export const PUBLIC_URL = "https://fakestoreapi.com/products";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DoDisturbOnIcon from "@mui/icons-material/DoDisturbOn";
import BuildCircleOutlined from "@mui/icons-material/BuildCircleOutlined";

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
    return <CheckCircleOutlineIcon/>
  }
  if (status === 'offline') {
    return <DoDisturbOnIcon/>
  }
  if (status === 'work') {
    return <BuildCircleOutlined/>
  }
}