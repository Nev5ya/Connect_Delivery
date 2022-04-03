import {REQUEST_STATUS} from "../../utils/constants";



export const selectCouriers = (state) => state.couriers.couriers.filter((courier) => {
    return courier.is_deleted !== 1;
});

export const selectRegisterLoading = (state) => state.couriers.request.status === REQUEST_STATUS.PENDING;

export const selectCurrentCourier = (state, courierID) => {
    // console.log('selectCurrentCourier', courierID, state)
    const couriers = state.couriers.couriers;

    if (courierID === 'undefined' || courierID === '') {
        return ''
    } else {
        return couriers.filter(item => {
            // console.log('item2', item)
            return item.id === courierID
        })
    }
};

export const selectCouriersByStatus = (state, status_id) => {
    const couriers = state.couriers.couriers;
    const filterCouriers =  couriers.filter((courier) => {
        return (courier.user_status_id === status_id && courier.is_deleted !== 1);
    })
     console.log('selectCouriersByStatus', status_id, filterCouriers)
    return filterCouriers
};

export const selectRequestCouriers = (state) => {
     console.log('selectRequestCouriers', state)
    return state.couriers.request
};

// export const selectUpdateStatus = (state) => {
//     console.log('selectUpdateStatus', state.couriers)
//     return state.couriers.courierStatusUpdate;
// };

