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
        fetch(`https://xn--l1aej.pw/api/admin/orders?auth-token=${localStorage.getItem("auth-token")}`)
            .then(response => {
                console.log('json1', response)
                return response.json()

            })
            .then(json => {
                console.log('json', json)
                return dispatch(getOrdersFromDB(json.data))
            })
    };
};


export const CHANGE_ORDERS_IN_DB = "ORDERS::CHANGE_ORDERS_IN_DB"
export const changeOrderInDB = (payload) => ({
    type: CHANGE_ORDERS_IN_DB,
    payload: payload
});

export const changeOrder = (data) => {
    console.log('changeOrder', data);
    return function (dispatch) {
        fetch(`https://xn--l1aej.pw/api/admin/orders/${data.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                mode: 'cors'
            },
            body: JSON.stringify(Object.assign({data}, {'auth-token': localStorage.getItem('auth-token')}))
        })
            .then(response => {
                // console.log('json1 changeOrderInDB', response)
                return response.json()

            })
            .then(json => {
                console.log('json changeOrderInDB', json)
                return dispatch(changeOrderInDB(json.updatedOrder))
            })
            .catch(err => console.log('err', err))
    };
};

export const CREATE_ORDER_IN_DB_PENDING = "ORDERS::CREATE_ORDER_IN_DB_PENDING"
export const CREATE_ORDER_IN_DB_SUCCESS = "ORDERS::CREATE_ORDER_IN_DB_SUCCESS"
export const CREATE_ORDER_IN_DB_FAILURE = "ORDERS::CREATE_ORDER_IN_DB_FAILURE"

// export const createOrderInDB = (payload) => ({
//     type: CREATE_ORDER_IN_DB,
//     payload: payload
// });
export const createOrderInDBPending = () => ({
    type: CREATE_ORDER_IN_DB_PENDING,
});
export const createOrderInDBSuccess = (data) => ({
    type: CREATE_ORDER_IN_DB_SUCCESS,
    payload: data
});
export const createOrderInDBFailure = (error) => ({
    type: CREATE_ORDER_IN_DB_FAILURE,
    payload: error
});

export const createOrder = (data) => {
    // console.log('createOrder')

    return function (dispatch) {
        dispatch(createOrderInDBPending());

        fetch(`https://xn--l1aej.pw/api/admin/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                "X-Requested-With": "XMLHttpRequest",
                'Accept': 'application/json',
                // 'mode':'cors'
            },
            body: JSON.stringify(Object.assign({data}, {'auth-token': localStorage.getItem('auth-token')}))
        })
            .then(response => {
                console.log('Order created', response)

                dispatch(createOrderInDBSuccess(response.newOrder));
                return response.json()
            })
            .catch(err => {
                dispatch(createOrderInDBFailure(err.message));
                console.log('err', err)
            })
    }
}