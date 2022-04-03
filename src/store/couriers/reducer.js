import {
  CHANGE_COURIERS_IN_DB_FAILURE,
  CHANGE_COURIERS_IN_DB_PENDING,
  CHANGE_COURIERS_IN_DB_SUCCESS,
  DELETE_COURIERS_IN_DB,
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
  console.log('st111', state, type)
  switch (type) {
    case GET_COURIERS_FROM_DB: {
      console.log('reducer', state, payload)
      const new_st = {...state, couriers: payload} //{...state, couriers: [...state.couriers, ...payload]}
      console.log('new_st', new_st, state)
      return new_st
    }
    case CHANGE_COURIERS_IN_DB_PENDING: {
      return {
        ...state,
        request: {
          error: null,
          status: REQUEST_STATUS.PENDING
        }
      };
    }

    case CHANGE_COURIERS_IN_DB_SUCCESS: {
      console.log('reducer CHANGE_COURIERS_IN_DB_SUCCESS', state, payload);

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
    }
    case CHANGE_COURIERS_IN_DB_FAILURE: {
      console.log('CHANGE_COURIERS_IN_DB_FAILURE', state, payload)
      return {
        ...state,
        request: {
          error: payload,
          status: REQUEST_STATUS.FAILURE
        }
      };
    }
    case REGISTER_COURIERS_IN_DB_PENDING: {
      return {
        ...state,
        request: {
          error: null,
          status: REQUEST_STATUS.PENDING
        }
      };
    }

    case REGISTER_COURIERS_IN_DB_SUCCESS: {
      console.log('reducer REGISTER_COURIERS_IN_DB_SUCCESS', state, payload);

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
    }

    case REGISTER_COURIERS_IN_DB_FAILURE: {
      console.log('REGISTER_COURIERS_IN_DB_FAILURE', state, payload)
      return {
        ...state,
        request: {
          error: payload,
          status: REQUEST_STATUS.FAILURE
        }
      };

    }

    case DELETE_COURIERS_IN_DB: {
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



        // // Courier Status Change
        // case CHANGE_COURIERS_STATUS_IN_DB: {
        //     const filterChange = state.couriers.filter((item) => {
        //         return item.id !== payload.id
        //     });
        //
        //     return {
        //         ...state,
        //         courierStatusUpdate: REQUEST_STATUS.SUCCESS,
        //         couriers: [...filterChange, payload]
        //     };
        }

        default:
            return state
    }
};
