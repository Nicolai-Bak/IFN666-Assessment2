import { Typography } from '@mui/material';

// This component is used to render a page header
export function PageHeader({ children }) {
  return (
    <Typography
      variant='h6'
      sx={{
        fontWeight: 'bold',
        color: 'primary.main',
      }}
    >
      {children}
    </Typography>
  );
}
