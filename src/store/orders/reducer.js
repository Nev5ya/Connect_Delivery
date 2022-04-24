import {
    CHANGE_ORDERS_IN_DB_FAILURE,
    CHANGE_ORDERS_IN_DB_PENDING,
    CHANGE_ORDERS_IN_DB_SUCCESS,
    GET_ORDERS_FROM_DB,
    CREATE_ORDER_IN_DB_PENDING,
    CREATE_ORDER_IN_DB_SUCCESS,
    CREATE_ORDER_IN_DB_FAILURE
} from "./actions";
import {REQUEST_STATUS} from "../../utils/constants";

const initialState = {
    orders: [],
    request: {
        error: null,
        status: REQUEST_STATUS.IDLE,
    },
};

export const ordersReducer = (state = initialState, {type, payload}) => {

    switch (type) {
        case GET_ORDERS_FROM_DB:

            const new_st = {...state, orders: payload} //{...state, orders: [...state.orders, ...payload]}
            // console.log('new_st', new_st, state)
            return new_st;

        case CHANGE_ORDERS_IN_DB_PENDING: {
            return {
                ...state,
                request: {
                    error: null,
                    status: REQUEST_STATUS.PENDING
                }
            };
        }

        case CHANGE_ORDERS_IN_DB_SUCCESS: {
            // console.log('reducer CHANGE_ORDERS_IN_DB_SUCCESS', state, payload);

            const filterChange = state.orders.filter((item) => {

                return item.id !== payload.id
            });
            // console.log('filterChange CHANGE_ORDERS_IN_DB_SUCCESS', filterChange);
            return {
                ...state,
                request: {
                    error: null,
                    status: REQUEST_STATUS.SUCCESS
                },
                orders: [...filterChange, payload]
            };
        }

        case CHANGE_ORDERS_IN_DB_FAILURE: {
            // console.log('CHANGE_ORDERS_IN_DB_FAILURE', state, payload)
            return {
                ...state,
                request: {
                    error: payload,
                    status: REQUEST_STATUS.FAILURE
                }
            };
        }

        case CREATE_ORDER_IN_DB_PENDING: {
            console.log('reducer CREATE_ORDER_IN_DB_PENDING', state, payload);
            return {
                ...state,
                request: {
                    error: null,
                    status: REQUEST_STATUS.PENDING
                }
            };
        }

        case CREATE_ORDER_IN_DB_SUCCESS: {
            console.log('reducer CREATE_ORDER_IN_DB_SUCCESS', state, payload);

            const filterChange = state.orders.filter((item) => {
                return item.id !== payload.id
            });

            return {
                ...state,
                request: {
                    error: null,
                    status: REQUEST_STATUS.SUCCESS
                },
                orders: [...filterChange, payload]
            };
        }

        case CREATE_ORDER_IN_DB_FAILURE: {
            console.log('CREATE_ORDER_IN_DB_FAILURE', state, payload)
            return {
                ...state,
                request: {
                    error: payload,
                    status: REQUEST_STATUS.FAILURE
                }
            };
        }

        default:
            return state
    }
};