import { Card, CardBody, Circle, Stack, Box } from '@chakra-ui/react';
import { memo } from 'react';
import UserDefaultIcon from '../../png/DefaultUserIcon.png';

export const UserCard = memo((porps) => {
  const { onlineUsers } = porps;
  return (
    <Box display="flex" justifyContent="center" flexWrap="wrap">
      {onlineUsers.map((user) => (
        <Card key={user.id} user={user} shadow="md" borderRadius="md">
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
  );
});
