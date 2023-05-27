import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { AppBarContainer } from './AppBar/AppBar';

export const Container = styled(Box)({
  margin: '0 auto',
});

export const Layout = () => {
  return (
    <Container>
      <AppBarContainer />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};