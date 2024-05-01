import { Stack } from '@mui/material';

import { CareerCard } from '../components/CareerCard';
import { EducationCard } from '../components/EducationCard';
import { SummaryCard } from '../components/SummaryCard';

export function Resume() {
  return (
    <Stack spacing={1} marginX={{ xl: '200px' }}>
      <SummaryCard />
      <CareerCard />
      <EducationCard />
    </Stack>
  );
}
