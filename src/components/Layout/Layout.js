import { Outlet } from 'react-router-dom';
import { LayoutContainer } from './Layout.styled';
import { Header } from 'components/Header/Header';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Suspense fallback={'LOADING PAGE...'}>
        <Outlet />
      </Suspense>
    </LayoutContainer>
  );
};
