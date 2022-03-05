
export const ADD_ORDERS_FROM_DB = "ORDERS::ADD_ORDERS_FROM_DB"

export const addOrdersFromDB = (payload) => ({
  type: ADD_ORDERS_FROM_DB,
  payload: payload
});

export const fetchOrders = () => {
  return function (dispatch) {
    fetch('http://host1841489.hostland.pro/api/admin/orders')
        .then(response => {
            console.log('json1', response)
            return response.json()

        })
        .then(json => {
          console.log('json', json)
          return dispatch(addOrdersFromDB(json.data))})
  }
}