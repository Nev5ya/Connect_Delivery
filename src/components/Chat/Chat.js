import ChatList_ from "./ChatList/ChatList";
import {useDispatch, useSelector} from "react-redux";
import {selectCouriers} from "../../store/couriers/selector";
import Typography from "@mui/material/Typography";
import {MyButtonContained} from "../Button/button";
import {Box} from "@mui/material";
import {deleteCourier} from "../../store/couriers/actions";
import {addChatFb, deleteChatFb, initChat, initChats} from "../../store/chats/actions";
import {useEffect, useMemo, useState} from "react";
import {useParams} from "react-router-dom";
import {selectChatName, selectIfChatExists} from "../../store/chats/selector";
import {MessageList} from "../Messages/MessageList/MessageList";
import ChatList from "./ChatList/ChatListForAdmin";
import ChatListForCourier from "./ChatList/ChatListForCourier";
import ChatListForAdmin from "./ChatList/ChatListForAdmin";

export const Chat = ({mode, currentCourier}) => {

    const dispatch = useDispatch();
    const [currentChatId, setCurrentChatId] = useState(null);

    useEffect(() => {
        console.log('useEffect Chat', mode)
        if (mode === "Admin") dispatch(initChats());
        if (mode === "Courier") {
            dispatch(initChat(currentCourier.id));
            setCurrentChatId(`chat-${currentCourier.id}`);
            console.log('currentChatId2',mode, currentCourier, currentChatId)}
    }, []);

    const handleSelectChat = (id) => {
        console.log('handleSelectChat', id)
        setCurrentChatId(`chat-${id}`);
    };

    const selectedChatExists = useMemo(() => selectIfChatExists(currentChatId), [currentChatId]);
    const checkChatId = useSelector(selectedChatExists);
    const selectedChatName = useMemo(() => selectChatName(currentChatId), [currentChatId]);
    const chatName = useSelector(selectedChatName);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Box >
                {(mode === "Admin")
                    ? <ChatListForAdmin onSelectChat={handleSelectChat}/>
                    : (mode === "Courier")
                        ? <ChatListForCourier currentCourier={currentCourier}/>
                        : <></>}
            </Box>
            <Box >
                <Typography sx={{ mb: 2, ml:15 }} variant="h5" >
                    {!!currentChatId && `ЧАТ - ${chatName}`}
                </Typography>
                {!!currentChatId && (checkChatId
                    ? (
                        <>
                            <div>
                                <MessageList chatId={currentChatId}/>
                            </div>
                        </>
                    )
                    : <Typography variant="h2" > Выберите существующий чат </Typography>)}
            </Box>
        </Box>
    );
};
