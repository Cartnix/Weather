import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import useDailyWeather from "../hooks/useDailyWeather";

export default function mainChart() {
    const { data, err, isLoading } = useDailyWeather()

    return (
        <LineChart width={500} height={300}>
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
        </LineChart>
    )
}