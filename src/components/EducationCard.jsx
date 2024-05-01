import SchoolIcon from '@mui/icons-material/School';
import { Grid } from '@mui/material';

import { educations } from '../../STATIC_DATA.json';
import { CardBase } from './CardBase';
import { EducationItem } from './EducationItem';

export function EducationCard() {
  return (
    <CardBase title='Education' img={<SchoolIcon sx={{ height: '65px', width: '65px', padding: '14.5px' }} />}>
      <Grid container rowSpacing={2} columnSpacing={2}>
        {/* Mapping over the educations array to render each education item */}
        {educations.map((education, index) => (
          <EducationItem key={index} {...education} />
        ))}
      </Grid>
    </CardBase>
  );
}
