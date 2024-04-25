import { useEffect, useState } from 'react';

import { strava_access_token, strava_base_url } from '../../secrets';

export function useStravaActivity(id) {
  const [isLoading, setIsLoading] = useState(true);
  const [activity, setActivity] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${strava_base_url}/activities/${id}`, {
      headers: {
        Authorization: 'Bearer ' + strava_access_token,
      },
    })
      .then((response) => {
        if (response.status === 401) {
          throw new Error('Unauthorized');
        }
        return response.json();
      })
      .then((data) => setActivity(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, [id]);

  return { isLoading, activity, error };
}
