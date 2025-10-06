import { useEffect, useState } from "react";
import { useGeolocation } from "./useGeolocation";

interface WeatherListItem {
  dt_txt: string;
  main: { temp: number };
  weather: { description: string; icon: string }[];
  wind: { speed: number };
}

interface dailyWeather {
  date: string;
  temp: number;
  desc: string;
  icon: string;
  wind: number;
}

export default function useWeather() {
  const { coords } = useGeolocation();
  const [weather, setWeather] = useState<dailyWeather[] | null>(null);
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

        const daily = (weatherData.list as WeatherListItem[])
          .filter((_, i) => i % 8 === 0)
          .map(item => ({
            date: item.dt_txt.split(' ')[0],
            temp: Math.round(item.main.temp),
            desc: item.weather[0].description,
            icon: item.weather[0].icon,
            wind: item.wind.speed,
          }));

        setWeather(daily);
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
