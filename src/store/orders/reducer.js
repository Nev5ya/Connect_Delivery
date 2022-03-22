import {CHANGE_ORDERS_IN_DB, GET_ORDERS_FROM_DB, SET_PAGE_ADMIN, SET_PAGE_HISTORY} from "./actions";

const initialState = {
  orders:[],
  pageQtl: 2,
  currentPageAdmin: 1,
  pageQtlAdmin: 2,
  currentPageHistory: 1,
  pageQtlHistory: 2,};

export const ordersReducer = (state = initialState, { type, payload }) => {
  // console.log('ordersReducer', state, type)
  switch (type) {
    case GET_ORDERS_FROM_DB:
      // console.log('reducer GET_ORDERS_FROM_DB', state, payload)
      const new_st = {...state, orders: payload} //{...state, orders: [...state.orders, ...payload]}
      // console.log('new_st', new_st, state)
      return new_st

    case SET_PAGE_ADMIN:
      // console.log('reducer SET_PAGE_ADMIN', payload);
      const new_stPA = { ...state, currentPageAdmin: payload };
      return new_stPA;

    case SET_PAGE_HISTORY:
      // console.log('reducer SET_PAGE_HISTORY', payload);
      const new_stPH = { ...state, currentPageHistory: payload };
      return new_stPH;

    case CHANGE_ORDERS_IN_DB:
      // console.log('reducer CHANGE', state, payload)
        if (payload === 'undefined' || payload.length === 0 ) {
          // console.log('error CHANGE_ORDERS_IN_DB');
          return state
        }
        const filter = state.orders.filter((item) => {
          return item.id !== payload.id
        })
      const new_st1 = {...state, orders: [...filter, payload]}
      // console.log('new_st', new_st1, state)
      return new_st1

    default:
      return state
   }
};