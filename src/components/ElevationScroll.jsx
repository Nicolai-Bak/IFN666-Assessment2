import { useScrollTrigger, useTheme } from '@mui/material';
import { cloneElement } from 'react';

export function ElevationScroll({ children }) {
  const theme = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement(children, {
    elevation: trigger ? 1 : 0,
    style: {
      backgroundColor: trigger ? theme.palette.background.default : 'transparent',
      transition: trigger ? '0.5s' : '0.3s',
      padding: '5px 0px',
    },
  });
}
