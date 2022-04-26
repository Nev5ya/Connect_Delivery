import React from "react";

import {
    Box,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Avatar,
    Paper,
    Badge,
    Typography
} from '@mui/material';

import {useDispatch, useSelector} from "react-redux";
import {addChatFb} from "../../../store/chats/actions";
import {selectChats} from "../../../store/chats/selector";

export default function ChatListForCourier({currentCourier}) {
    const courierID = +localStorage.getItem('id_user');
    const courierName = localStorage.getItem('name_user');
    const dispatch = useDispatch();

    const chatList = useSelector(selectChats);

    // useEffect(() => {
    //     console.log('useEffect ChatListForCourier', chatList, currentCourier)
    // });

    const handleAddChat = (id, name) => {
        // console.log('handleAddChat', id, name)
        dispatch(addChatFb(id, name));
    };

    return (
        <Box sx={{width: '100%'}}>
            <Typography variant="h4">
                Список чатов
            </Typography>
            <Paper elevation={3} sx={{mt: 2}}>
                <List>
                    <ListItem key={courierID}>
                        <ListItemAvatar>
                            <Badge color="secondary" overlap="circular" badgeContent={1}>
                                <Avatar/>
                            </Badge>
                        </ListItemAvatar>
                        <ListItemText primary='Чат с администратором'/>
                    </ListItem>

                </List>
            </Paper>
        </Box>
    );
};