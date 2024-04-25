import { Card, CardContent, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

import { useStravaActivity } from '../hooks/useStravaActivity';
import { useWeather } from '../hooks/useWeather';

export function Activity() {
  const { id } = useParams();
  const { activity, error, isLoading } = useStravaActivity(id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }
  return (
    <div>
      <h1>Activity</h1>
      <p>Activity ID: {id}</p>
      <p>Activity Name: {activity.name}</p>
      <br />
      <ActivityCard activity={activity} />
      <WeatherCard lat={activity.start_latlng[0]} lon={activity.start_latlng[1]} date={activity.start_date} />
      <span>{JSON.stringify(activity)}</span>
    </div>
  );
}

function WeatherCard({ lat, lon, date }) {
  const { isLoading, weather, error } = useWeather(lat, lon, date);
  if (lat == null || lon == null || date == null) {
    return <p>Location not available</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>error: {error.message}</p>;
  }

  return (
    <>
      {/* <p> {JSON.stringify(weather)} </p> */}
      <img src={weather.forecast.forecastday[0].day.condition.icon} alt='weather icon' />
    </>
    // <Card sx={{ minWidth: 275, backgroundColor: 'transparent', p: 3, borderRadius: 2 }}>
    //   <CardContent>
    //     <Typography variant='h4' component='div' gutterBottom>
    //       Weather
    //     </Typography>
    //     <Typography variant='h6' color='text.secondary' gutterBottom>
    //       Location: {weather.location.name}
    //     </Typography>
    //     <Typography variant='body1'>
    //       Date: {weather.forecast.forecastday.date}
    //       <br />
    //       Max Temp: {weather.forecast.forecastday.day.maxtemp_c}°C
    //       <br />
    //       Min Temp: {weather.forecast.forecastday.day.mintemp_c}°C
    //       <br />
    //       Average Temp: {weather.forecast.forecastday.day.avgtemp_c}°C
    //       <br />
    //       Condition: {weather.forecast.forecastday.day.condition.text}
    //     </Typography>
    //   </CardContent>
    // </Card>
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
