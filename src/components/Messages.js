import React from 'react';
import Message from './Message';

const Messages = ({ messages }) => {
  return (
    <div className="messages">
      {messages.map((message) => 
        <Message key={message.id} {...message}/>
      )}
    </div>
  );
};

export default Messages;