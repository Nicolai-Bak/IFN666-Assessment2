import { useEffect, useState } from 'react';

import { strava_access_token, strava_base_url } from '../../secrets';

export function useStravaActivities() {
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
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  return { isLoading, activities, error };
}
