import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { profileReducer } from "./profile/reducer";
import { homeReducer } from "./home/reducer";
import {ordersReducer} from "./orders/reducer";
import {couriersReducer} from "./couriers/reducer";

const persistConfig = {
  key: "Alex_P_01.2022",
  storage: storage,
  blacklist: ['orders'],
};
const orderPersistConfig = {
  key: 'orders',
  storage: storage,
  blacklist: ['currentPageAdmin', 'currentPageHistory'],
};

export const rootReducer = combineReducers({
  profile: profileReducer,
  home: homeReducer,
  orders: persistReducer(orderPersistConfig, ordersReducer),
  couriers: couriersReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export const persistor = persistStore(store);
