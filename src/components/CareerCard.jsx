import WorkIcon from '@mui/icons-material/Work';
import { Grid } from '@mui/material';

import { jobs } from '../../STATIC_DATA.json';
import { CardBase } from './CardBase';
import { CareerItem } from './CareerItem';

export function CareerCard() {
  return (
    <CardBase title='Career History' img={<WorkIcon sx={{ height: '65px', width: '65px', padding: '14.5px' }} />}>
      <Grid container rowSpacing={2} columnSpacing={2}>
        {jobs.map((job, index) => (
          <CareerItem key={index} {...job} />
        ))}
      </Grid>
    </CardBase>
  );
}
