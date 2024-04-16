import React, { memo } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Login } from '../components/pages/Login';
import { HomeRoute } from './HomeRoute';
import { Page404 } from '../components/pages/Page404';
import { HeaderLayout } from '../components/templates/HeaderLayout';
import { useLoginUser } from '../hooks/provders/useLoginUserPrvider';

export const Router = memo(() => {
  const { loginUser } = useLoginUser();

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={
            <>
              <HeaderLayout />
              <Routes>
                {HomeRoute.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={loginUser ? route.element : <Navigate to="/login" />}
                  />
                ))}
              </Routes>
            </>
          }
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
});
