export const UPDATE_INPUT_MESSAGE = 'UPDATE_INPUT_MESSAGE';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const OPEN_SETTINGS = 'OPEN_SETTINGS'

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