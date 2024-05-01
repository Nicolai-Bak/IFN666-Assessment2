import { AppBar, Box, Toolbar } from '@mui/material';

import { nav } from '../../STATIC_DATA.json';
import { ElevationScroll } from './ElevationScroll';
import { NavItem } from './NavItem';
import { PageHeader } from './PageHeader';

export function NavigationBar() {
  return (
    <ElevationScroll>
      <AppBar
        position='sticky'
        sx={{
          maxWidth: 'calc(100vw - 16px)',
        }}
      >
        <Toolbar sx={{ flexGrow: 1, justifyContent: 'space-between' }}>
          <PageHeader>{nav.title}</PageHeader>
          <Box>
            {nav.links
              .filter((link) => link.isInNavBar)
              .map((link, index) => (
                <NavItem key={index} to={link.url}>
                  {link.name}
                </NavItem>
              ))}
          </Box>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}
