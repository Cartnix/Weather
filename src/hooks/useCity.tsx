import { useEffect, useState } from "react";
import { useGeolocation } from "./useGeolocation";

export default function useCity(selectedCity: string | null) {
  const { coords, isLoadingGeo } = useGeolocation();
  const [city, setCity] = useState<string | null>(null);
  const [loadingCity, setLoadingCity] = useState<boolean>(false);
  const [cityErr, setCityErr] = useState<Error | null>(null);

  useEffect(() => {
    if (selectedCity) {
      setCity(selectedCity);
      return;
    }

    if (!coords) return;

    const fetchCity = async () => {
      try {
        setLoadingCity(true);
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${coords.lat}&lon=${coords.lon}&format=json`
        );
        const data = await response.json();

        setCity(
          data.address.city || data.address.town || data.address.village || null
        );
      } catch (err) {
        if (err instanceof Error) {
          setCityErr(err);
        } else {
          setCityErr(new Error("Unknown city error"));
        }
      } finally {
        setLoadingCity(false);
      }
    };

    fetchCity();
  }, [coords, selectedCity]); 

  return { cityErr, isLoadingCity: isLoadingGeo || loadingCity, city };
}
