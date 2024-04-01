/* eslint-disable react/display-name */
import { Box, Divider, Flex, Heading, Input, Stack, useDisclosure } from '@chakra-ui/react';
import { memo, useState } from 'react';
import { PrimaryButton } from '../atoms/button/PrimaryButton';
import styled from 'styled-components';
import { SignUpModal } from '../organisms/signup/SignUpModal';
import { useLoginAuth } from '../../hooks/useLoginAuth';
import { useLoginUser } from '../../hooks/provders/useLoginUserPrvider';
import { Navigate } from 'react-router-dom';

export const Login = memo(() => {
  const { login } = useLoginAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginUser } = useLoginUser();

  const { isOpen, onClose, onOpen } = useDisclosure();
  const onClickLogin = async () => {
    login({ email, password });
    console.log(email, password);

    if (loginUser) {
      <Navigate to="/home" />;
    }
  };

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          入退室管理システム
        </Heading>
        <Divider mt={4} />
        <Stack>
          <SLoginText>Log in to your account</SLoginText>
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
          <PrimaryButton onClick={onClickLogin}>ログイン</PrimaryButton>
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
