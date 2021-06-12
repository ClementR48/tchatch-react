export const UPDATE_INPUT_MESSAGE = 'UPDATE_INPUT_MESSAGE';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const OPEN_SETTINGS = 'OPEN_SETTINGS';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';

export const updateInputMessage = (newValue) => ({
  type: UPDATE_INPUT_MESSAGE,
  value: newValue,
});

export const addMessage = () => ({
  type: ADD_MESSAGE,
})

export const openSettings = () => ({
  type: OPEN_SETTINGS,
})

export const setEmail = (newValue) => ({
  type: SET_EMAIL,
  newValue: newValue
})

export const setPassword = (newValue) => ({
  type: SET_PASSWORD,
  newValue: newValue
})

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
})