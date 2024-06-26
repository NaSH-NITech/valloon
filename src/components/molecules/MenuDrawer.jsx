import { memo } from 'react';
import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from '@chakra-ui/react';

export const MenuDrawer = memo((props) => {
  const { onClose, isOpen, onClickHome, onClickUserManagement, onClickSetting, onClickLogout } =
    props;
  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button
              w="100%"
              onClick={() => {
                onClickHome();
                onClose();
              }}
            >
              TOP
            </Button>
            <Button
              w="100%"
              onClick={() => {
                onClickUserManagement();
                onClose();
              }}
            >
              ユーザーログ
            </Button>
            <Button
              w="100%"
              onClick={() => {
                onClickSetting();
                onClose();
              }}
            >
              設定
            </Button>
            <Button
              w="100%"
              onClick={() => {
                onClickLogout();
                onClose();
              }}
            >
              ログアウト
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
