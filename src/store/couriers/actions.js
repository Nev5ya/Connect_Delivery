
export const GET_COURIERS_FROM_DB = "COURIERS::GET_COURIERS_FROM_DB"

export const getCouriersFromDB = (payload) => ({
  type: GET_COURIERS_FROM_DB,
  payload: payload
});

export const getCouriers = () => {
  return function (dispatch) {
    fetch('https://xn--l1aej.pw/api/admin/user')
        .then(response => {
            console.log('json1', response)
            return response.json()

        })
        .then(json => {
            const couriers = json.data.filter(item => item.role_id === 1)
            console.log('json', json, couriers)
            return dispatch(getCouriersFromDB(couriers))})
  }
}

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

// export const changeCourier = (courier_id, name, email) => {
//     console.log('changeCourier')
//     const newData = {
//         id: courier_id,
//         name,
//         email
//     };
//     console.log('changeCourier newData', newData);
//
//     return function (dispatch) {
//         fetch(`https://xn--l1aej.pw/api/admin/user/${courier_id}`,{
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json;charset=utf-8',
//                 mode:'cors'
//             },
//             body: JSON.stringify(newData)
//         })
//             .then(response => {
//                 console.log('json1 changeCourierInDB', response)
//                 return response.json()
//
//             })
//             .then(json => {
//                 console.log('json changeCourierInDB', json)
//                 return dispatch(changeCourierInDB(json.updatedUser))})
//             .catch(err => console.log('err', err))
//     }
// }
export const changeCourier = (obj) => async (dispatch) => {

    dispatch(changeCourierInDBPending());

    console.log('changeCourier', obj)
    // const newData = {
    //     id: courier_id,
    //     name,
    //     email
    // };
    // console.log('changeCourier newData', newData);

    try {
        const response = await fetch(`https://xn--l1aej.pw/api/admin/user/${obj.id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                mode:'cors'
            },
            body: JSON.stringify(obj)
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
}

export const DELETE_COURIERS_IN_DB = "COURIERS::DELETE_COURIERS_IN_DB"

export const deleteCourierInDB = (payload) => ({
    type: DELETE_COURIERS_IN_DB,
    payload: payload
});

export const deleteCourier = (courier_id) => {
    console.log('deleteCourier')
    const newData = {
        id: courier_id
    };
    console.log('deleteCourier newData', newData);

    return function (dispatch) {
        fetch(`https://xn--l1aej.pw/api/admin/user/${courier_id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                "X-Requested-With": "XMLHttpRequest",
                mode:'cors'
            },
            body: JSON.stringify(newData)
        })
            .then(response => {
                console.log('json1 deleteCourierInDB', response)
                return response.json()

            })
            .then(json => {
                console.log('json deleteCourierInDB', json)
                return dispatch(deleteCourierInDB(newData))})
            .catch(err => console.log('err', err))
    }
}

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

    const newData = {
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
            body: JSON.stringify(newData)
        });

        if (!response.ok) {
            console.log('response.ok', response.ok);
            throw new Error(`error ${response.status}`);
        }

        const result = await response.json();

        console.log('result', result);

        dispatch(registerCourierInDBSuccess(result.newUser));
    } catch (e) {
        console.log('error', e);
        dispatch(registerCourierInDBFailure(e.message));
    }
}
// export const REGISTR_COURIERS_IN_DB = "COURIERS::REGISTR_COURIERS_IN_DB"
//
// export const registrCourierInDB = (payload) => ({
//     type: REGISTR_COURIERS_IN_DB,
//     payload: payload
// });
//
// export const registrCourier = (name, surname, email, password) => {
//     console.log('registrCourier')
//     const newData = {
//         name: name + " " + surname,
//         email: email,
//         password: password,
//         coords: "55.6843,37.33855",
//         user_status_id: 3,
//         role_id: 1
//     };
//     console.log('registrCourier newData', newData);
//
//     return function (dispatch) {
//         fetch(`https://xn--l1aej.pw/api/register`,{
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json;charset=utf-8',
//                 "X-Requested-With": "XMLHttpRequest",
//                 mode:'cors'
//             },
//             body: JSON.stringify(newData)
//         })
//             .then(response => {
//                 console.log('json1 changeCourierInDB', response)
//                 // if (response.ok) {
//                 //     throw new Error(`Request failed with status ${response.status}`);
//                 // }
//                 return response.json()
//
//             }) .then(json => {
//             console.log('json deleteCourierInDB', json)
//             return ''})
//             .catch(err => console.log('err', err))
//     }
// }
