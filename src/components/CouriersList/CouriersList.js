import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import {iconCourierStatus} from "../../utils/constants";

export const CouriersList = ({name, couriers, status}) => {
    //console.log('CouriersList',name, couriers)

    return (
        <div>
            <Typography sx={{mt: 3}} variant="h6" component="div">
                {name}
            </Typography>
            <List style={{display: "flex", flexDirection: "column"}}>
                {couriers.map((courier) =>
                    <ListItem key={courier.id}>
                        <ListItemIcon>
                            {iconCourierStatus(status)}
                        </ListItemIcon>
                        {courier.name} ID:{courier.id}
                    </ListItem>)}
            </List>

        </div>
    );
};