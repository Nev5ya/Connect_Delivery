import {Box, Paper, List, ListItem} from "@mui/material";

import React, {useCallback, useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";

import {selectMessages} from "../../../store/messages/selector";
import {addMessageFb, initMessages} from "../../../store/messages/actions";

import Message from "../Message/Message";
import AddForm from "../../AddForm/AddForm";

export const MessageList = ({chatId}) => {
    const scrollRef = useRef(null);
    const dispatch = useDispatch();
    const messageList = useSelector(selectMessages);
    console.log('messageList', chatId, messageList)
    useEffect(() => {
        dispatch(initMessages());
    }, []);

    const handleAddMessage = useCallback((text, author) => {
            // console.log('handleAddMessage', chatId, text, author)
            dispatch(addMessageFb(chatId, text, author));
        },
        [chatId]
    );

    useEffect(() => {
        if (scrollRef.current) {
            console.log('scrollRef', scrollRef.current)
            return scrollRef.current.scrollIntoView({behaviour: "smooth"});
        }
    }, [messageList[chatId]]);


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
        <>
            <Paper elevation={3} sx={{
                width: '100%',
                height: 600,
                overflowX: "hidden",
            }}
            >
                {Object.values(messageList[chatId] || []).map((message, i) => (
                    <Message key={message.id} id={message.id} text={message.text} author={message.author} avatar={''}/>
                ))}
                <Box ref={scrollRef}/>
            </Paper>
            <AddForm onAdd={handleAddMessage} rows='2' label='Message' className='new_message' textButton='Отправить'
                     chatId={chatId}/>
        </>
    );
};
