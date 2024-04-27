import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import TimerIcon from '@mui/icons-material/Timer';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

import { useStravaActivity } from '../hooks/useStravaActivity';
import { useWeather } from '../hooks/useWeather';
import { CardBase } from './CardBase';
import { ErrorCard } from './ErrorCard';

export function Activity() {
  const { id } = useParams();
  const { activity, error, isLoading } = useStravaActivity(id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <ErrorCard errorMessage={error.message} />;
  }
  return (
    <div>
      <ActivityCard activity={activity} />
      <WeatherCard lat={activity.start_latlng[0]} lon={activity.start_latlng[1]} date={activity.start_date} />
      <LapCard laps={activity.laps} />
      <br />
      {/* <span>{JSON.stringify(activity)}</span> */}
    </div>
  );
}

function LapCard({ laps }) {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  return (
    <CardBase title='Laps' img={<TimerIcon fontSize='large' sx={{ margin: '10px' }} />}>
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
      <CardBase title='Weather' img={<img src={weather.forecast.forecastday[0].day.condition.icon} alt='Weather icon' />}>
        <Typography variant='body2'>
          <Typography>Location: {weather.location.name}</Typography>
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
  const activityIcon = (() => {
    switch (activity.type) {
      case 'Run':
        return <DirectionsRunIcon fontSize='large' sx={{ margin: '10px' }} />;
      case 'Ride':
        return <DirectionsBikeIcon fontSize='large' sx={{ margin: '10px' }} />;
      default:
        return <></>;
    }
  })();

  return (
    <CardBase title={activity.name} img={activityIcon}>
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
