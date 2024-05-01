import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';

import { ActivityCard } from '../components/ActivityCard';
import { CardSkeleton } from '../components/CardSkeleton';
import { ErrorCard } from '../components/ErrorCard';
import { LapCard } from '../components/LapCard';
import { MapCard } from '../components/MapCard';
import { WeatherCard } from '../components/WeatherCard';
import { useStravaActivity } from '../hooks/useStravaActivity';

export function Activity() {
  const { id } = useParams();
  const { activity, error, isLoading } = useStravaActivity(id);

  if (isLoading) {
    return (
      <>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <CardSkeleton sx={{ height: '273px' }} />
          </Grid>
          <Grid item xs={12}>
            <CardSkeleton sx={{ height: '550px' }} />
          </Grid>
        </Grid>
      </>
    );
  }

  if (error) {
    return <ErrorCard errorMessage={error.message} />;
  }
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={activity.start_latlng[0] ? 6 : 12}>
          <ActivityCard activity={activity} />
        </Grid>
        {activity.start_latlng[0] && (
          <Grid item xs={6}>
            <WeatherCard lat={activity.start_latlng[0]} lon={activity.start_latlng[1]} date={activity.start_date} />
          </Grid>
        )}
        {activity.map.polyline && (
          <Grid item xs={12}>
            <MapCard polyline={activity.map.polyline} />
          </Grid>
        )}
        <Grid item xs={12}>
          <LapCard laps={activity.laps} />
        </Grid>
      </Grid>
    </>
  );
}
