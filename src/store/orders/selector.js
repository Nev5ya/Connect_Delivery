import {store} from "../index";

export const selectOrders = (state) => state.orders.orders
    .sort(function(a, b){
      return a.id-b.id
    });

export const selectOrdersWithOutUserId = (state) => {
     // console.log('selectOrdersSort1', state)
    return state.orders.orders
    .sort(function(a, b){
        return a.id-b.id
    }).filter((item) => {
        // console.log('item.user_id', item.user_id)
    return item.user_id == null
})};

export const selectOrdersWithUserId = (state) => state.orders.orders
    .sort(function(a, b){
        return a.id-b.id
    }).filter((item) => {
        return item.user_id !== null
    });

export const selectTransitOrderForCourier = (state, courierID) => {
     console.log('selectTransitOrderForCourier', state, state.orders)
    const orders = state.orders.orders;
     const a = orders.filter(item => {
         console.log('selectTransitOrderForCourier2', item.user_id , courierID ,  item.order_status_id)
        return (item.user_id === courierID && item.order_status_id !== 3) //status: "transit"
    })
    console.log('selectTransitOrderForCourier1', a)
    return a
};

export const selectDeliveredOrdersForCourier = (state, courierID) => {
     // console.log('selectDeliveredOrdersForCourier', state, state.orders)
    const orders = state.orders.orders;
    return orders.filter(item => {
        return (item.user_id === courierID && item.order_status_id === 3) //status: "delivered"
    })
};

export const selectOrdersforPaginAdmin = (state) => {
    let { orders, currentPageAdmin, pageQtlAdmin } = state.orders;
    const startIndexAdmin = (currentPageAdmin - 1) * pageQtlAdmin;
    const endIndexAdmin = startIndexAdmin + pageQtlAdmin;
    orders = orders.sort(function(a, b){
        return a.id-b.id
    }).filter((item) => {
        return item.user_id == null
    });
    const ordersAdmin = orders.slice(startIndexAdmin, endIndexAdmin);
    return ordersAdmin;
};
export const selectOrdersforPaginHistory = (state) => {
    let { orders, currentPageHistory, pageQtlHistory } = state.orders;
    const startIndexHistory = (currentPageHistory - 1) * pageQtlHistory;
    const endIndexHistory = startIndexHistory + pageQtlHistory;
    orders = orders.sort(function(a, b){
        return a.id-b.id
    }).filter((item) => {
        return item.user_id !== null
    })
    const ordersHistory = orders.slice(startIndexHistory, endIndexHistory);
    console.log('selectOrdersforPaginHistory', orders)
    return ordersHistory;
};

