import { computed, type Ref } from 'vue'
import { useWeather } from './index'
import type { NormalizeWeatherTypes } from './normalizeWeather.types'

export const useNormalizeData = (activeDayIndex: Ref<number>) => {
  const { data } = useWeather()

  const normalizeWeatherData = computed<NormalizeWeatherTypes>(() => {
    const daily = data.value?.daily
    if (!daily) {
      return { forecastDays: [], temperature: undefined }
    }

    return {
      forecastDays: daily.time.map((item, idx) => ({
        dayWeek: new Date(item).toLocaleDateString('en-US', { weekday: 'short' }),
        weatherIconCode: daily.weather_code[idx],
        temperature: daily.temperature_2m_mean[idx],
      })),
      temperature: daily.temperature_2m_mean[activeDayIndex.value],
    }
  })

  return { normalizeWeatherData }
}
