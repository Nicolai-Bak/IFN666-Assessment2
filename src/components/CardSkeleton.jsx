import { Skeleton } from '@mui/material';

// This component is used to render a card skeleton which can be reused when data is loading
export function CardSkeleton({ sx }) {
  return <Skeleton variant='rectangular' sx={{ borderRadius: '8px', ...sx }} />;
}
