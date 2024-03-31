import { redirect } from 'react-router-dom';
import { useAuthContext } from '../components/context/AuthContext';

export const useLoader = async () => {
  const { user } = await useAuthContext();
  if (!user) {
    redirect('/');
  }
  return null;
};
