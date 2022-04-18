import {CHANGE_ORDERS_IN_DB, GET_ORDERS_FROM_DB, SET_PAGE_ADMIN, SET_PAGE_HISTORY} from "./actions";

const initialState = {
  orders:[],
  pageQtl: 2,
  currentPageAdmin: 1,
  pageQtlAdmin: 2,
  currentPageHistory: 1,
  pageQtlHistory: 2,};

export const ordersReducer = (state = initialState, { type, payload }) => {

  switch (type) {
    case GET_ORDERS_FROM_DB:

      const new_st = {...state, orders: payload} //{...state, orders: [...state.orders, ...payload]}

      return new_st

    case SET_PAGE_ADMIN:

      const new_stPA = { ...state, currentPageAdmin: payload };
      return new_stPA;

    case SET_PAGE_HISTORY:

      const new_stPH = { ...state, currentPageHistory: payload };
      return new_stPH;

    case CHANGE_ORDERS_IN_DB:

        if (payload === 'undefined' || payload.length === 0 ) {

          return state
        }
        const filter = state.orders.filter((item) => {
          return item.id !== payload.id
        })
      const new_st1 = {...state, orders: [...filter, payload]}

      return new_st1

    default:
      return state
   }
};