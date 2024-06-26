import { useEffect, useState } from 'react';

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
    fetch(`${import.meta.env.VITE_WEATHER_BASE_URL}/history.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${lat},${lon}&dt=${date}`)
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
