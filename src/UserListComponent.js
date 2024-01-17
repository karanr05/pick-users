import React from 'react';
import usersData from './Person data/UserData';

const UserListComponent = () => {
  return (
    <div>
      {usersData.map((user) => (
        <div key={user.id}>
          <img src={user.avatar} alt={user.name} />
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UserListComponent;
