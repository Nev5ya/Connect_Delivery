import {store} from "../index";

export const selectCouriers = (state) => state.couriers.couriers.filter((courier) => {
    return courier.is_deleted !== 1;
});

export const selectCurrentCourier = (state, courierID) => {
    console.log('selectCurrentCourier', courierID, state)
    const couriers = state.couriers.couriers;

    if (courierID === 'undefined' || courierID === '') {
        return ''
    } else {
        return couriers.filter(item => {
            console.log('item2', item)
            return item.id === courierID
        })
    }
};

export const selectCouriersByStatus = (state, status) => {
    const couriers = state.couriers.couriers;
    const filterCouriers =  couriers.filter((courier) => {
        return (courier.user_status === status && courier.is_deleted !== 1);
    })
    console.log('selectCouriersByStatus', status, filterCouriers)
    return filterCouriers
}
