import { ref, onMounted } from 'vue'
import { getCoordsByCity } from '@/pages/weatherPage/api/geocoding.api'
import { getWeatherByCoords } from '@/pages/weatherPage/api/forecast.api'
import { weatherConfig } from '@/shared/config'
import type { ForecastResponse } from '../api/forecast.types.ts'

export const useWeather = () => {
  const data = ref<ForecastResponse | null>(null)
  const coords = ref(null)
  const currentCity = ref(weatherConfig.defaultCity)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const load = async (city: string = weatherConfig.defaultCity) => {
    currentCity.value = city
    loading.value = true
    error.value = null

    try {
      const coordsResponse = await getCoordsByCity(city)
      if (!coordsResponse.results?.[0]) {
        error.value = `Город "${city}" не найден`
        loading.value = false
        return
      }

      coords.value = coordsResponse.results[0]

      data.value = await getWeatherByCoords(
        coordsResponse.results[0].latitude,
        coordsResponse.results[0].longitude,
      )
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Не удалось загрузить погоду'
      data.value = null
      coords.value = null
    } finally {
      loading.value = false
    }
  }

  const refresh = () => load(currentCity.value)

  onMounted(() => {
    void load()
  })

  return {
    data,
    coords,
    currentCity,
    loading,
    error,
    load,
    refresh,
  }
}
