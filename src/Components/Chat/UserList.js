import React from 'react';

const UserList = ({ list, initiateChatForUser }) => {
  return (
    <div className="user-list">
      <h3>Users</h3>
      <ul>
        {list.map((user) => (
          <li
            key={user.id}
            onClick={() => {
              initiateChatForUser(user);
            }}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default React.memo(UserList);
