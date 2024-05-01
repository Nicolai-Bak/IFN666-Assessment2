import { Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { footer } from '../../STATIC_DATA.json';
import { NavigationBar } from '../components/NavigationBar';
import { PageLayout } from './PageLayout';

export function RootLayout() {
  return (
    <>
      <NavigationBar />
      <PageLayout>
        <Outlet />
      </PageLayout>

      <Footer />
    </>
  );
}

export function Footer() {
  return (
    <footer>
      <Typography variant='subtitle2' sx={{ flexGrow: 1, textAlign: 'center' }}>
        {footer}
      </Typography>
    </footer>
  );
}
