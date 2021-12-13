import React, { useState } from 'react';

const ChatBox = ({ user, msgList, newMessageEvent }) => {
  const [message, setMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    newMessageEvent(message);
    setMessage('');
  };
  return (
    <div className="chat-box">
      <h3>{user.name} Chat Window</h3>
      <ul className="chat-list">
        {msgList.map((msg) => (
          <li key={msg.id}>{msg.text}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input value={message} onChange={(e) => setMessage(e.target.value)} />
      </form>
    </div>
  );
};
export default React.memo(ChatBox);
