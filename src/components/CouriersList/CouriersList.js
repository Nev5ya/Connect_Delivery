import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {BuildCircleOutlined} from "@mui/icons-material";
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';

import {couriers} from "../../utils/data";
import {iconCourierStatus} from "../../utils/constants";

export const CouriersList = ({name, couriers, status}) => {
    console.log('CouriersList',name, couriers)

    return (
        <div sx={{mt: 2, mb: 8}}>
            <Typography sx={{mt: 2, mb: 8}} variant="h6" component="div">
                {name}
            </Typography>
            <List style={{display: "flex", flexDirection: "column"}}>
                {couriers.map((courier) =>
                    <ListItem key={Math.random()}>
                        <ListItemIcon>
                            {iconCourierStatus(status)}
                        </ListItemIcon>
                        {courier.name} ID:{courier.user_id}
                    </ListItem>)}
            </List>

        </div>
    );
};