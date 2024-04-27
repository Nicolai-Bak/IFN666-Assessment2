import { useEffect, useState } from 'react';

export function useStravaActivities() {
  const [isLoading, setIsLoading] = useState(true);
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_STRAVA_BASE_URL}/athlete/activities?access_token=${import.meta.env.VITE_STRAVA_ACCESS_TOKEN}`)
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
