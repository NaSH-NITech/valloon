/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from 'react';
import { useMessage } from './useMessage';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export const useSignupAuth = () => {
  const [page, setPage] = useState('signup');
  const { showMessage } = useMessage();

  const signup = useCallback(async (props) => {
    const { email, password } = props;
    if (email === '' || password === '') {
      showMessage({ title: '未入力の項目があります', status: 'error' });
      return;
    } else if (password.length < 6) {
      showMessage({ title: 'パスワードは6文字以上で入力してください', status: 'error' });
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setPage('UserDetail');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        showMessage({ title: 'このメールアドレスは既に登録されています', status: 'error' });
      }
    }
  }, []);
  return { signup, setPage, page };
};
