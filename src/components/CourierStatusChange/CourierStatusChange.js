import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeCourier, changeCourierStatus} from "../../store/couriers/actions";
import {selectRequestCouriers, selectUpdateStatus} from "../../store/couriers/selector";

export const CourierStatusChange = (props) => {
    const courier = props?.courier[0];
    const statusId = courier?.user_status_id - 1;
    const [checked, setChecked] = useState(!!statusId);
    const dispatch = useDispatch();

    let label; /////нужно правильно заполнить справочник на сервере и выводить поле user_status
    if (statusId === 1) label = 'Online';
    else if (statusId === 2) label = 'Busy';
    else label = 'Offline';

    const requestCouriers = useSelector(selectRequestCouriers);

    const onChangeStatus = (courier_id, event) => {
        console.log('onChangeStatus', event)
        dispatch(changeCourier({id: courier_id, user_status_id: event}));
    };

    const handleChange = (event) => {
        onChangeStatus(courier?.id, event.target.checked + 1);
        if (requestCouriers.error === null) setChecked(event.target.checked);
    };

    return (
        <>
            <FormGroup sx={{ml: 6}}>
                <FormControlLabel
                    control={<Switch checked={checked} onChange={handleChange} disabled={props.courierBusy}/>}
                    label={label}/>
            </FormGroup>
        </>
    );
};
