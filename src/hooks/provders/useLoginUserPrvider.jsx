import { createContext, useContext, useEffect } from 'react';
import { useState } from 'react';
import { auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';

export const LoginUserContext = createContext();

export const LoginUserProvider = (props) => {
  const [loginUser, setLoginUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);
  const { children } = props;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoginUser(user);
      }
      setAuthChecked(true);
    });
  }, []);

  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {authChecked && children}
    </LoginUserContext.Provider>
  );
};

export const useLoginUser = () => useContext(LoginUserContext);
