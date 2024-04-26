import { Card, CardBody, Circle, Stack, Box, useDisclosure } from '@chakra-ui/react';
import { memo, useCallback, useState } from 'react';
import UserDefaultIcon from '../../png/DefaultUserIcon.png';
import { UserDetailModal } from './UserDetailModal';

export const UserCard = memo((props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { onlineUsers } = props;
  const [selectedUserId, setSelectedUserId] = useState('');

  const onClickUserModal = useCallback(
    (user) => {
      setSelectedUserId(user);
      onOpen();
    },
    [onOpen]
  );

  return (
    <>
      <Box display="flex" justifyContent="center" flexWrap="wrap">
        {onlineUsers.map((user) => (
          <Card
            key={user.id}
            user={user}
            shadow="md"
            borderRadius="md"
            onClick={() => onClickUserModal(user)}
          >
            <CardBody key={user.id} user={user} p={3}>
              <Stack key={user.id} spacing={1} align="center">
                <Circle key={user.id} bg="gray.100" shadow="md" size="90px">
                  <img src={user.img || UserDefaultIcon} alt="アイコン" />
                </Circle>
                <Box>{user.name}</Box>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </Box>
      <UserDetailModal isOpen={isOpen} onClose={onClose} userId={selectedUserId} />
    </>
  );
});
