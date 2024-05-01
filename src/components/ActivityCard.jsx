import { Typography } from '@mui/material';

import { ActivityIcon } from './ActivityIcon';
import { CardBase } from './CardBase';

export function ActivityCard({ activity }) {
  return (
    <CardBase title={activity.name} img={<ActivityIcon type={activity.type} />}>
      <Typography variant='body2'>
        Distance: {activity.distance} meters
        <br />
        Moving Time: {activity.moving_time} seconds
        <br />
        Sport Type: {activity.type}
        <br />
        Start Date: {new Date(activity.start_date).toLocaleDateString()}
        <br />
        Average Speed: {activity.average_speed} m/s
        <br />
        Average Heart Rate: {activity.average_heartrate} bpm
      </Typography>
    </CardBase>
  );
}
