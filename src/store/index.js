import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from "../reducers/chatReducer";
import logMiddleware from "../middleware/logMiddleware";
import authMiddleware from "../middleware/authMiddleware";

const enhancer = composeWithDevTools(
  applyMiddleware(
    logMiddleware,
    authMiddleware
  )
)

const store = createStore(
  reducer,

  enhancer
);

export default store;