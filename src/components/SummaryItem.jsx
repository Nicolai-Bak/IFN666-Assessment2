import { Grid, Typography } from '@mui/material';

export function SummaryItem({ title, value }) {
  return (
    <>
      {/* Use grid items to align the title and value */}
      <Grid item xs={4}>
        <Typography variant='h6'>{title}:</Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant='subtitle1'>{value}</Typography>
      </Grid>
    </>
  );
}
