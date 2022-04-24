import {REQUEST_STATUS} from "../../utils/constants";

export const selectOrders = (state) => state.orders.orders
    .sort(function(a, b){
      return a.id-b.id
    });
export const selectOrderLoading = (state) => state.orders.request.status === REQUEST_STATUS.PENDING;

export const selectRequestOrders = (state) => {
    // console.log('selectRequestOrders', state)
    return state.orders.request
};

export const selectOrdersWithOutUserId = (state) => {
     // console.log('selectOrdersSort1', state)
    return state.orders.orders
    .sort(function(a, b){
        return a.id-b.id
    }).filter((item) => {
        // console.log('item.user_id', item.user_id)
    return item.user_id == null
})};

export const selectOrdersWithUserId = (state) => {
    if (state.orders.orders === null) {
        return []
    }
    else {
        return state.orders.orders
            // .sort(function(a, b){
            //     return a.id-b.id
            // })
            .filter((item) => {
                return item.user_id !== null
            });
    }
};
export const selectTransitOrderForCourier = (state, courierID) => {
    const orders = state.orders.orders;
     const a = orders.filter(item => {
         // console.log('selectTransitOrderForCourier2', item.user_id , courierID ,  item.order_status_id)
        return (item.user_id === courierID && item.order_status_id !== 3) //status: "transit"
    })
    return a
};

export const selectDeliveredOrdersForCourier = (state, courierID) => {
     // console.log('selectDeliveredOrdersForCourier', state, state.orders)
    const orders = state.orders.orders;
    return orders.filter(item => {
        return (item.user_id === courierID && item.order_status_id === 3) //status: "delivered"
    })
};

export const selectOrdersForPagin = (state, orders, pageQtl, currentPage) => {
    // console.log('selectOrdersForHistory1', orders, pageQtl, currentPage)
    if ((orders === null) | (orders === 'undefined')) {
        return []
    } else {
        const startIndex = (currentPage) * pageQtl;
        const endIndex = startIndex + pageQtl;
        orders = orders
                .sort(function(a, b){
                    if ((a.status === b.status) && (a.order_status_id === 2)) {
                        return new Date(b.updated_at) - new Date(a.updated_at)
                    }
                    else if ((a.status === b.status) && (a.order_status_id === 3)) {
                        return new Date(b.updated_at) - new Date(a.updated_at)
                    }
                    else if ((a.status !== b.status) && (a.order_status_id === 2)) {
                        return -1
                        }
                    else return (a.id - b.id)
            })
        // console.log('selectOrdersSort', orders)
        const ordersForPagin = orders.slice(startIndex, endIndex);
        // console.log('selectOrdersForHistory', pageQtl, currentPage, ordersForPagin)
        return ordersForPagin;
    }
};


