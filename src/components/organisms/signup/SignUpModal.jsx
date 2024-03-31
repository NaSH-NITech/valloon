import {
  FormControl,
  FormLabel,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
} from '@chakra-ui/react';
import { memo, useState } from 'react';
import { PrimaryButton } from '../../atoms/button/PrimaryButton';
import { useSignupAuth } from '../../../hooks/useSignupAuth';

export const SignUpModal = memo((props) => {
  const { isOpen, onClose, onOpen } = props;

  const { signup, page } = useSignupAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [fullname, setFullName] = useState('');
  const [birth, setBirth] = useState('');

  const onClickSignUp = async () => {
    signup({ email, password });
  };

  const onClickUserDetail = async () => {
    signup({ name, fullname, birth });
  };

  const renderPage = () => {
    switch (page) {
      case 'signup':
        return (
          <>
            <Link
              onClick={onOpen}
              color="purple.400"
              fontSize="xs"
              textAlign="right"
              _hover={{ opacity: 0.8 }}
            >
              新規登録
            </Link>
            <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
              <ModalOverlay />
              <ModalContent mx={{ base: 4, md: 10 }}>
                <ModalHeader>新規登録</ModalHeader>
                <ModalCloseButton />
                <ModalBody mx={4}>
                  <Stack spacing={4}>
                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Password</FormLabel>
                      <Input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </FormControl>
                    <FormControl>
                      <PrimaryButton onClick={onClickSignUp}>次へ</PrimaryButton>
                    </FormControl>
                  </Stack>
                </ModalBody>
              </ModalContent>
            </Modal>
          </>
        );
      case 'UserDetail':
        return (
          <>
            <Link
              onClick={onOpen}
              color="purple.400"
              fontSize="xs"
              textAlign="right"
              _hover={{ opacity: 0.8 }}
            >
              新規登録
            </Link>
            <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
              <ModalOverlay />
              <ModalContent mx={{ base: 4, md: 10 }}>
                <ModalHeader>ユーザー情報登録</ModalHeader>
                <ModalCloseButton />
                <ModalBody mx={4}>
                  <Stack spacing={4}>
                    <FormControl isRequired>
                      <FormLabel>ニックネーム</FormLabel>
                      <Input
                        type="name"
                        placeholder="たろう"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>氏名</FormLabel>
                      <Input
                        type="name"
                        placeholder="山田太郎"
                        value={fullname}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>誕生日</FormLabel>
                      <Input
                        type="birth"
                        placeholder="2000/01/01"
                        value={birth}
                        onChange={(e) => setBirth(e.target.value)}
                      />
                    </FormControl>
                    <FormControl>
                      <PrimaryButton onClick={onClickUserDetail}>登録</PrimaryButton>
                    </FormControl>
                  </Stack>
                </ModalBody>
              </ModalContent>
            </Modal>
          </>
        );
      default:
        return null;
    }
  };

  return renderPage();
});
