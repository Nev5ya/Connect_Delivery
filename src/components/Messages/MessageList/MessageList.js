
import Typography from "@mui/material/Typography";
import {Box} from "@mui/system";
// import MessageAddForm from "../MessageAddForm/MessageAddForm";
// import {List, ListItem} from "@mui/material";
// import Message from "../Message/Message";
import {makeStyles} from "@mui/styles";
// import {useEffect, useRef} from "react";
// import {useDispatch, useSelector} from "react-redux";
// import {selectMessages} from "../../../store/messages/selector";
// import {initMessages} from "../../../store/messages/actions";

const useStyles = makeStyles((theme) => ({
    list: {

        width: '100%',
        // maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 500,
        minHeight: 500
    },

}));

export const MessageList = ({chatCurrent}) => {
    // const classes = useStyles();
    //
    // const scrollRef = useRef(null);
    // const dispatch = useDispatch();
    // const messageList = useSelector(selectMessages);
    //
    // useEffect(() => {
    //     dispatch(initMessages());
    // }, []);
    //
    // const handleAddMessage = useCallback((text, author) => {
    //         dispatch(addMessageWithReply(chatId, text, author));
    //     },
    //     []
    // );

    // useEffect(() => {
    //     if (scrollRef.current) {
    //         console.log('scrollRef',scrollRef.current)
    //         return scrollRef.current.scrollIntoView({ behaviour: "smooth" });
    //     }
    // }, [messageList]);
    //
    // console.log('messExist messageListExtended', messageList[chatId]);

    return (
        <Box sx={{ml: 8}}>
            <Typography variant="h6" >
                Сообщения чата {chatCurrent.name}
            </Typography>
            {/*<List className={classes.list}>*/}
            {/*    {Object.values(messageList[chatId] || []).map((message, i) => (*/}
            {/*        <Message key={message.id} text={message.text} author={message.author} id={message.id}  />*/}
            {/*    ))}*/}
            {/*    <ListItem ref={scrollRef} />*/}
            {/*</List>*/}
            {/*<MessageAddForm onAdd={handleAddMessage} rows='3'  label='Message' className='new_message' textButton='Send' chatId={chatCurrent.id} />*/}
        </Box>
    );
};
