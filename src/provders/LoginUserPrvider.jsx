import { createContext } from 'react';
import { useState } from 'react';

export const LoginUserContext = createContext();

export const LoginUserProvider = (props) => {
  const [loginUser, setLoginUser] = useState(null);
  const { children } = props;
  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
