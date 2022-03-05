import { ADD_ORDERS_FROM_DB } from "./actions";

const initialState = {orders:[]};

export const ordersReducer = (state = initialState, { type, payload }) => {
  console.log('st1', state, type)
  switch (type) {
    case ADD_ORDERS_FROM_DB:
      console.log('reducer', state, payload)
      const new_st = {...state, orders: [...state.orders, ...payload]}
      console.log('new_st', new_st, state)
      return new_st
    default:
      return state
   }
};