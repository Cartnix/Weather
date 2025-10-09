import MainChart from "./MainChart";

export default function WeatherMainCard() {
    return (
        <div className="flex flex-col items-center justify-center w-full p-4 bg-[rgba(255,255,255,0.25)] backdrop-blur-2xl border border-white/30 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.15)] text-[#222222] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)]">
            <MainChart />
        </div>
    )
}