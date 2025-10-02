import SelectField from "./components/Select"
import useCity from "./hooks/useCity"

function App() {

  const { city, cityErr, isLoading } = useCity()

  return (
    <div className="flex bg-[#b48787] h-dvh justify-center items-center flex-col gap-5">
      <h2>
        {isLoading && "Определяем город..."}
        {cityErr && `Произошла ошибка: ${cityErr}`}
        {city && `Город найден: ${city}`}
      </h2>
      < SelectField />
    </div>
  )
}

export default App
