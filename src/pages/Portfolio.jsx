import { Card, CardContent, CardHeader, Skeleton } from '@mui/material';
import { Link } from 'react-router-dom';

import { useStravaActivities } from '../hooks/useStravaActivities';

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
        <Link key={activity.id} to={`${activity.id}`} style={{ textDecoration: 'none' }}>
          <Card raised sx={{ backgroundColor: 'transparent', marginBottom: '16px' }}>
            <CardHeader title={activity.name} />
            <CardContent>{activity.start_date.split('T')[0]}</CardContent>
          </Card>
        </Link>
      ))}
    </>
  );
}
