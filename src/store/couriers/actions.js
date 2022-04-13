import {addChatFb} from "../chats/actions";

export const GET_COURIERS_FROM_DB = "COURIERS::GET_COURIERS_FROM_DB"

export const getCouriersFromDB = (payload) => ({
  type: GET_COURIERS_FROM_DB,
  payload: payload
});

export const getCouriers = () => {
  return function (dispatch) {
    fetch(`https://xn--l1aej.pw/api/admin/user?auth-token=${localStorage.getItem("auth-token")}`)
        .then(response => {
            console.log('json1', response)
            return response.json()

        })
        .then(json => {
            const couriers = json.data.filter(item => item.role_id === 1)
            console.log('json', json, couriers)
            // return dispatch(getCouriersFromDB(couriers))})
            return dispatch(getCouriersFromDB(json.data))})
  }
};

export const CHANGE_COURIERS_IN_DB_PENDING = "COURIERS::CHANGE_COURIERS_IN_DB_PENDING"
export const CHANGE_COURIERS_IN_DB_SUCCESS = "COURIERS::CHANGE_COURIERS_IN_DB_SUCCESS"
export const CHANGE_COURIERS_IN_DB_FAILURE = "COURIERS::CHANGE_COURIERS_IN_DB_FAILURE"

export const changeCourierInDBPending = () => ({
    type: CHANGE_COURIERS_IN_DB_PENDING,
});
export const changeCourierInDBSuccess = (data) => ({
    type: CHANGE_COURIERS_IN_DB_SUCCESS,
    payload: data
});
export const changeCourierInDBFailure = (error) => ({
    type: CHANGE_COURIERS_IN_DB_FAILURE,
    payload: error
});

export const changeCourier = (data) => async (dispatch) => {
    dispatch(changeCourierInDBPending());
    console.log('changeCourier', data)

    try {
        const response = await fetch(`https://xn--l1aej.pw/api/admin/user/${data.id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                mode:'cors'
            },
            body: JSON.stringify(Object.assign({data}, {'auth-token': localStorage.getItem('auth-token')}))
        });

        if (!response.ok) {
            console.log('response.ok', response.ok);
            throw new Error(`error ${response.status}`);
        }

        const result = await response.json();

        console.log('result', result);

        dispatch(changeCourierInDBSuccess(result.updatedUser));
    } catch (e) {
        console.log('error', e);
        dispatch(changeCourierInDBFailure(e.message));
    }
};

// export const DELETE_COURIERS_IN_DB = "COURIERS::DELETE_COURIERS_IN_DB"
//
// export const deleteCourierInDB = (payload) => ({
//     type: DELETE_COURIERS_IN_DB,
//     payload: payload
// });

export const DELETE_COURIERS_IN_DB_PENDING = "DELETE::DELETE_COURIERS_IN_DB_PENDING"
export const DELETE_COURIERS_IN_DB_SUCCESS = "DELETE::DELETE_COURIERS_IN_DB_SUCCESS"
export const DELETE_COURIERS_IN_DB_FAILURE = "DELETE::DELETE_COURIERS_IN_DB_FAILURE"

export const deleteCourierInDBPending = () => ({
    type: DELETE_COURIERS_IN_DB_PENDING,
});
export const deleteCourierInDBSuccess = (data) => ({
    type: DELETE_COURIERS_IN_DB_SUCCESS,
    payload: data
});
export const deleteCourierInDBFailure = (error) => ({
    type: DELETE_COURIERS_IN_DB_FAILURE,
    payload: error
});


export const deleteCourier = (courier_id) => async (dispatch) => {
    dispatch(deleteCourierInDBPending());
    console.log('deleteCourier', courier_id)
    const data = {
        id: courier_id
    };

    try {
        const response = await fetch(`https://xn--l1aej.pw/api/admin/user1/${data.id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                "X-Requested-With": "XMLHttpRequest",
                mode:'cors'
            },
            body: JSON.stringify(Object.assign({data}, {'auth-token': localStorage.getItem('auth-token')}))
        });

        if (!response.ok) {
            console.log('response.ok', response.ok);
            throw new Error(`error ${response.status}`);
        }

        const result = await response.json();

        console.log('result', result);

        dispatch(deleteCourierInDBSuccess(data));
    } catch (e) {
        console.log('error', e);
        dispatch(deleteCourierInDBFailure(e.message));
    }
};


export const REGISTER_COURIERS_IN_DB_PENDING = "COURIERS::REGISTER_COURIERS_IN_DB_PENDING"
export const REGISTER_COURIERS_IN_DB_SUCCESS = "COURIERS::REGISTER_COURIERS_IN_DB_SUCCESS"
export const REGISTER_COURIERS_IN_DB_FAILURE = "COURIERS::REGISTER_COURIERS_IN_DB_FAILURE"

export const registerCourierInDBPending = () => ({
    type: REGISTER_COURIERS_IN_DB_PENDING,
});
export const registerCourierInDBSuccess = (data) => ({
    type: REGISTER_COURIERS_IN_DB_SUCCESS,
    payload: data
});
export const registerCourierInDBFailure = (error) => ({
    type: REGISTER_COURIERS_IN_DB_FAILURE,
    payload: error
});
export const registerCourier = (name, surname, email, password)  => async (dispatch) => {

    dispatch(registerCourierInDBPending());

    const data = {
        name: name + " " + surname,
        email: email,
        password: password,
        coords: "55.6843,37.33855",
        user_status_id: 1,
        role_id: 1
    };

    try {
        const response = await fetch(`https://xn--l1aej.pw/api/register`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                "X-Requested-With": "XMLHttpRequest",
                mode:'cors'
            },
            body: JSON.stringify(Object.assign({data}, {'auth-token': localStorage.getItem('auth-token')}))

    });

        if (!response.ok) {
            console.log('response.ok', response.ok);
            throw new Error(`error ${response.status}`);
        }

        const result = await response.json();

        console.log('result', result);

        dispatch(registerCourierInDBSuccess(result.newUser));
        dispatch(addChatFb(result.newUser.id, result.newUser.name));
    } catch (e) {
        console.log('error', e);
        dispatch(registerCourierInDBFailure(e.message));
    }
}
