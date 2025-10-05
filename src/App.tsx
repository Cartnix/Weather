import useCity from "./hooks/useCity"
import useWeather from "./hooks/useWeather"

function App() {

  const { city, cityErr, isLoadingCity } = useCity()
  const {weather, err, isloading} = useWeather()

  console.log(weather)

  return (
    <div className="flex bg-[#b48787] h-dvh justify-center items-center flex-col gap-5">
      <h2>
        {isLoadingCity && "Определяем город..."}
        {cityErr && `Произошла ошибка: ${cityErr}`}
        {city && `Погода в городе ${city}: `}
      </h2>
      <div>
        
      </div>
    </div>
  )
}

export default App
