import { Typography } from '@mui/material';

import { ActivityIcon } from './ActivityIcon';
import { CardBase } from './CardBase';

export function ActivityCard({ activity }) {
  return (
    <CardBase title={activity.name} img={<ActivityIcon type={activity.type} />}>
      <Typography variant='body2'>
        {/* Add comma as a thousands separator */}
        Distance: {activity.distance.toLocaleString()} m
        <br />
        {/* converts moving time from seconds to hours:minutes:seconds */}
        Moving Time: {new Date(activity.moving_time * 1000).toISOString().slice(11, 11 + 8)}
        <br />
        Sport Type: {activity.type}
        <br />
        Start Date: {activity.start_date.split('T')[0]}
        <br />
        {/* converts average speed from meters/second to km/hour */}
        Average Speed: {(activity.average_speed * 3.6).toFixed(2)} km/h
        <br />
        Average Heart Rate: {activity.average_heartrate} bpm
      </Typography>
    </CardBase>
  );
}
