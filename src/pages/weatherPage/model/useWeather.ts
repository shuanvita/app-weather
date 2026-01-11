import { ref, onMounted, watch } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import { getCoordsByCity } from '@/pages/weatherPage/api/geocoding.api'
import { getWeatherByCoords } from '@/pages/weatherPage/api/forecast.api'
import { weatherConfig } from '@/shared/config'
import type { ForecastResponse, Coords } from '../api/forecast.types.ts'

export const useWeather = () => {
  const data = ref<ForecastResponse | null>(null)
  const coords = ref<Coords | null>(null)
  const lastCity = useLocalStorage('weather-last-city', weatherConfig.defaultCity, {
    initOnMounted: true, // Инициализация строго на клиенте после mounted
  })
  const currentCity = ref(weatherConfig.defaultCity)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const load = async (city: string = weatherConfig.defaultCity) => {
    currentCity.value = city
    lastCity.value = city
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

  watch(lastCity, (newLastCity) => {
    if (newLastCity && newLastCity !== currentCity.value) {
    void load(newLastCity)
    }
  })

  onMounted(async () => {
    if (lastCity.value && lastCity.value !== weatherConfig.defaultCity) {
      await load(lastCity.value)
    }
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
