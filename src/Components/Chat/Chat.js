import React, { useState, useEffect } from 'react';
import UserList from './UserList';
import ChatBox from './ChatBox';
import { getLocalStorage, setLocalStorage } from '../Common/Storage';

const Chat = () => {
  const mockUsers = [
    {
      name: 'Elon Musk',
      id: '1',
    },
    {
      name: 'Jack Ma',
      id: '2',
    },
    {
      name: 'Steve Jobs',
      id: '3',
    },
  ];

  const [user, setUser] = useState();
  const [messages, setMessages] = useState([]);
  const [chat, setChat] = useState({});

  const getCurrentTime = () => {
    const dt = new Date();
    return dt.getTime();
  };

  const initiateChatForUser = (selUser) => {
    setUser(selUser);
    setMessages(chat[selUser.id] || []);
  };

  const newMessageEvent = (newMsg) => {
    if (!user) return;
    const obj = { id: getCurrentTime(), text: newMsg };
    if (chat[user.id]) {
      setChat({
        ...chat,
        [user.id]: [...chat[user.id], obj],
      });
    } else {
      setChat({
        ...chat,
        [user.id]: [obj],
      });
    }
    setLocalStorage('chat', chat, true);
  };

  useEffect(() => {
    if (user) {
      setMessages(chat[user.id]);
    }
  }, [chat]);

  useEffect(() => {
    const history = getLocalStorage('chat', true);
    if (history) setChat(history);
  }, []);

  return (
    <section className="chat-section">
      <UserList list={mockUsers} initiateChatForUser={initiateChatForUser} />
      {user ? (
        <ChatBox
          user={user}
          msgList={messages}
          newMessageEvent={newMessageEvent}
        />
      ) : (
        <div>Please Select User</div>
      )}
    </section>
  );
};

export default Chat;
