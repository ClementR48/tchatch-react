import { SUBMIT_LOGIN } from "../actions/chat";
import axios from "axios";

const authMiddleware = (store) => (next) => (action) => {

  switch(action.type) {
    case SUBMIT_LOGIN:{

      const state = store.getState();
      axios.post(
        'http://localhost:3000/users',{
          email: state.email,
          password: state.password
        }
      );
      next(action);
      break;
    }

    default:
      next(action)
  }


};



export default authMiddleware;