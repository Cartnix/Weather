import useWeather from "../hooks/useWeather";
import WeatherCard from "./WeatherCard";

export default function WeatherWrapper() {
  const { weather, err, isLoading } = useWeather();

  if (isLoading) return <p className="text-center">Загрузка...</p>;
  if (err) return <p className="text-center text-red-500">{err.message}</p>;
  if (!weather) return null;

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {weather.map((item, index) => (
        <WeatherCard
          key={index}
          date={item.date}
          temp={item.temp}
          desc={item.desc}
          icon={item.icon}
          wind={item.wind}
        />
      ))}
    </div>
  );
}
