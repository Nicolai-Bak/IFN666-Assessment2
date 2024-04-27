import { useEffect, useState } from 'react';

export function useStravaActivity(id) {
  const [isLoading, setIsLoading] = useState(true);
  const [activity, setActivity] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_STRAVA_BASE_URL}/activities/${id}`, {
      headers: {
        Authorization: 'Bearer ' + import.meta.env.VITE_STRAVA_ACCESS_TOKEN,
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
