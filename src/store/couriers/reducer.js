import {CHANGE_COURIERS_IN_DB, DELETE_COURIERS_IN_DB, GET_COURIERS_FROM_DB} from "./actions";

const initialState = {couriers:[]};

export const couriersReducer = (state = initialState, { type, payload }) => {
  console.log('st111', state, type)
  switch (type) {
    case GET_COURIERS_FROM_DB:
      console.log('reducer', state, payload)
      const new_st = {...state, couriers: payload} //{...state, couriers: [...state.couriers, ...payload]}
      console.log('new_st', new_st, state)
      return new_st

    case CHANGE_COURIERS_IN_DB:
      console.log('reducer CHANGE', state, payload)
      if (payload === 'undefined' || payload.length === 0 ) {
        console.log('error CHANGE_COURIERS_IN_DB');
        return state
      }
      const filterChange = state.couriers.filter((item) => {
        return item.id !== payload.id
      })
      const new_stateChange = {...state, couriers: [...filterChange, payload]}
      console.log('new_st', new_stateChange, state)
      return new_stateChange

    case DELETE_COURIERS_IN_DB:
      console.log('reducer DELETE', state, payload)
      if (payload === 'undefined' || payload === 'null') {
        console.log('error DELETE_COURIERS_IN_DB');
        return state
      }
      const filterDel = state.couriers.filter((item) => {
        return item.id !== payload.id
      })
      const new_stDel = {...state, couriers: [...filterDel]}
      console.log('new_st', new_stDel, state)
      return new_stDel

    default:
      return state
   }
};