/* eslint-disable react/display-name */
import { Box, Divider, Flex, Stack } from '@chakra-ui/react';
import { memo, useEffect, useState } from 'react';
import styled from 'styled-components';
import { collection, query, where, onSnapshot, doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { EnterAndExit } from '../organisms/EnterAndExit';
import { UserCard } from '../molecules/UserCard';
import { useLoginUser } from '../../hooks/provders/useLoginUserPrvider';

export const Home = memo(() => {
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { loginUser } = useLoginUser();
  const { uid } = loginUser;

  useEffect(() => {
    const handleNfcUserStatus = async () => {
      const urlSearchparams = new URLSearchParams(window.location.search);
      const nfcId = urlSearchparams.get('nfc');

      if (nfcId === 'true') {
        try {
          // ユーザーのドキュメント参照を取得
          const userRef = doc(db, 'users', uid);
          const userDoc = await getDoc(userRef);

          if (userDoc.exists()) {
            const currentUserOnline = userDoc.data().isOnline;
            await setDoc(
              userRef,
              {
                isOnline: !currentUserOnline,
              },
              { merge: true } 
            );
            window.location.reload();
          } else {
            console.log("ユーザードキュメントが存在しません");
          }
        } catch (error) {
          console.error("入室/退室ステータスの更新に失敗しました:", error);
        }
      }
    };

    if (uid) {
      handleNfcUserStatus(); // 非同期処理を呼び出す
    }
  }, [uid]);

  useEffect(() => {
    const fetchOnlineUsers = async () => {
      const q = query(collection(db, 'users'), where('isOnline', '==', true));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const onlineUsersData = querySnapshot.docs.map((doc) => doc.data());
        setOnlineUsers(onlineUsersData);
      });
      return () => unsubscribe();
    };
    fetchOnlineUsers();
  }, []);

  return (
    <Flex align="center" justify="center" hight="100vh" py={4}>
      <Box bg="white" w="xl" h="xl" p={4} borderRadius="md" shadow="md">
        <SAcctiveUser as="h1" size="lg" textAlign="center">
          現在の入室者数：
          <span>{onlineUsers.filter((user) => user.isOnline).length}</span>
        </SAcctiveUser>
        <Divider mt={3} />
        <Stack spacing={5} py={4} px={10}>
          <UserCard onlineUsers={onlineUsers} />
          <Box display="flex" justifyContent="center" flexWrap="wrap">
            <EnterAndExit />
          </Box>
        </Stack>
      </Box>
    </Flex>
  );
});

const SAcctiveUser = styled.p`
  text-align: center;
  font-size: 1.1rem;
  span {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;
