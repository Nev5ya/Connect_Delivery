import React from 'react';
import { useEffect, useState } from 'react';

import { Link } from "react-router-dom";


import { useDispatch, useSelector } from 'react-redux';

import {makeStyles} from "@mui/styles";
import {Button, Grid, Icon, List, ListItem} from "@mui/material";
import Typography from "@mui/material/Typography";
import {purple} from "@mui/material/colors";
import {selectChats} from "../../../store/chats/selector";
import {addChatFb, deleteChatFb, initChats} from "../../../store/chats/actions";
import AddForm from "../../AddForm/AddForm";
//import './chat-list.css';


// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//       maxWidth: 752,
//     },
//     demo: {
//       backgroundColor: theme.palette.background.paper,
//     },
//     title: {
//       margin: theme.spacing(0, 0, 2),
//     },
//     icon: {
//       marginRight: theme.spacing(0.5),
//       width: 20,
//       height: 20,
//     },
//   }));
//


const ChatList = ( { onSelectChat, chatId }) => {

  // const classes = useStyles();
    // const [chatList, setChatList] = useState([]);
    // const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const chatList = useSelector(selectChats);

  useEffect(() => {
    dispatch(initChats());
  }, []);

  const handleAddChat = (value) => {
      console.log('handleAddChat', value)
      dispatch(addChatFb(value));
  };

  const handleDeleteChat = (id) => {
    dispatch(deleteChatFb(id));
  };



  console.log('chatlist', chatList);
      return (
          <Grid item xs={12} >
          <Typography variant="h6" >
            Список чатов
          </Typography>
          <div >
            <List >
              {chatList.map((item) => (
                <ListItem key={item.id}
                          onClick={() => onSelectChat(item.id)}>
                    {/*<Link to={`/Admin/chats/${item.id}`}>*/}
                      <b style={{ color: item.id === chatId ? "red" : "grey" }}>
                        {item.name}
                      </b>
                    {/*</Link>*/}
                    {!chatId && (<Button
                        onClick={() => handleDeleteChat(item.id)}
                      type="submit"
                      color="primary"

                      endIcon={<Icon>delete</Icon>}>
                    </Button>)}
                </ListItem>),
              )}
            </List>
          </div>

          {(<AddForm onAdd={handleAddChat} rows='1' label='Name chat' className='new_chat' textButton='Create' />)}
          
        </Grid>

      )

}

export default ChatList;
