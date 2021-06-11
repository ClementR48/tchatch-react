import { createStore } from "redux";
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from "../reducers/chatReducer";


const store = createStore(
  reducer,

  devToolsEnhancer()
);

export default store;