
//export const PUBLIC_URL = "https://fakestoreapi.com/products";

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
  if (typeLabel === 'courier' && status === 'busy') {
    return 'red'
  }
  if (typeLabel === 'order' && status === 'expects') {
    return 'blue'
  }
};