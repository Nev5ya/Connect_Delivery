import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeCourierStatus} from "../../store/couriers/actions";
import {selectUpdateStatus} from "../../store/couriers/selector";

export const CourierStatusChange = (props) => {
    const courier = props?.courier[0];
    const statusId = courier?.user_status_id - 1;
    const [checked, setChecked] = useState(!!statusId);
    const dispatch = useDispatch();

    let label;
    if (statusId === 1) label = 'Online';
    else if (statusId === 2) label = 'Busy';
    else label = 'Offline';

    const courierStatusUpdate = useSelector(selectUpdateStatus);

    const onChangeStatus = (courier_id, event) => {
        dispatch(changeCourierStatus(courier_id, event));
    };

    const handleChange = (event) => {
        onChangeStatus(courier?.id, event.target.checked + 1);
        if (courierStatusUpdate === 2) setChecked(event.target.checked);
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