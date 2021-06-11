import React from 'react';
import ReactDOM from 'react-dom';


import { Provider } from 'react-redux';
import store from "./store";

import Chat from './Chat';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Chat />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);




