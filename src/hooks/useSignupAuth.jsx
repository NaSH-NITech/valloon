/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from 'react';
import { useMessage } from './useMessage';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export const useSignupAuth = () => {
  const [page, setPage] = useState('signup');
  const { showMessage } = useMessage();
  const navigate = useNavigate();

  const signupCheck = useCallback(async (props) => {
    const { email, password } = props;
    if (email === '' || password === '') {
      showMessage({ title: '未入力の項目があります', status: 'error' });
      return;
    } else if (password.length < 6) {
      showMessage({ title: 'パスワードは6文字以上で入力してください', status: 'error' });
      return;
    }
    try {
      setPage('UserDetail');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        showMessage({ title: 'このメールアドレスは既に登録されています', status: 'error' });
      }
    }
  }, []);

  const signup = useCallback(async (props) => {
    const { email, password, name, fullname, birth, courage } = props;
    try {
      await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
        showMessage({ title: '登録が完了しました', status: 'success' });
        navigate('/');
        setDoc(doc(db, 'users', user.uid), {
          email: email,
          name: name,
          fullname: fullname,
          birth: birth,
          courage: courage,
          isOnline: false,
          img: 'アイコン',
        });
      });
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        showMessage({ title: 'このメールアドレスは既に登録されています', status: 'error' });
      }
    }
  }, []);
  return { signupCheck, signup, setPage, page };
};
