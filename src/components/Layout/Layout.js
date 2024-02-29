import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';
import { Header } from 'components/Header/Header';
import { AnimatePresence } from 'framer-motion';
import { LayoutContainer } from './Layout.styled';
import { ModalComponent } from 'components/Modal/Modal';

// ========================

export const Layout = () => {
  return (
    <LayoutContainer>
      <Header />

      <AnimatePresence mode="wait">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </AnimatePresence>
      <ModalComponent />
    </LayoutContainer>
  );
};
