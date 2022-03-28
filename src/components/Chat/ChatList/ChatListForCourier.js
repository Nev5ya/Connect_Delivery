import {
    Box,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Avatar,
    IconButton,
} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import { Demo, StyledBadge } from './ChatListStyle';
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addChatFb} from "../../../store/chats/actions";
import {selectChats} from "../../../store/chats/selector";
import AddCommentSharpIcon from '@mui/icons-material/AddCommentSharp';
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

export default function ChatListForCourier({currentCourier}) {

    const dispatch = useDispatch();

    const chatList = useSelector(selectChats);

    useEffect(() => {
        console.log('useEffect ChatListForCourier', chatList, currentCourier)
    });

    const handleAddChat = (id, name) => {
        console.log('handleAddChat', id, name)
        dispatch(addChatFb(id, name));
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
                <Typography variant="h5" >
                    Список чатов
                </Typography>
                <Demo sx={{ mt: 1, mb: 2 }}>
                    <List sx={{ display: 'flex', flexDirection: 'column' }}>
                        <ListItem
                            key={currentCourier.id}
                            secondaryAction={
                            <>
                                { chatList.filter((ch) =>
                                    `chat-${currentCourier.id}` === ch.id && ch.name === currentCourier.name).length === 0
                                   ?<Tooltip title="Создать чат">
                                        <IconButton
                                            edge='end'
                                            aria-label='AddChat'
                                            onClick={()=>handleAddChat(currentCourier.id, currentCourier.name)}>
                                            <AddCommentSharpIcon />
                                        </IconButton>
                                    </Tooltip>
                                    : <></>
                                }
                            </>
                            }
                        >
                            <ListItemAvatar>
                                <Avatar>
                                    <StyledBadge badgeContent={1}>
                                        <MailIcon color='action' />
                                    </StyledBadge>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary='Чат с администратором' />
                        </ListItem>

                    </List>
                </Demo>
            </Box>

        </Box>
    );
};