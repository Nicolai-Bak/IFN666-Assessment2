import { Box, Card, CardContent, CardHeader } from '@mui/material';

export function CardBase({ title, img, children, ...rest }) {
  return (
    <Card sx={{ minWidth: 275, backgroundColor: 'transparent', p: 3, borderRadius: 2, ...rest }}>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <CardHeader title={title} />
        {img}
      </Box>
      {children && <CardContent>{children}</CardContent>}
    </Card>
  );
}
