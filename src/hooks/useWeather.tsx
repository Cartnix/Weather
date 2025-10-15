import { useEffect, useState } from "react";
import { useGeolocation } from "./useGeolocation";

export interface WeatherListItem {
  dt_txt: string;
  main: { temp: number };
  weather: { description: string; icon: string }[];
  wind: { speed: number };
}

interface WeatherAPIResponse {
  list: WeatherListItem[];
}

export default function useWeather(city?: string | null) {
  const { coords } = useGeolocation();
  const [weather, setWeather] = useState<WeatherListItem[] | null>(null);
  const [err, setErr] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    if (!coords && !city) return;

    const fetchWeather = async () => {
      setIsLoading(true);
      try {
        const url = city
          ? `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=ru`
          : `https://api.openweathermap.org/data/2.5/forecast?lat=${coords?.lat}&lon=${coords?.lon}&appid=${API_KEY}&units=metric&lang=ru`;

        const res = await fetch(url);
        if (!res.ok) throw new Error("Can't fetch the weather");

        const weatherData: WeatherAPIResponse = await res.json();
        setWeather(weatherData.list);
      } catch (error) {
        if (error instanceof Error) setErr(error);
        else setErr(new Error("Unknown Error"));
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeather();
  }, [coords, city, API_KEY]);

  return { weather, err, isLoading };
}
