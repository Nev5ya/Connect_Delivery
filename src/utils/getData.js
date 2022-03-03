import {store} from "../store";


export const getCurrentCourier = (courierID) => {
    const couriers = store.getState().couriers.couriers
    if (courierID === 'undefined' || courierID === '') {
        return ''
    } else {
        return couriers.filter(item => {
            //console.log('item', item)
            return item.user_id === courierID
        })
    }
    // return 'aaa'
}

export const getOrderForCourier = (courierID) => {
    const orders = store.getState()
    console.log('item', orders.orders.orders)
    return orders.orders.orders.filter(item => {
        return item.user_id === courierID
    })
}


export const getCouriersOnline = () => {
    const couriers = store.getState().couriers.couriers
    const a =  couriers.filter((courier) => {

        return courier.user_status === 0 //'online'

    })
    console.log('getCouriersOnline', a)
    return a
}
export const getCouriersWork = () => {
    const couriers = store.getState().couriers.couriers
    return couriers.filter((courier) => {
        return courier.user_status === 1 //'work'

    })
}
export const getCouriersOffline = () => {
    const couriers = store.getState().couriers.couriers
    return couriers.filter((courier) => {
        return courier.user_status === 2 //'offline'

    })
}