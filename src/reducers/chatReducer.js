import { UPDATE_INPUT_MESSAGE, ADD_MESSAGE, OPEN_SETTINGS } from '../actions/chat'
import { getId } from '../utils';

const initialState = {
  messages: [
    {
      id: 1,
      username: 'super Chat',
      content: 'bien?'
    },
    {
      id: 2,
      username: 'super Chat',
      content: 'bien?'
    },
    {
      id: 3,
      username: 'super Chat',
      content: 'bien?'
    },
  ],

  inputMessage: '',
  nickname: 'super Chat',

  openButtonSettings: true,
};

function chatReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_INPUT_MESSAGE:
      return {
        ...state,
        inputMessage: action.value,
      }
    case ADD_MESSAGE: {

    const newMesssage = {
      id: getId(state.messages) + 1,
      username: state.nickname,
      content: state.inputMessage
    }
      return {
        ...state,
        messages: [...state.messages, newMesssage],

        inputMessage: '',
      }}

    case OPEN_SETTINGS : {
      return {
        ...state,
        openButtonSettings: !state.openButtonSettings
      }
    }

    default:
      return state;
  }
}

export default chatReducer;