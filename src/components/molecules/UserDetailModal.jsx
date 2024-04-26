import {
  Box,
  Circle,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
} from '@chakra-ui/react';
import React, { memo } from 'react';

export const UserDetailModal = memo((props) => {
  const { isOpen, onClose, userId } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
      <ModalOverlay />
      <ModalContent w={300} align="center">
        <ModalHeader mb={-3}>ユーザー詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody align="center">
          <Stack spacing={4} pb={2}>
            <Box>
              <Circle bg="gray.100" shadow="md" size="90px"></Circle>
            </Box>
            <Box>ユーザー名:{userId.name}</Box>
            <Box>名前:{userId.fullname}</Box>
            <Box>生年月日:{userId.birth}</Box>
            <Box>大学:{userId.courage}</Box>
            <Box>{userId.email}</Box>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
