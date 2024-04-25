import { useEffect, useState } from 'react';

import { weather_api_key } from '../../secrets';

export function useWeather(lat, lon, date) {
  const [isLoading, setIsLoading] = useState(true);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (lat == null || lon == null || date == null) {
      setError(new Error('Location not available'));
      setIsLoading(false);
      return;
    }
    fetch(`http://api.weatherapi.com/v1/history.json?key=${weather_api_key}&q=${lat},${lon}&dt=${date}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return setWeather(data);
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, [lat, lon, date]);

  return { isLoading, weather, error };
}
