import { useEffect, useState } from "react";
import { useGeolocation } from "./useGeolocation";
import type { dailyWeather } from "./useWeather";

export default function useDailyWeather() {
    const API_KEY = import.meta.env.VITE_API_KEY
    const [dailyData, setDailyData] = useState<dailyWeather[] | null>(null)
    const [error, setError] = useState<Error | null>(null)
    const [loading, SetLoading] = useState<boolean>(false)
    const { coords } = useGeolocation()

    if (!coords) {
        return
    }

    useEffect(() => {
        SetLoading(true)
        const DailyQuery = async () => {
            try {
                const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}&units=metric`)
                if (!res.ok) {
                    throw new Error("Can't get weather data.")
                }
                const DailyRes = await res.json()
                console.log(DailyRes)
                setDailyData(DailyRes)
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
