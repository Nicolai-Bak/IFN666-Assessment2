import { Box } from '@mui/material';

export function PageLayout({ children }) {
  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 74px - 64px)',
        paddingTop: '64px',
        paddingX: 'calc(100% - 100vw + 96px)',
      }}
    >
      {children}
    </Box>
  );
}
