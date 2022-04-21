import {Box, Paper, Table, TableContainer} from "@mui/material";
import {List, ListItem} from "@mui/material";
import Message from "../Message/Message";
import React, {useCallback, useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectMessages} from "../../../store/messages/selector";
import {addMessageFb, initMessages} from "../../../store/messages/actions";
import AddForm from "../../AddForm/AddForm";
import {photoURL} from "../../../utils/constants";
import {selectCurrentCourier} from "../../../store/couriers/selector";

export const MessageList = ({chatId}) => {
    const scrollRef = useRef(null);
    const dispatch = useDispatch();
    const messageList = useSelector(selectMessages);
    console.log('messageList', chatId)
    useEffect(() => {
        dispatch(initMessages());
    }, []);

    const handleAddMessage = useCallback(( text, author) => {
            // console.log('handleAddMessage', chatId, text, author)
            dispatch(addMessageFb(chatId, text, author));
        },
        [chatId]
    );

    useEffect(() => {
        if (scrollRef.current) {
             console.log('scrollRef',scrollRef.current)
            return scrollRef.current.scrollIntoView({ behaviour: "smooth" });
        }
    }, [messageList]);


    // const currentCourier = useSelector((state) => selectCurrentCourier(state, +(chatId.replace('chat-',''))) );
    // const setAvatar = () => {
    //     if (currentCourier[0].role_id !== 1)
    //         { console.log('setAvatar admin', chatId, +(chatId.replace('chat-','')), currentCourier, currentCourier[0].photo)
    //             return 'https://klike.net/uploads/posts/2019-11/1573725793_9.jpg'}
    //     else {
    //         const url = photoURL + currentCourier[0].photo
    //         console.log('setAvatar messageList', chatId, currentCourier, currentCourier[0].photo, url)
    //         return url
    //     }
    // }

    return (
        <Box sx={{ml: 8}}>
            <Box
                component={Paper}
                sx={{
                    border: "4px solid rgba(0,0,0,0.2)",
                    padding: 1,
                    width: 600,
                    height: 600,
                    "&::-webkit-scrollbar": {
                        width: 20
                    },
                    "&::-webkit-scrollbar-track": {
                        backgroundColor: "rgba(0,0,0,0.2)"
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "rgba(0,0,0,0.5)",
                        borderRadius: 2
                    },
                    overflowX: "hidden",
                }}
            >
                <List >
                    {Object.values(messageList[chatId] || []).map((message, i) => (

                          <Message key={message.id} id={message.id} text={message.text} author={message.author} avatar={''}  />
                    ))}
                    <ListItem ref={scrollRef} />
                </List>
            </Box>
            <AddForm onAdd={handleAddMessage} rows='3'  label='Message' className='new_message' textButton='Отправить' chatId={chatId} />
        </Box>
    );
};
