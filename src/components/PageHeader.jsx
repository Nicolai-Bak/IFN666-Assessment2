import { Typography } from '@mui/material';

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
