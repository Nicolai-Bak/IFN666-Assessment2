import { Box, Card, CardContent, CardHeader } from '@mui/material';

// The base card which all other cards will use for a consistent look and feel
export function CardBase({ title, img, children, sx }) {
  return (
    <Card sx={{ minWidth: 275, backgroundColor: 'transparent', p: 3, borderRadius: 2, ...sx }}>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <CardHeader title={title} />
        {img}
      </Box>
      {children && <CardContent>{children}</CardContent>}
    </Card>
  );
}
