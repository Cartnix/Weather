import type { WeatherListItem } from "../hooks/useWeather";

export interface CardWeatherData {
  date: string;
  temp: number;
  desc: string;
  icon: string;
  wind: number;
}

export function CardFilterWeather(data: WeatherListItem[]): CardWeatherData[] {
  const cardData: CardWeatherData[] = [];

  data.forEach((item, index) => {
    if (index % 8 === 0) {
      cardData.push({
        date: item.dt_txt.split(" ")[0],
        temp: Math.round(item.main.temp),
        desc: item.weather[0]?.description || "",
        icon: item.weather[0]?.icon || "",
        wind: item.wind.speed,
      });
    }
  });

  return cardData;
}
