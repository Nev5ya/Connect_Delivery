import {ADD_MESSAGE, SET_MESSAGES} from "./actions";
import {DELETE_CHAT} from "../chats/actions";


const initialState = {
  messageList:
  [{ text: '', author: '', id: '', chatId: ''}]
};

export const messagesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_MESSAGE: {
        console.log('messagesReducer', type, payload)
      return {
        ...state,
        messageList: [...state.messageList, 
            { 
                id: +state.messageList[state.messageList.length - 1]?.id + 1, 
                text: payload.text,
                author: payload.author,
                chatId: payload.chatId
            }],
      };
    }
    case DELETE_CHAT: {
      const newMessageList = state.messageList.filter(({ chatId }) => chatId !== payload);
      return {
        ...state,
        messageList: newMessageList,
      };
    }
    case SET_MESSAGES: {
      return {
        ...state,
        messageList: payload,
      };
    }

    default:
      return state;
  }
};
