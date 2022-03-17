import {store} from "../store";


// export const getCurrentCourier = (courierID) => {
//     console.log('item2courierID', courierID)
//     const couriers = store.getState().couriers.couriers
//     if (courierID === 'undefined' || courierID === '') {
//         return ''
//     } else {
//         return couriers.filter(item => {
//             console.log('item2', item)
//             return item.id === courierID
//         })
//     }
//     // return 'aaa'
// }
//
// export const getOrderForCourier = (courierID) => {
//     const orders = store.getState()
//     console.log('item1', orders, orders.orders.orders)
//     return orders.orders.orders.filter(item => {
//         return item.user_id === courierID
//     })
// }

// export const getCouriersByStatus = (status) => {
//     const couriers = store.getState().couriers.couriers
//     const a =  couriers.filter((courier) => {
//
//         return courier.user_status === status;
//
//     })
//     console.log('getCouriersByStatus', status, a)
//     return a
// }

// export const getCouriersOnline = () => {
//     const couriers = store.getState().couriers.couriers
//     const a =  couriers.filter((courier) => {
//
//         return courier.user_status === 'online'
//
//     })
//     console.log('getCouriersOnline', a)
//     return a
// }
// export const getCouriersWork = () => {
//     const couriers = store.getState().couriers.couriers
//     return couriers.filter((courier) => {
//         return courier.user_status === 'work'
//
//     })
// }
// export const getCouriersOffline = () => {
//     const couriers = store.getState().couriers.couriers
//     return couriers.filter((courier) => {
//         return courier.user_status === 'offline'
//
//     })
// }