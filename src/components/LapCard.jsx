import TimerIcon from '@mui/icons-material/Timer';

import { CardBase } from './CardBase';
import { LapsTable } from './LapsTable';

export function LapCard({ laps }) {
  return (
    <CardBase title='Laps' img={<TimerIcon sx={{ height: '65px', width: '65px', padding: '14.5px' }} />}>
      <LapsTable laps={laps} />
    </CardBase>
  );
}
