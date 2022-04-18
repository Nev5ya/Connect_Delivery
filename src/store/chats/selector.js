  
export const selectChats = (state) => {
    if ((state.chats.chats[0] === null)) {
        // console.log('nuuuuul')
        return [
            {id: null, name: ''}
        ]
    }
    else {
        // console.log('ret')
        return state.chats.chats;
    }
}

export const selectChatsLength = (state) => state.chats.chats.length;
// export const selectFirstChatId = (state) => state.chats.chats?.[0].id;
export const selectIfChatExists = (id) => (state) => {
    if ((id === null) || (state.chats.chats[0] === null)) {
        return [
            {id: null, name: ''}
        ]
    }
    else {
    return !!state.chats.chats.find((chat) => id === chat.id)
    }
}

// export const selectChatName = (id) =>
//     (state) => state.chats.chats.find((chat) => id === chat.id)?.name;
export const selectChatName = (id) =>
    (state) => {
        if ((id === null)|| (state.chats.chats[0] === null))  {
            return [
                {id: null, name: ''}
            ]
        }
        else {
      const a = state.chats.chats.find((chat) => id === chat.id)
      return a?.name;
    }}

  
