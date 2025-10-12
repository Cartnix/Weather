import type { WeatherListItem } from "../hooks/useWeather";

export interface GraphWeatherData {
  date: string; 
  temp: number;
}

export function GraphFilterWeather(data: WeatherListItem[]): GraphWeatherData[] {
  return data.map(item => ({
    date: item.dt_txt.split(" ")[1].slice(0, 5),
    temp: Math.round(item.main.temp),
  }));
}
