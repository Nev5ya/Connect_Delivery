import {useState} from "react";
import {ToggleButton} from "@mui/material";
import Typography from "@mui/material/Typography";

export const CourierStatusChange = () => {
    const [status, setStatus] = useState('offline');

    const toggleStatus = (event) => {
        event.preventDefault();

        setStatus ((status) =>
            status === 'online' ? 'offline' : 'online'
        )
    }
    return (
        <div>
            <Typography>Изменить статус на:
                <ToggleButton value={status} style={{borderColor: 'none'}} onClick={toggleStatus}>{status}</ToggleButton>
            </Typography>

        </div>
    );
};