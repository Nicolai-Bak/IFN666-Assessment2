import { Grid, Typography } from '@mui/material';

export function EducationItem({ title, date, school }) {
  return (
    <>
      <Grid item xs={5} md={6}>
        <Typography variant='h6'>{school}:</Typography>
      </Grid>
      <Grid item xs={7} md={6}>
        <Typography variant='subtitle1'>{date}</Typography>
        <Typography variant='subtitle1'>{title}</Typography>
      </Grid>
    </>
  );
}
