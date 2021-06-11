import { UPDATE_INPUT_MESSAGE } from '../actions/chat'

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
};

function chatReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_INPUT_MESSAGE:
      return {
        ...state,
        inputMessage: action.value,
      }
    default:
      return state;
  }
}

export default chatReducer;