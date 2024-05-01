import { Typography } from '@mui/material';

import { useWeather } from '../hooks/useWeather';
import { CardBase } from './CardBase';
import { CardSkeleton } from './CardSkeleton';
import { ErrorCard } from './ErrorCard';

export function WeatherCard({ lat, lon, date }) {
  const { isLoading, weather, error } = useWeather(lat, lon, date);

  // Making sure input for api call exists. Double equals is used to check for null or undefined.
  if (lat == null || lon == null || date == null) {
    return <p>Location not available</p>;
  }

  // While loading, show a skeleton card.
  if (isLoading) {
    return <CardSkeleton sx={{ height: '100%' }} />;
  }

  // If there is an error, show an error card.
  if (error) {
    return <ErrorCard errorMessage={error.message} />;
  }

  // If there is no error and the data is loaded, show the weather card.
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
