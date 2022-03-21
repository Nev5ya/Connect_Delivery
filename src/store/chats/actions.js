import { onValue, ref, remove, set } from "@firebase/database";
import { db } from "../../services/firebase";

  
export const ADD_CHAT = "CHATS::ADD_CHAT";
export const DELETE_CHAT = "CHATS::DELETE_CHAT";
export const SET_CHATS = "CHATS::SET_CHATS";

export const addChat = (name) => ({
  type: ADD_CHAT,
  payload: name,
});

export const deleteChat = (id) => ({
  type: DELETE_CHAT,
  payload: id,
});

const setChats = (chats) => ({
  type: SET_CHATS,
  payload: chats,
});


export const initChats = () => (dispatch) => {
  const chatDbRef = ref(db, "chats");
  onValue(chatDbRef, (snapshot) => {
    const data = snapshot.val();
    dispatch(setChats(Object.values(data || {})));
  });
};

export const addChatFb = (name) => () => {
  const newId = `chat-${Date.now()}`;
  // console.log('handleAddChat2', newId);
  const chatDbRef = ref(db, `chats/${newId}`);
   console.log('addChatFb',  newId, chatDbRef);
  set(chatDbRef, {
    id: newId,
    name: name,
  });
};

export const deleteChatFb = (id) => () => {
        console.log('deleteChat', id)
      const chatDbRef = ref(db, `chats/${id}`);
      // console.log('handleDeleteChat', ref.child( `chats/${id}`))
      // ref.child(Id).removeValue();
      remove(chatDbRef);
      const messageDbRef = ref(db, `messages/${id}`);
      remove(messageDbRef);
};