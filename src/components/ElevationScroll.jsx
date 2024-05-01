import { useScrollTrigger, useTheme } from '@mui/material';
import { cloneElement } from 'react';

export function ElevationScroll({ children }) {
  const theme = useTheme();
  // This hook returns true if the user has scrolled down the page
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  // This function clones the children element and adds elevation and background color to it based on the trigger value.
  // Done to create a shadow effect on the app bar when the user scrolls down
  // Avoids app bar and content overlap
  return cloneElement(children, {
    elevation: trigger ? 1 : 0,
    style: {
      backgroundColor: trigger ? theme.palette.background.default : 'transparent',
      transition: trigger ? '0.5s' : '0.3s',
      padding: '5px 0px',
    },
  });
}
