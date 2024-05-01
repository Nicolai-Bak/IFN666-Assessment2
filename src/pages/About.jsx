import InfoIcon from '@mui/icons-material/Info';
import { Typography } from '@mui/material';

import { about } from '../../STATIC_DATA.json';
import { CardBase } from '../components/CardBase';

export function About() {
  return (
    <CardBase title='About me' img={<InfoIcon sx={{ height: '65px', width: '65px', padding: '14.5px' }} />}>
      {about.paragraphs.map((paragraph, index) => (
        <Typography key={index} paragraph>
          {paragraph}
        </Typography>
      ))}
    </CardBase>
  );
}
