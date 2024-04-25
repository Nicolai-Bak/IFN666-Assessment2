import { AppBar } from '@mui/material';

import { ElevationScroll } from './ElevationScroll';

export function NavigationBar({ children }) {
  return (
    <ElevationScroll>
      <AppBar
        position='sticky'
        sx={{
          maxWidth: 'calc(100vw - 16px)',
        }}
      >
        {children}
      </AppBar>
    </ElevationScroll>
  );
}
