import { Grid, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

import { useStravaActivity } from '../hooks/useStravaActivity';
import { useWeather } from '../hooks/useWeather';
import { ActivityIcon } from './ActivityIcon';
import { CardBase } from './CardBase';
import { CardSkeleton } from './CardSkeleton';
import { ErrorCard } from './ErrorCard';
import { LapCard } from './LapCard';
import { MapCard } from './MapCard';

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

function WeatherCard({ lat, lon, date }) {
  const { isLoading, weather, error } = useWeather(lat, lon, date);
  if (lat == null || lon == null || date == null) {
    return <p>Location not available</p>;
  }

  if (isLoading) {
    return <CardSkeleton sx={{ height: '100%' }} />;
  }

  if (error) {
    return <ErrorCard errorMessage={error.message} />;
  }

  return (
    <>
      <CardBase title='Weather' img={<img src={weather.forecast.forecastday[0].day.condition.icon} alt='Weather icon' />}>
        <Typography variant='body2'>
          Location: {weather.location.name}
          <br />
          Date: {weather.forecast.forecastday[0].date}
          <br />
          Max Temp: {weather.forecast.forecastday[0].day.maxtemp_c}°C
          <br />
          Min Temp: {weather.forecast.forecastday[0].day.mintemp_c}°C
          <br />
          Average Temp: {weather.forecast.forecastday[0].day.avgtemp_c}°C
          <br />
          Condition: {weather.forecast.forecastday[0].day.condition.text}
        </Typography>
      </CardBase>
    </>
  );
}

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
