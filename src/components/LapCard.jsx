import TimerIcon from '@mui/icons-material/Timer';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import { CardBase } from './CardBase';

export function LapCard({ laps }) {
  return (
    <CardBase title='Laps' img={<TimerIcon sx={{ height: '65px', width: '65px', padding: '14.5px' }} />}>
      <TableContainer component={Paper} sx={{ backgroundColor: 'transparent' }}>
        <Table sx={{ minWidth: 350 }} size='small' aria-label='a dense table'>
          <TableHead>
            <TableRow>
              <TableCell>Lap</TableCell>
              <TableCell align='right'>Distance (m)</TableCell>
              <TableCell align='right'>Time</TableCell>
              <TableCell align='right'>Avg Pace (min/km)</TableCell>
              <TableCell align='right'>Avg HR</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {laps.map((lap, index) => (
              <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component='th' scope='row'>
                  {index + 1}
                </TableCell>
                <TableCell align='right'>{Math.round(lap.distance)}</TableCell>
                <TableCell align='right'>
                  {Math.floor(lap.moving_time / 60)}:
                  {Math.round(lap.moving_time % 60).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}
                </TableCell>
                <TableCell align='right'>
                  {Math.floor(16.667 / lap.average_speed)}:
                  {Math.round(((16.667 / lap.average_speed) % 1) * 60).toLocaleString('en-US', {
                    minimumIntegerDigits: 2,
                    useGrouping: false,
                  })}
                </TableCell>
                <TableCell align='right'>{Math.round(lap.average_heartrate)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </CardBase>
  );
}
