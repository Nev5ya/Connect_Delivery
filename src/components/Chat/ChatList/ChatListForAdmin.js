import {
    List,
    ListItemButton,
    ListItemAvatar,
    ListItemText,
    Avatar,
    Badge,
    Paper,
    Typography,
    Box
} from '@mui/material';

// import React, {useState} from "react";
// import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

import {selectCouriers} from "../../../store/couriers/selector";
// import {selectChats} from "../../../store/chats/selector";
// import {addChatFb} from "../../../store/chats/actions";

// import AddCommentSharpIcon from '@mui/icons-material/AddCommentSharp';
// import Tooltip from "@mui/material/Tooltip";

export default function ChatListForAdmin({onSelectChat}) {
    // const userID = +localStorage.getItem('id_user');
    // const userName = localStorage.getItem('id_name');

    // const dispatch = useDispatch();

    // const chatList = useSelector(selectChats);
    const usersList = useSelector(selectCouriers);

    /////Записываем курьера, на котором произведен клик //
    // let [userCurrent, setUserCurrent] = useState(null);

    const onClickHandle = (courier, event) => {
        // setUserCurrent(courier);
        onSelectChat(courier.id);

    };

    // const onChangeActiveColor = (id) => {
    //     // console.log('onChangeActiveColor', id, courierCurrent)
    //     if (userCurrent !== null && id !== null) {
    //         return id === userCurrent.id ? "red" : "black";
    //     } else {
    //         return "black";
    //     }
    // };

    // const handleAddChat = (id, name) => {
    //     dispatch(addChatFb(id, name));
    // };

    return (
        <Box sx={{width: '100%'}}>
            <Typography variant="h4">
                Список чатов
            </Typography>
            <Paper elevation={3} sx={{mt: 2}}>
                <List>
                    {usersList.map((courier) => (
                            <ListItemButton
                                key={courier.id}
                                // secondaryAction={
                                //     <>
                                //         {chatList.filter((ch) =>
                                //             `chat-${courier.id}` === ch.id && ch.name === courier.name).length === 0//
                                //             ? <Tooltip title="Создать чат">
                                //                 <IconButton
                                //                     edge='end'
                                //                     aria-label='AddChat'
                                //                     onClick={() => handleAddChat(courier.id, courier.name)}>
                                //                     <AddCommentSharpIcon/>
                                //                 </IconButton>
                                //             </Tooltip>
                                //             : <></>
                                //         }
                                //     </>
                                // }
                                onClick={(event) => onClickHandle(courier, event)}
                            >
                                <ListItemAvatar>
                                    <Badge color="secondary" overlap="circular" badgeContent={0}>
                                        <Avatar/>
                                    </Badge>
                                </ListItemAvatar>
                                <ListItemText primary={courier.name}/>
                            </ListItemButton>
                        )
                    )}
                </List>
            </Paper>
        </Box>
    );
};