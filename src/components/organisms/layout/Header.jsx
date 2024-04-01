/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Flex, Heading, Link, useDisclosure } from '@chakra-ui/react';
import { memo, useCallback } from 'react';
import { MenuIconButton } from '../../atoms/button/MenuIconButton';
import { MenuDrawer } from '../../molecules/MenuDrawer';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase';
import { useMessage } from '../../../hooks/useMessage';

export const Header = memo(() => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const navigation = useNavigate();
  const { showMessage } = useMessage();

  const onClickHome = useCallback(() => navigation('/home'), []);
  const onClickUserManagement = useCallback(() => navigation('/home/user_management'), []);
  const onClickSetting = useCallback(() => navigation('/home/setting'), []);
  const onClickLogout = () => {
    signOut(auth)
      .then(() => showMessage({ title: 'ログアウトしました', status: 'success' }))
      .then(() => navigation('/'))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex align="center" as="a" mr={8} _hover={{ cursor: 'pointer' }} onClick={onClickHome}>
          <Heading as="h1" fontSize={{ base: 'md', md: 'lg' }}>
            ユーザー管理アプリ
          </Heading>
        </Flex>
        <Flex align="center" fontSize="sm" flexGrow={2} display={{ base: 'none', md: 'flex' }}>
          <Box pr={4}>
            <Link onClick={onClickUserManagement}>ユーザー一覧</Link>
          </Box>
          <Link onClick={onClickSetting}>設定</Link>
          <Link onClick={onClickLogout}>ログアウト</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickUserManagement={onClickUserManagement}
        onClickSetting={onClickSetting}
      />
    </>
  );
});
