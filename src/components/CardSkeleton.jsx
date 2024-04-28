import { Skeleton } from '@mui/material';

export function CardSkeleton({ sx }) {
  return <Skeleton variant='rectangular' sx={{ borderRadius: '8px', ...sx }} />;
}
