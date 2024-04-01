import { createContext, useContext, useEffect } from 'react';
import { useState } from 'react';
import { auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';

export const LoginUserContext = createContext();

export const LoginUserProvider = (props) => {
  const [loginUser, setLoginUser] = useState(null);
  const { children } = props;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoginUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};

export const useLoginUser = () => useContext(LoginUserContext);
