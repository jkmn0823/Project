
import { createContext, useContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { NAME: '홍길동', ID: 'qwe123', PW: 'qwe123@@' }
  ]);

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <UserContext.Provider value={{ users, setUsers, addUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
