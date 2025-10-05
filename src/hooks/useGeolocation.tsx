import { useEffect, useState } from "react"

export const useGeolocation = () => {
  const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [isLoadingGeo, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCoords({ lat: pos.coords.latitude, lon: pos.coords.longitude })
        setLoading(false)
      },
      (geoError) => {
        setError(new Error(geoError.message))
        setLoading(false)
      }
    )
  }, [])

  return { coords, error, isLoadingGeo }
}
