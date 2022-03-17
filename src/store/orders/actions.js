
export const GET_ORDERS_FROM_DB = "ORDERS::GET_ORDERS_FROM_DB"

export const getOrdersFromDB = (payload) => ({
  type: GET_ORDERS_FROM_DB,
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
  };
};


export const CHANGE_ORDERS_IN_DB = "ORDERS::CHANGE_ORDERS_IN_DB"

export const changeOrderInDB = (payload) => ({
    type: CHANGE_ORDERS_IN_DB,
    payload: payload
});

export const changeOrder = (obj) => {
    console.log('changeOrder', obj);
    return function (dispatch) {
            fetch(`https://xn--l1aej.pw/api/admin/orders/${obj.id}`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    mode:'cors'
                },
                body: JSON.stringify(obj)
            })
                .then(response => {
                    // console.log('json1 changeOrderInDB', response)
                    return response.json()

                })
                .then(json => {
                    console.log('json changeOrderInDB', json)
                    return dispatch(changeOrderInDB(json.updatedOrder))})
                .catch(err => console.log('err', err))
    };
};
