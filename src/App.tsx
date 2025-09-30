import SelectField from "./components/Select"
import { useGeolocation } from "./hooks/useGeolocation"

function App() {

  const city = useGeolocation()
  console.log(city)

  return (
    <div className="flex bg-[#b48787] h-dvh justify-center items-center flex-col gap-5">
      <h2 className="text-4xl text-[#E6E6E6] font-bold">Hello, select your city</h2>
      < SelectField />
    </div>
  )
}

export default App
