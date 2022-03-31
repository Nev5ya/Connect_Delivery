import { onValue, ref, set } from '@firebase/database';
import { db } from '../../services/firebase';
import { authorList } from '../../utils/constants';

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const DELETE_MESSAGE = "MESSAGES::DELETE_MESSAGE";
export const SET_MESSAGES = "MESSAGES::SET_MESSAGES";

export const addMessage = (chatId, text, author) => ({
  type: ADD_MESSAGE,
  payload: {chatId, text, author},
});

export const deleteMessage = (id) => ({
  type: DELETE_MESSAGE,
  payload: id,
});

const setMessages = (messages) => ({
  type: SET_MESSAGES,
  payload: messages
});


export const initMessages = () => (dispatch) => {
  console.log('--------initMessages0');
  const messageDbRef = ref(db, 'messages/');
  console.log('--------initMessages00', messageDbRef);
  onValue(messageDbRef, (snapshot) => {
      console.log('initMessages1', snapshot)
      const data = snapshot.val();
      console.log('initMessages2', data);

      dispatch(setMessages((data || {})));
      console.log('--------initMessages', data,);
  });
};

export const addMessageFb = (chatId, text, author) => (dispatch) => {
  const newId = `message-${Date.now()}`;
   console.log('addMessageFb', newId);
   const new_path = `messages/${chatId}/${newId}`;
  const messageDbRef = ref(db, `messages/${chatId}/${newId}`);
   const newd = {
    id: newId,
    text,
    author
  };
  console.log('addMessageFb2',  newd, new_path);
  set(messageDbRef, newd);
  console.log('addMessageFb3');
};