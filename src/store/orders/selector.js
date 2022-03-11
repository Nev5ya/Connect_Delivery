export const selectOrders = (state) => state.orders.orders
    .sort(function(a, b){
      return a.id-b.id
    });

export const selectOrdersWithOutUserId = (state) => {
     console.log('selectOrdersSort1', state)
    return state.orders.orders
    .sort(function(a, b){
        return a.id-b.id
    }).filter((item) => {
        console.log('item.user_id', item.user_id)
    return item.user_id == null
})};

export const selectOrdersWithUserId = (state) => state.orders.orders
    .sort(function(a, b){
        return a.id-b.id
    }).filter((item) => {
        return item.user_id !== null
    });

