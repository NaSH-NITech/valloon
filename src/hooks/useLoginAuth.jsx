/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from 'react-router-dom';
import { useMessage } from './useMessage';
import { useCallback } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export const useLoginAuth = () => {
  const navigation = useNavigate();
  const { showMessage } = useMessage();

  const login = useCallback(async ({ email, password }) => {
    if (email === '' || password === '') {
      showMessage({ title: '未入力の項目があります', status: 'error' });
      return;
    } else if (password.length < 6) {
      showMessage({ title: 'パスワードは6文字以上で入力してください', status: 'error' });
      return;
    } else {
      try {
        await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
          const user = userCredential.user;
          showMessage({ title: 'ログインしました', status: 'success' });
          navigation('/');
          return user;
        });
      } catch (error) {
        if (error.code !== 'auth/email-already-in-use') {
          showMessage({ title: 'このメールアドレスは登録されていません', status: 'error' });
        }
      }
    }
  }, []);
  return { login };
};
