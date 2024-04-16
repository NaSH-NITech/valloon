import { doc, setDoc } from 'firebase/firestore';
import { PrimaryButton } from '../atoms/button/PrimaryButton';
import { db } from '../../firebase';
import { useLoginUser } from '../../hooks/provders/useLoginUserPrvider';
import { memo } from 'react';
import { useMessage } from '../../hooks/useMessage';
import { Stack } from '@chakra-ui/react';

export const EnterAndExit = memo(() => {
  const { showMessage } = useMessage();
  const { loginUser } = useLoginUser();
  const { uid } = loginUser;

  const onClickEnter = async () => {
    const userRef = doc(db, 'users', uid);
    await setDoc(
      userRef,
      {
        isOnline: true,
      },
      { merge: true }
    );
    showMessage({ title: '入室しました', status: 'success' });
  };

  const onClickExit = async () => {
    const userRef = doc(db, 'users', uid);
    await setDoc(
      userRef,
      {
        isOnline: false,
      },
      { merge: true }
    );
    showMessage({ title: '退室しました', status: 'success' });
  };
  return (
    <>
      <Stack spacing={4} direction="row" justify="center">
        <PrimaryButton onClick={onClickEnter}>入室</PrimaryButton>
        <PrimaryButton onClick={onClickExit} bg="red.400">
          退室
        </PrimaryButton>
      </Stack>
    </>
  );
});
