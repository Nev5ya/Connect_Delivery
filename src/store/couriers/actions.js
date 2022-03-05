

export const ADD_COURIERS_FROM_DB = "COURIERS::ADD_COURIERS_FROM_DB"

export const addCouriersFromDB = (payload) => ({
  type: ADD_COURIERS_FROM_DB,
  payload: payload
});

export const fetchCouriers = () => {
  return function (dispatch) {
    fetch('http://host1841489.hostland.pro/api/admin/user')
        .then(response => {
            console.log('json1', response)
            return response.json()

        })
        .then(json => {
            const couriers = json.data.filter(item => item.role_id === 1)
            console.log('json', json, couriers)
            return dispatch(addCouriersFromDB(couriers))})
  }
}