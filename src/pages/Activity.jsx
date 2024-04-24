import { Card, CardContent, Typography } from '@mui/material';
import { useLocation, useParams } from 'react-router-dom';

export function Activity() {
  const { id } = useParams();
  const { state } = useLocation();
  const { activity } = state;
  return (
    <div>
      <h1>Activity</h1>
      <p>Activity ID: {id}</p>
      <p>Activity Name: {activity.name}</p>
      <br />
      <span>{JSON.stringify(activity)}</span>
      <ActivityCard activity={activity} />
    </div>
  );
}

export function ActivityCard({ activity }) {
  return (
    <Card sx={{ minWidth: 275, backgroundColor: 'transparent', p: 3, borderRadius: 2 }}>
      <CardContent>
        <Typography variant='h4' component='div' gutterBottom>
          {activity.name}
        </Typography>
        <Typography variant='h6' color='text.secondary' gutterBottom>
          Athlete ID: {activity.athlete.id}
        </Typography>
        <Typography variant='body1'>
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
      </CardContent>
    </Card>
  );
}
