import React from 'react';

const Message = ({ username, content }) => {
  return (
    <div className="message">
      <div className="author">{username}</div>
      <div className="content">{content}</div>
    </div>
  );
};

export default Message;