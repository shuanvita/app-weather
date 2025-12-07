import { ref, onMounted } from 'vue'
import { getWeatherByCity } from '@/pages/weather/api/weatherApi'
import { weatherConfig } from '@/shared/config/weatherConfig'
import type { WeatherResponse } from './useWeather.types'

export const useWeather = () => {
  const data = ref<WeatherResponse>()
  const loading = ref(false)
  const error = ref<string | null>(null)

  const load = async (city: string) => {
    loading.value = true
    error.value = null
    try {
      data.value = await getWeatherByCity(city)
    } catch {
      error.value = 'Не удалось загрузить погоду'
    } finally {
      loading.value = false
    }
  }

  onMounted(() => {
    void load(weatherConfig.defaultCity)
  })

  return { data, loading, error, load }
}
