import { Typography } from '@mui/material';

export function PageHeader({ children }) {
  return (
    <Typography
      variant='h6'
      component='div'
      sx={{
        fontWeight: 'bold',
        color: 'primary.main',
      }}
    >
      {children}
    </Typography>
  );
}
