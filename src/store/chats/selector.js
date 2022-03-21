  
export const selectChats = (state) => state.chats.chats;
export const selectChatsLength = (state) => state.chats.chats.length;
// export const selectFirstChatId = (state) => state.chats.chats?.[0].id;
export const selectIfChatExists = (id) => (state) =>
  !!state.chats.chats.find((chat) => id === chat.id);
export const selectChatName = (id) => 
    (state) => state.chats.chats.find((chat) => id === chat.id)?.name;
// export const selectChatName = (id) => 
//     (state) => {
//       const a = state.chats.chats.find((chat) => +id === +chat.id)
//       console.log('selectChatName', a, id )
//       return a?.name;
//     }

  
