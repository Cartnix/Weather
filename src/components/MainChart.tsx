import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import useDailyWeather from "../hooks/useDailyWeather";

export default function MainChart() {
    const { dailyData, error, loading } = useDailyWeather()

    if (loading) return <p>Получаем данные...</p>
    if (error) return <p>Произошла ошибка: {error.message}</p>

    return (
        <LineChart width={500} height={300} data={dailyData ?? []}>
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <XAxis dataKey="date" />
            <YAxis />
            <Line type="monotone" dataKey="temp" stroke="#8884d8" />
        </LineChart>
    )

}