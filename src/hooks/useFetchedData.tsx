import { useEffect, useState } from "react"
import { fetchData } from "../services/weatherAPI"

export interface DataI{
    city: string,
    temp: number
}

export const useFetchData = (city: string) => {
    const [data, setData] = useState<null | DataI>(null)
    const [error, setError] = useState<Error | null>(null)
    const [isLoading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        async function Load(city: string) {
            setLoading(true)
            try {
                const result = await fetchData(city)
                setData(result)
            }catch(err){
                if(err instanceof Error){
                    setError(err)
                } else {
                    setError(new Error("New error!"))
                }
            }finally{
                setLoading(false)
            }
        }

        Load(city)
    }, [city])

    return { data, error, isLoading }
}