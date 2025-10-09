import WeatherMainCard from "./components/WeatherMainCard"
import WeatherWrapper from "./components/WeatherWrapper"
import useCity from "./hooks/useCity"
import useDailyWeather from "./hooks/useDailyWeather"

function App() {

  const { city, cityErr, isLoadingCity } = useCity()
  useDailyWeather()
  return (
    <div className="flex bg-[#FAFAFA] justify-center items-center flex-col gap-5">
      <h2 className="text-3xl font-bold text-[#222222]">
        {isLoadingCity && "Определяем город..."}
        {cityErr && `Произошла ошибка: ${cityErr}`}
        {city && `Погода в городе ${city}: `}
      </h2>
      <div className="flex flex-col gap-5">
        <WeatherMainCard />
        <WeatherWrapper />
      </div>
    </div>
  )
}

export default App
