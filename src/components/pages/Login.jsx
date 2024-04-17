/* eslint-disable react/display-name */
import { Box, Divider, Flex, Heading, Input, Stack, useDisclosure } from '@chakra-ui/react';
import { memo, useEffect, useState } from 'react';
import { PrimaryButton } from '../atoms/button/PrimaryButton';
import styled from 'styled-components';
import { SignUpModal } from '../organisms/signup/SignUpModal';
import { useLoginAuth } from '../../hooks/useLoginAuth';
import { useLoginUser } from '../../hooks/provders/useLoginUserPrvider';
import { Navigate } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase';

export const Login = memo(() => {
  const { login } = useLoginAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginUser } = useLoginUser();
  const [onlineUsers, setOnlineUsers] = useState([]);
  useEffect(() => {
    const fetchOnlineUsers = async () => {
      const q = query(collection(db, 'users'), where('isOnline', '==', true));
      const querySnapshot = await getDocs(q);
      const onlineUsers = querySnapshot.docs.map((doc) => doc.data());
      setOnlineUsers(onlineUsers);
    };
    fetchOnlineUsers();
  }, []);

  const { isOpen, onClose, onOpen } = useDisclosure();
  const onClickLogin = async () => {
    login({ email, password });

    if (loginUser) {
      <Navigate to="/" />;
    }
  };

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={10} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          入退室管理システム
        </Heading>
        <Divider mt={4} />
        <Stack>
          <SLoginText>Log in to your account</SLoginText>
          <SAcctiveUser>
            現在の入室者数：<span>{onlineUsers.filter((user) => user.isOnline).length}</span>
          </SAcctiveUser>
        </Stack>
        <Stack spacing={5} py={4} px={10}>
          <Input
            placeholder="Email"
            value={email}
            type={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <PrimaryButton onClick={onClickLogin}>Sign in</PrimaryButton>
          <SignUpModal isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
        </Stack>
      </Box>
    </Flex>
  );
});

const SLoginText = styled.h2`
  text-align: center;
  font-size: 1.1rem;
`;
const SAcctiveUser = styled.p`
  text-align: center;
  font-size: 1.1rem;
  span {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;
