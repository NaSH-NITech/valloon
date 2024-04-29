/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Divider, Flex } from '@chakra-ui/react';
import { memo, useContext, useState } from 'react';
import styled from 'styled-components';
import { LoginUserContext } from '../../hooks/provders/useLoginUserPrvider';
import { SettingProfile } from '../organisms/setting_profile';
import { PrimaryButton } from '../atoms/button/PrimaryButton';

export const Setting = memo(() => {
  const { loginUser } = useContext(LoginUserContext);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <Flex align="center" justify="center" hight="100vh" py={4}>
      <Box bg="white" w="xl" h="xl" p={4} borderRadius="md" shadow="md">
        {!showProfile && (
          <>
            <SAcctiveUser as="h1" size="lg" textAlign="center">
              設定
            </SAcctiveUser>
            <Divider mt={3} />
            <PrimaryButton
              variant="outline"
              bg="none"
              color="black"
              _hover={{ opacity: 0.5 }}
              loading={false}
              onClick={() => setShowProfile(true)}
            >
              プロフィールを編集
            </PrimaryButton>
          </>
        )}
        {showProfile && <SettingProfile loginUser={loginUser} setShowProfile={setShowProfile} />}
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
