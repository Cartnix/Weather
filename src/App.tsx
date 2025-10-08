import WeatherMainCard from "./components/WeatherMainCard"
import WeatherWrapper from "./components/WeatherWrapper"
import useCity from "./hooks/useCity"

function App() {

  const { city, cityErr, isLoadingCity } = useCity()

  return (
    <div className="flex bg-[#b48787] h-dvh justify-center items-center flex-col gap-5">
      <h2 className="text-3xl font-bold text-amber-50">
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
