interface CardI {
  date: string;
  temp: number;
  desc: string;
  icon: string;
  wind: number;
}

export default function WeatherCard({ date, temp, desc, icon, wind }: CardI) {
  return (
    <div className="flex flex-col items-center justify-center w-48 p-4 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg text-white">
      <p className="font-semibold">{date}</p>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={desc}
        className="w-16 h-16"
      />
      <p className="text-2xl font-bold">{temp}°C</p>
      <p className="text-sm capitalize opacity-80">{desc}</p>
      <p className="text-sm mt-1">{wind} м/с</p>
    </div>
  );
}
