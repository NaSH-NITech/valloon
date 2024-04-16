/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Divider, Flex, Stack } from '@chakra-ui/react';
import { memo } from 'react';
import styled from 'styled-components';

export const Setting = memo(() => {
  return (
    <Flex align="center" justify="center" hight="100vh" py={4}>
      <Box bg="white" w="xl" h="xl" p={4} borderRadius="md" shadow="md">
        <SAcctiveUser as="h1" size="lg" textAlign="center">
          ユーザー設定
        </SAcctiveUser>
        <Divider mt={3} />
        <Stack spacing={5} py={4} px={10}>
          <Box display="flex" justifyContent="center" flexWrap="wrap"></Box>
          <Box></Box>
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
