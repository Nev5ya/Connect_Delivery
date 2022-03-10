import {CHANGE_ORDERS_IN_DB, GET_ORDERS_FROM_DB} from "./actions";

const initialState = {orders:[]};

export const ordersReducer = (state = initialState, { type, payload }) => {
  console.log('st1', state, type)
  switch (type) {
    case GET_ORDERS_FROM_DB:
      console.log('reducer', state, payload)
      const new_st = {...state, orders: payload} //{...state, orders: [...state.orders, ...payload]}
      console.log('new_st', new_st, state)
      return new_st

    case CHANGE_ORDERS_IN_DB:
      console.log('reducer', state, payload)
      const new_st1 = {...state, orders: payload} //{...state, orders: [...state.orders, ...payload]}
      console.log('new_st', new_st1, state)
      return new_st1
    default:
      return state
   }
};