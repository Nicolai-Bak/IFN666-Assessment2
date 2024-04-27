import { Box, Toolbar, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { NavigationBar } from '../components/NavigationBar';
import { NavItem } from '../components/NavItem';
import { PageHeader } from '../components/PageHeader';
import { PageLayout } from './PageLayout';

export function RootLayout() {
  return (
    <>
      <NavigationBar>
        <Toolbar sx={{ flexGrow: 1, justifyContent: 'space-between' }}>
          <PageHeader>Nicolai Bak</PageHeader>
          <Box>
            <NavItem to='/'>Home</NavItem>
            <NavItem to='/about'>About</NavItem>
            <NavItem to='/resume'>Resume</NavItem>
            <NavItem to='/portfolio'>Portfolio</NavItem>
          </Box>
        </Toolbar>
      </NavigationBar>
      <PageLayout>
        <Outlet />
      </PageLayout>

      {/* TODO move style to css file */}
      <footer style={{ position: 'static', bottom: 0, width: '100%', height: '64px', alignContent: 'center' }}>
        <Typography variant='subtitle2' sx={{ flexGrow: 1, textAlign: 'center' }}>
          &copy; 2024 Nicolai Bak
        </Typography>
      </footer>
    </>
  );
}
