export const UPDATE_INPUT_MESSAGE = 'UPDATE_INPUT_MESSAGE';

export const updateInputMessage = (newValue) => ({
  type: UPDATE_INPUT_MESSAGE,
  value: newValue,
});