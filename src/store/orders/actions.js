
export const ADD_ORDERS_FROM_DB = "ORDERS::ADD_ORDERS_FROM_DB"

export const addOrdersFromDB = (payload) => ({
  type: ADD_ORDERS_FROM_DB,
  payload: payload
});

export const fetchOrders = () => {
  return function (dispatch) {
    fetch('https://xn--l1aej.pw/api/admin/orders')
        .then(response => {
            console.log('json1', response)
            return response.json()

        })
        .then(json => {
          console.log('json', json)
          return dispatch(addOrdersFromDB(json.data))})
  }
}
