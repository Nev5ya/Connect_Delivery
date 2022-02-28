import {couriers, orders} from "./data";

export const getCurrentCourier = (courierID) => {
    console.log('getCourierData',courierID)
    if (courierID === 'undefined' || courierID === '') {
        return ''
    } else {
        return couriers.filter(item => {
            console.log('item', item)
            return item.id === courierID
        })
    }
}

export const getOrderForCourier = (courierID) => {
    return orders.filter(item => {
        return item.courierID === courierID
    })
}

export const getCouriersOnline = couriers.filter((courier) => {
    return courier.status === 'online'

})
export const getCouriersWork = couriers.filter((courier) => {
    return courier.status === 'work'

})
export const getCouriersOffline = couriers.filter((courier) => {
    return courier.status === 'offline'

})