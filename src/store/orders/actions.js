
export const GET_ORDERS_FROM_DB = "ORDERS::GET_ORDERS_FROM_DB"

export const getOrdersFromDB = (payload) => ({
  type: GET_ORDERS_FROM_DB,
  payload: payload
});

export const CHANGE_ORDERS_IN_DB = "ORDERS::CHANGE_ORDERS_IN_DB"

export const changeOrderInDB = (payload) => ({
    type: CHANGE_ORDERS_IN_DB,
    payload: payload
});

export const getOrders = () => {
  return function (dispatch) {
    fetch('https://xn--l1aej.pw/api/admin/orders')
        .then(response => {
            console.log('json1', response)
            return response.json()

        })
        .then(json => {
          console.log('json', json)
          return dispatch(getOrdersFromDB(json.data))})
  }
}

export const changeOrder = (order_id, user_id) => {
    console.log('changeOrder')
    const newData = {
        id: order_id,
        user_id: user_id//null,

    };
    console.log('changeOrder newData', newData)
    return function (dispatch) {
            fetch(`https://xn--l1aej.pw/api/admin/orders/${order_id}`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    mode:'cors'
                },
                body: JSON.stringify(newData)
            })
                .then(response => {
                    console.log('json1 changeOrderInDB', response)
                    return response.json()

                })
                .then(json => {
                    console.log('json changeOrderInDB', json)
                    return dispatch(changeOrderInDB(json.updatedOrder))})
                .catch(err => console.log('err', err))


    }
}
