import { useEffect, useState } from "react";
import { useGeolocation } from "./useGeolocation";
import type { dailyWeather } from "./useWeather";

export interface HourlyWeatherItem {
    dt: number;
    temp: number;
    weather: { description: string; icon: string }[];
    wind_speed: number;
}

export default function useDailyWeather() {
    const API_KEY = import.meta.env.VITE_API_KEY
    const [dailyData, setDailyData] = useState<dailyWeather[] | null>(null)
    const [error, setError] = useState<Error | null>(null)
    const [loading, SetLoading] = useState<boolean>(false)
    const { coords } = useGeolocation()

    useEffect(() => {

        if (!coords) {
            return
        }

        SetLoading(true)
        const DailyQuery = async () => {
            try {
                const res = await fetch(`https://api.openweathermap.org/data/2.8/onecall?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}&units=metric`)
                if (!res.ok) {
                    throw new Error("Can't get weather data.")
                }
                const DailyRes = await res.json()
                const hourly = (DailyRes.hourly as HourlyWeatherItem[])
                    .slice(0, 24).map(item => ({
                        date: new Date(item.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        temp: Math.round(item.temp),
                        desc: item.weather[0].description,
                        icon: item.weather[0].icon,
                        wind: item.wind_speed
                    }))
                console.log(hourly)
                setDailyData(hourly)
            } catch (err) {
                if (err instanceof Error) {
                    setError(err)
                } else {
                    setError(new Error("New Error"))
                }
            }
            finally {
                SetLoading(false)
            }
        }

        DailyQuery();
    }, [coords, API_KEY])

    return { dailyData, error, loading }
}
