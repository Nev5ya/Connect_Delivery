import {Box, Grid, Typography} from "@mui/material";

import {useEffect, useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {initChat, initChats} from "../../store/chats/actions";
import {selectChatName, selectIfChatExists} from "../../store/chats/selector";

import {MessageList} from "../Messages/MessageList/MessageList";
import ChatListForCourier from "./ChatList/ChatListForCourier";
import ChatListForAdmin from "./ChatList/ChatListForAdmin";

export const Chat = ({mode, currentCourier}) => {

    const dispatch = useDispatch();
    const [currentChatId, setCurrentChatId] = useState(null);

    useEffect(() => {
        // console.log('useEffect Chat', mode)
        if (mode === "Admin") dispatch(initChats());
        if (mode === "Courier") {
            dispatch(initChat(currentCourier.id));
            setCurrentChatId(`chat-${currentCourier.id}`);
            // console.log('currentChatId2',mode, currentCourier, currentChatId)
        }
    }, [dispatch]);

    const handleSelectChat = (id) => {
        // console.log('handleSelectChat', id)
        setCurrentChatId(`chat-${id}`);
    };

    const selectedChatExists = useMemo(() => selectIfChatExists(currentChatId), [currentChatId]);
    const checkChatId = useSelector(selectedChatExists);
    const selectedChatName = useMemo(() => selectChatName(currentChatId), [currentChatId]);
    const chatNameCourier = useSelector(selectedChatName)
    const chatName = (mode === "Admin") ? chatNameCourier : "Администратор";

    return (
        <Box sx={{mt: 2}}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                    <Box>
                        {(mode === "Admin")
                            ? <ChatListForAdmin onSelectChat={handleSelectChat}/>
                            : (mode === "Courier")
                                ? <ChatListForCourier currentCourier={currentCourier}/>
                                : <></>}
                    </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Box sx={{mb: 2}}>
                        <Typography sx={{mb: 2}} variant="h4">
                            {!!currentChatId && `${chatName}`}
                        </Typography>
                        {!!currentChatId && (checkChatId
                            ? <MessageList chatId={currentChatId}/> : <Typography variant="h4"> Выберите существующий чат </Typography>
                        )}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};
