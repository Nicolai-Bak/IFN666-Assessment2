import { FormControl, InputLabel, MenuItem, OutlinedInput, Select, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useStravaActivities } from '../hooks/useStravaActivities';
import { ActivityIcon } from './ActivityIcon';
import { CardBase } from './CardBase';
import { CardSkeleton } from './CardSkeleton';
import { ErrorCard } from './ErrorCard';

export function Portfolio() {
  const { isLoading, activities, error } = useStravaActivities();
  const [activityTypes, setActivityTypes] = useState([]);

  if (isLoading) {
    return (
      <>
        <CardSkeleton sx={{ width: '300px', height: '56px', marginBottom: '16px' }} />
        {Array.from({ length: 5 }).map((_, index) => (
          <CardSkeleton key={index} sx={{ height: '128px', marginBottom: '16px' }} />
        ))}
      </>
    );
  }

  if (error) {
    return <ErrorCard errorMessage={error.message} />;
  }

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setActivityTypes(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <>
      <FormControl sx={{ marginBottom: '16px', width: 300 }}>
        <InputLabel id='type-selector'>Activity types</InputLabel>
        <Select
          labelId='type-selector'
          multiple
          value={activityTypes}
          onChange={handleChange}
          input={<OutlinedInput label='Activity types' />}
        >
          {activities
            .map((activity) => activity.type)
            .filter((value, index, self) => self.indexOf(value) === index)
            .map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      {(activityTypes.length > 0 ? activities.filter((activity) => activityTypes.includes(activity.type)) : activities).map((activity) => (
        <Link key={activity.id} to={`${activity.id}`} style={{ textDecoration: 'none' }}>
          <CardBase title={activity.name} img={<ActivityIcon type={activity.type} />} sx={{ marginBottom: '16px' }}>
            <Typography variant='body2'>{activity.start_date.split('T')[0]}</Typography>
          </CardBase>
        </Link>
      ))}
    </>
  );
}
