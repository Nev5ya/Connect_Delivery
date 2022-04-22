import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Button, Grid, Icon, List, ListItem} from "@mui/material";
import Typography from "@mui/material/Typography";
import {selectChats} from "../../../store/chats/selector";
import {addChatFb, deleteChatFb, initChats} from "../../../store/chats/actions";
import AddForm from "../../AddForm/AddForm";

const ChatList = ( { onSelectChat, chatId }) => {

  const dispatch = useDispatch();
  const chatList = useSelector(selectChats);

  useEffect(() => {
    dispatch(initChats());
  }, []);

  const handleAddChat = (value) => {
      // console.log('handleAddChat', value)
      dispatch(addChatFb(value));
  };

  const handleDeleteChat = (id) => {
    dispatch(deleteChatFb(id));
  };
  // console.log('chatlist', chatList);
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
};

export default ChatList;
