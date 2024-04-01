import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import theme from './theme/theme';
import { Router } from './routers/Router';
import { LoginUserProvider } from './hooks/provders/useLoginUserPrvider';

export default function App() {
  return (
    <LoginUserProvider>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ChakraProvider>
    </LoginUserProvider>
  );
}
