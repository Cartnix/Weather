export interface CardI {
  date: string;
  temp: number;
  desc: string;
  icon: string;
  wind: number;
}

export default function WeatherCard({ date, temp, desc, icon, wind }: CardI) {
  return (
    <div className="flex flex-col items-center justify-center w-48 p-4 bg-[rgba(255,255,255,0.25)] backdrop-blur-2xl border border-white/30 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.15)] text-[#222222] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)]">
      <p className="font-semibold">{date}</p>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={desc}
        className="w-16 h-16 drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]"
      />
      <p className="text-2xl font-bold">{temp}°C</p>
      <p className="text-sm capitalize opacity-80">{desc}</p>
      <p className="text-sm mt-1">{wind} м/с</p>

    </div>
  );
}
