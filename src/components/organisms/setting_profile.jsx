import { memo } from 'react';
import { Box, Circle, Divider, Image, Stack } from '@chakra-ui/react';
import styled from 'styled-components';
import DefaultUserIcon from '../../png/DefaultUserIcon.png';
import { SmallAddIcon } from '@chakra-ui/icons';
import { PrimaryButton } from '../atoms/button/PrimaryButton';

export const SettingProfile = memo(({ loginUser, setShowProfile }) => {
  const updateProfile = () => {
    setShowProfile(false);
  };

  return (
    <>
      <SAcctiveUser as="h1" size="lg" textAlign="center">
        プロフィール設定
      </SAcctiveUser>
      <Divider mt={3} />
      <Stack spacing={5} py={4} px={10} display="flex" align="center">
        <Box position="relative">
          <Circle shadow="md" size="90px">
            <Image src={DefaultUserIcon} w="full" h="full" />
            <Box
              position="absolute"
              w="full"
              h="full"
              bg="rgba(0, 0, 0, 0.5)"
              borderRadius="full"
            />
          </Circle>
          <Circle
            w={5}
            h={5}
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="absolute"
            borderWidth="1px"
            borderColor="gray.300"
            bgColor="white"
            bottom={0}
            right={2}
          >
            <SmallAddIcon w={4} h={4} color="black" />
          </Circle>
        </Box>
        <Box>{loginUser.name}</Box>
        <Box>iii</Box>
        <Box>uuu</Box>
        <PrimaryButton bg="gray.400" color="black" onClick={updateProfile}>
          更新
        </PrimaryButton>
      </Stack>
    </>
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
