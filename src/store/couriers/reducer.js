import {ADD_COURIERS_FROM_DB} from "./actions";

const initialState = {couriers:[]};

export const couriersReducer = (state = initialState, { type, payload }) => {
  console.log('st1', state, type)
  switch (type) {
    case ADD_COURIERS_FROM_DB:
      console.log('reducer', state, payload)
      const new_st = {...state, couriers: payload} //{...state, couriers: [...state.couriers, ...payload]}
      console.log('new_st', new_st, state)
      return new_st
    default:
      return state
   }
};