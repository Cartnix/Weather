import SelectField from "./components/Select"
import useCity from "./hooks/useCity"
import useWeather from "./hooks/useWeather"

function App() {

  const { city, cityErr, isLoading } = useCity()
  useWeather()

  return (
    <div className="flex bg-[#b48787] h-dvh justify-center items-center flex-col gap-5">
      <h2>
        {isLoading && "Определяем город..."}
        {cityErr && `Произошла ошибка: ${cityErr}`}
        {city && `Погода в городе ${city}: `}
      </h2>
      < SelectField />
    </div>
  )
}

export default App
