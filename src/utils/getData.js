import {couriers, orders} from "./data";

export const getCurrentCourier = (courierID) => {
    console.log('getCourierData',courierID)
    return couriers.filter(item => {
        console.log('item', item)
        return item.id === courierID
    })
}

export const getOrderForCourier = (courierID) => {
    return orders.filter(item => {
        return item.courierID === courierID
    })
}