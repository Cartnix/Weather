import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, type TooltipProps } from "recharts";
import { GraphFilterWeather } from "../filters/Graph_Filter";
import useWeather from "../hooks/useWeather";

interface CustomTooltipProps extends TooltipProps<number, string> {
    payload?: {
        value: number;
    }[];
    label?: string;
}

export default function MainChart() {
    const { weather, err, isLoading } = useWeather()

    if (isLoading) return <p>Получаем данные...</p>
    if (err) return <p>Произошла ошибка: {err.message}</p>

    const chartData = weather ? GraphFilterWeather(weather) : []

    return (
        <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={chartData.slice(1,9) ?? []}>
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <XAxis dataKey="date" />
                <YAxis domain={[-30, 30]} dataKey="temp" />
                <Area
                    type="monotone"
                    dataKey="temp"
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.2}
                    activeDot={false}
                    baseValue={"dataMin"}
                />
                <Tooltip content={<CustomTooltip />} />
            </AreaChart>
        </ResponsiveContainer>
    )

}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg p-2 shadow-md">
                <p className="text-sm text-gray-700">{`Дата: ${label}`}</p>
                <p className="text-sm text-blue-600 font-semibold">
                    {`Температура: ${payload[0].value}°C`}
                </p>
            </div>
        );
    }

    return null;
};