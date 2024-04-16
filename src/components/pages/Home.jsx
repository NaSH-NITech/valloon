/* eslint-disable react/display-name */
import { Box, Divider, Flex, Stack } from '@chakra-ui/react';
import { memo, useEffect, useState } from 'react';
import styled from 'styled-components';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import { EnterAndExit } from '../organisms/EnterAndExit';
import { UserCard } from '../molecules/UserCard';

export const Home = memo(() => {
  const [onlineUsers, setOnlineUsers] = useState([]);

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
