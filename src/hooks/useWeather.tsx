import { useEffect, useState } from "react";
import useCity from "./useCity";

export default function useWeather()
{
    const{city} = useCity()
    const[weather, setWeather] = useState<null>(null)
    const[err, setErr] = useState<Error | null>(null)
    const[isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        const weather = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=43.238949&lon=76.889709&units=metric&appid=YOUR_API_KEY
`)
    }, [city])

}