import { AppBar } from '@mui/material';

import { ElevationScroll } from './ElevationScroll';

export function NavigationBar({ children }) {
  return (
    <ElevationScroll>
      <AppBar position='fixed'>{children}</AppBar>
    </ElevationScroll>
  );
}
