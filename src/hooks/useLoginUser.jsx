import { useContext } from 'react';
import { LoginUserContext } from '../provders/LoginUserPrvider';

export const useLoginUser = () => useContext(LoginUserContext);
