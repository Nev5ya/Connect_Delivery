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
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectCouriers} from "../../../store/couriers/selector";
import {addChatFb} from "../../../store/chats/actions";
import {selectChats} from "../../../store/chats/selector";
import AddCommentSharpIcon from '@mui/icons-material/AddCommentSharp';
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

export default function ChatListForAdmin({onSelectChat}) {
    // const userID = +localStorage.getItem('id_user');
    // const userName = localStorage.getItem('id_name');

    const dispatch = useDispatch();

    const chatList = useSelector(selectChats);
    const usersList =  useSelector(selectCouriers);

    /////Записываем курьера, на котором произведен клик //
    let [userCurrent, setUserCurrent] = useState(null);

    const onClickHandle = (courier, event) => {
        setUserCurrent(courier);
        onSelectChat(courier.id);

    };

    const onChangeActiveColor = (id) => {
        // console.log('onChangeActiveColor', id, courierCurrent)
        if (userCurrent !== null && id !== null) {
            return id === userCurrent.id ? "red" : "black";
        }
        else {
            return "black";
        }
    };

    const handleAddChat = (id, name) => {
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
                        {usersList.map((courier) => {
                                // chatList.filter((ch) =>
                                // `chat-${courier.id}` === ch.id ).length === 0)//&& ch.name === courier.name
                            return (
                                <ListItem
                                    sx={{'&:hover': {color:'green', cursor: 'pointer'},
                                        color: (onChangeActiveColor(courier.id)) }}
                                    key={courier.id}
                                    secondaryAction={
                                    <>
                                        { chatList.filter((ch) =>
                                            `chat-${courier.id}` === ch.id && ch.name === courier.name).length === 0//
                                           ?<Tooltip title="Создать чат">
                                                <IconButton
                                                    edge='end'
                                                    aria-label='AddChat'
                                                    onClick={()=>handleAddChat(courier.id, courier.name)}>
                                                    <AddCommentSharpIcon />
                                                </IconButton>
                                            </Tooltip>
                                            : <></>
                                        }
                                    </>
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

        </Box>
    );
};