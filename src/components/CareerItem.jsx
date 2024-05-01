import { Chip, Grid, Stack, Typography } from '@mui/material';

export function CareerItem({ title, date, company, description, technologies = [] }) {
  return (
    <>
      <Grid item xs={4}>
        <Typography variant='h6'>{company}:</Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant='subtitle1'>{date}</Typography>
        <Typography variant='subtitle1'>{title}</Typography>
        <Typography variant='subtitle1'>{description}</Typography>
        <Stack spacing={1} direction='row'>
          {technologies.map((tech) => (
            <Chip key={tech} label={tech} variant='outlined' color='warning' />
          ))}
        </Stack>
      </Grid>
    </>
  );
}
