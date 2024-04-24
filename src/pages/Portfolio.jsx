import { Card, CardContent, CardHeader, Skeleton } from '@mui/material';
import { useEffect, useState } from 'react';

import { strava_access_token } from '../../secrets';

export function Portfolio() {
  const { isLoading, activities, error } = useStravaActivities();

  if (isLoading) {
    return Array.from({ length: 5 }).map((_, index) => (
      <Skeleton key={index} variant='rectangular' sx={{ height: '128px', marginBottom: '16px' }} />
    ));
  }

  if (error) {
    return (
      <>
        <Card sx={{ backgroundColor: 'error.main' }}>
          <CardHeader title={error.message} sx={{ textAlign: 'center', color: 'text.secondary' }} />
        </Card>
      </>
    );
  }

  return (
    <>
      {activities.map((activity) => (
        <Card raised key={activity.id} sx={{ backgroundColor: 'transparent', marginBottom: '16px' }}>
          <CardHeader title={activity.name} />
          <CardContent>{activity.start_date}</CardContent>
        </Card>
      ))}
    </>
  );
}

const strava_base_url = 'https://www.strava.com/api/v3';

function useStravaActivities() {
  const [isLoading, setIsLoading] = useState(true);
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${strava_base_url}/athlete/activities?access_token=${strava_access_token}`)
      .then((response) => {
        if (response.status === 401) {
          throw new Error('Unauthorized');
        }
        return response.json();
      })
      .then((data) => setActivities(data))
      .then(() => setIsLoading(false))
      .catch((error) => setError(error));
  }, []);

  return { isLoading, activities, error };
}
