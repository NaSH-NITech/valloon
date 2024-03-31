/* eslint-disable react/display-name */
import { Box, Divider, Flex, Heading, Input, Stack, useDisclosure } from '@chakra-ui/react';
import { memo, useState } from 'react';
import { PrimaryButton } from '../atoms/button/PrimaryButton';
import styled from 'styled-components';
import { SignUpModal } from '../organisms/signup/SignUpModal';
import { useLoginAuth } from '../../hooks/useLoginAuth';

export const Login = memo(() => {
  const { login } = useLoginAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { isOpen, onClose, onOpen } = useDisclosure();
  const onClickLogin = async () => {
    login({ email, password });
  };

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          入退室管理システム
        </Heading>
        <Divider mt={4} />
        <Stack px={10}>
          <SLoginText>Log in to your account</SLoginText>
          <SignUpModal isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
        </Stack>
        <Stack spacing={6} py={4} px={10}>
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
        </Stack>
      </Box>
    </Flex>
  );
});

const SLoginText = styled.h2`
  text-align: center;
  font-size: 1.1rem;
`;
