import {
    Box,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Avatar,
    IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MailIcon from '@mui/icons-material/Mail';

import { Demo, StyledBadge } from './ChatListStyle';
import {useState} from "react";
import {MessageList} from "../../Messages/MessageList/MessageList";

export default function ChatList({couriers}) {

    /////Записываем курьера, на котором произведен клик //
    let [courierCurrent, setCourierCurrent] = useState(null);
    const onClickHandle = (courier, event) => {
        setCourierCurrent(courier);

        console.log('ChatList ', courier,  event, courierCurrent);
    };

    const onChangeActiveColor = (id) => {
        console.log('onChangeActiveColor', id, courierCurrent)
        if (courierCurrent != null) {
            return id === courierCurrent.id ? "red" : "black";
        }
        else {
            return "black";
        }
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: 350,
                }}
            >
                <Demo sx={{ mt: 1, mb: 2 }}>
                    <List sx={{ display: 'flex', flexDirection: 'column' }}>
                        {couriers.map((courier) => {
                            return (
                                <ListItem
                                    sx={{'&:hover': {color:'green', cursor: 'pointer'}, color: (onChangeActiveColor(couriers.id)) }}
                                    key={courier.id}
                                    secondaryAction={
                                        <IconButton edge='end' aria-label='delete'>
                                            <DeleteIcon />
                                        </IconButton>
                                    }
                                    onClick={(event) => onClickHandle(courier, event)}
                                >
                                    <ListItemAvatar>
                                        <Avatar>
                                            <StyledBadge badgeContent={1}>
                                                <MailIcon color='action' />
                                            </StyledBadge>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={courier.name} />
                                </ListItem>
                            );
                        })}
                    </List>
                </Demo>
            </Box>
            { courierCurrent && <MessageList chatCurrent={courierCurrent}/>}
        </Box>
    );
};