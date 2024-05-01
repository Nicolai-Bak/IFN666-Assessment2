import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SummarizeIcon from '@mui/icons-material/Summarize';
import { Grid } from '@mui/material';

import { summary } from '../../STATIC_DATA.json';
import { CardBase } from './CardBase';
import { SummaryItem } from './SummaryItem';

export function SummaryCard() {
  return (
    <CardBase title={'Summary'} img={<SummarizeIcon sx={{ height: '65px', width: '65px', padding: '14.5px' }} />}>
      <Grid container columnSpacing={2}>
        {summary.items.map((item, index) => (
          <SummaryItem key={index} title={item.title} value={item.value} />
        ))}
        <SummaryItem
          title='LinkedIn'
          value={
            <a href={summary.linkedIn} target='_blank' rel='noopener noreferrer'>
              <LinkedInIcon color='primary' />
            </a>
          }
        />
      </Grid>
    </CardBase>
  );
}
