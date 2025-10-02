import { useEffect, useState } from "react";
import { useGeolocation } from "./useGeolocation";

export default function useWeather() {
  const { coords } = useGeolocation();
  const [weather, setWeather] = useState<any>(null);
  const [err, setErr] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    if (!coords) return;

    const fetchWeather = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}&units=metric&lang=ru`);
        if (!res.ok) throw new Error("Ошибка при загрузке погоды");
        const weatherData = await res.json();
        setWeather(weatherData);
        console.log(weatherData);
      } catch (error) {
        if (error instanceof Error) setErr(error);
        else setErr(new Error("Неизвестная ошибка"));
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeather();
  }, [coords, API_KEY]);

  return { weather, err, isLoading };
}
