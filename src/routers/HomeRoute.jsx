import { Home } from '../components/pages/Home';
import { Page404 } from '../components/pages/Page404';
import { Setting } from '../components/pages/Setting';
import { UserLog } from '../components/pages/UserLog';

export const HomeRoute = [
  {
    path: '/',
    exact: true,
    element: <Home />,
  },
  {
    path: 'user_log',
    exact: false,
    element: <UserLog />,
  },
  {
    path: 'setting',
    exact: false,
    element: <Setting />,
  },
  {
    path: '*',
    exact: false,
    element: <Page404 />,
  },
];
