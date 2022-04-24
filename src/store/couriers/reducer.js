import {
    CHANGE_COURIERS_IN_DB_FAILURE,
    CHANGE_COURIERS_IN_DB_PENDING,
    CHANGE_COURIERS_IN_DB_SUCCESS,
    DELETE_COURIERS_IN_DB_FAILURE,
    DELETE_COURIERS_IN_DB_PENDING,
    DELETE_COURIERS_IN_DB_SUCCESS,
    GET_COURIERS_FROM_DB,
    REGISTER_COURIERS_IN_DB_FAILURE,
    REGISTER_COURIERS_IN_DB_PENDING,
    REGISTER_COURIERS_IN_DB_SUCCESS
} from "./actions";
import {REQUEST_STATUS} from "../../utils/constants";

const initialState = {
  couriers: [],
  request: {
    error: null,
    status: REQUEST_STATUS.IDLE,
  },
};

export const couriersReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_COURIERS_FROM_DB: {
            const new_st = {...state, couriers: payload}
            return new_st
        };

        case CHANGE_COURIERS_IN_DB_PENDING: {
          return {
            ...state,
            request: {
              error: null,
              status: REQUEST_STATUS.PENDING
            }
          };
        };

        case CHANGE_COURIERS_IN_DB_SUCCESS: {
          // console.log('reducer CHANGE_COURIERS_IN_DB_SUCCESS', state, payload);

          const filterChange = state.couriers.filter((item) => {
            return item.id !== payload.id
          });

          return {
            ...state,
            request: {
              error: null,
              status: REQUEST_STATUS.SUCCESS
            },
            couriers: [...filterChange, payload]
          };
        };

        case CHANGE_COURIERS_IN_DB_FAILURE: {
          return {
            ...state,
            request: {
              error: payload,
              status: REQUEST_STATUS.FAILURE
            }
          };
        };

        case REGISTER_COURIERS_IN_DB_PENDING: {
          return {
            ...state,
            request: {
              error: null,
              status: REQUEST_STATUS.PENDING
            }
          };
        };

        case REGISTER_COURIERS_IN_DB_SUCCESS: {
          const filterChange = state.couriers.filter((item) => {
            return item.id !== payload.id
          });

          return {
            ...state,
            request: {
              error: null,
              status: REQUEST_STATUS.SUCCESS
            },
            couriers: [...filterChange, payload]
          };
        };

        case REGISTER_COURIERS_IN_DB_FAILURE: {
            return {
                ...state,
                request: {
                    error: payload,
                    status: REQUEST_STATUS.FAILURE
                }
            };
        };

        case DELETE_COURIERS_IN_DB_PENDING: {
            return {
                ...state,
                request: {
                    error: null,
                    status: REQUEST_STATUS.PENDING
                }
            };
        };

        case DELETE_COURIERS_IN_DB_SUCCESS: {

            if (payload === 'undefined' || payload === 'null') {
                return state
            }
            const filterDel = state.couriers.filter((item) => {
                return item.id !== payload.id
            })
            const new_stDel = {...state, couriers: [...filterDel]}

            return new_stDel
        };

        case DELETE_COURIERS_IN_DB_FAILURE: {
            return {
                ...state,
                request: {
                    error: payload,
                    status: REQUEST_STATUS.FAILURE
                }
            };
        };

        default:
                return state
        };
};
