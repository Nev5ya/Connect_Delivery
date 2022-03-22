const axios = require('axios').default;

axios.defaults.withCredentials = true;

export const SET_PAGE_ADMIN = "ORDERS::SET_PAGE_ADMIN"
export const setPageAdmin = (payload) => ({
    type: SET_PAGE_ADMIN,
    payload: payload,
});

export const SET_PAGE_HISTORY = "ORDERS::SET_PAGE_HISTORY"
export const setPageHistory = (payload) => ({
    type: SET_PAGE_HISTORY,
    payload: payload,
});

export const GET_ORDERS_FROM_DB = "ORDERS::GET_ORDERS_FROM_DB"
export const getOrdersFromDB = (payload) => ({
    type: GET_ORDERS_FROM_DB,
    payload: payload,
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

export const REGISTR_ORDERS_IN_DB = "COURIERS::REGISTR_ORDERS_IN_DB"
export const registrOrderInDB = (payload) => ({
    type: REGISTR_ORDERS_IN_DB,
    payload: payload
});

export const registrOrder = () => {
    console.log('registrOrder')
    const newData = {
        name: 'Диван',
        address: 'Москва, Мясницкая, 45',
        delivery_date: '2022-04-11',
        order_status_id: 1,
        user_id: null,
        comment: 'Позвонить'
    };
    console.log('registrOrder newData', newData);

    return function (dispatch) {

        fetch(`https://xn--l1aej.pw/api/admin/orders`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                "X-Requested-With": "XMLHttpRequest",
                'Accept': 'application/json',
                 'mode':'cors'
            },
            body: JSON.stringify(newData)
        })
            .then(response => {
                console.log('json1 changeOrderInDB', response)
                return response.json()

            })
            .catch(err => console.log('err', err))
    }
}