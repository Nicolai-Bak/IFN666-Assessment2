import { Box } from '@mui/material';

export function PageLayout({ children }) {
  return <Box sx={{ paddingY: '64px', paddingX: 'calc(100% - 100vw + 96px)' }}>{children}</Box>;
}
