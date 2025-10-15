import SelectField from "./components/Select";
import WeatherMainCard from "./components/WeatherMainCard";
import WeatherWrapper from "./components/WeatherWrapper";
import useCity from "./hooks/useCity";
import { useState } from "react";

function App() {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const { city, cityErr, isLoadingCity } = useCity(selectedCity);

  return (
    <div className="flex bg-[#FAFAFA] justify-center items-center flex-col gap-5 p-20">
      <h2 className="text-3xl font-bold text-[#222222]">
        {isLoadingCity && "Detecting city..."}
        {cityErr && (
          <div>
            An error occurred: {cityErr.message}
          </div>
        )}
        {city && `Погода в городе ${city}: `}
      </h2>

      <div className="flex flex-col gap-5 items-center">
        <SelectField
          value={selectedCity}
          onChange={(v) => setSelectedCity(v)}
        />

        <WeatherMainCard city={selectedCity} />
        <WeatherWrapper city={selectedCity} />


      </div>
    </div>
  );
}

export default App;
