import './App.css';

import { useEffect, useState } from 'react';

import { strava_access_token } from '../secrets';

function App() {
  const { isLoading, activities, error } = useStravaActivities();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <p>{JSON.stringify(activities)}</p>
    </>
  );
}

export default App;

export const strava_base_url = 'https://www.strava.com/api/v3';

function useStravaActivities() {
  const [isLoading, setIsLoading] = useState(true);
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${strava_base_url}/athlete/activities?access_token=${strava_access_token}`)
      .then((response) => response.json())
      .then((data) => setActivities(data))
      .then(() => setIsLoading(false))
      .catch((error) => setError(error));
  }, []);

  return { isLoading, activities, error };
}
