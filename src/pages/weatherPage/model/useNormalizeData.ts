import { computed, type Ref } from 'vue'
import { useWeather } from './index'
import type { NormalizeWeatherTypes } from './normalizeWeather.types'

export const useNormalizeData = (activeDayIndex: Ref<number>) => {
  const { data, load, currentCity } = useWeather()

  const normalizeWeatherData = computed<NormalizeWeatherTypes>(() => {
    const daily = data.value?.daily
    const hourly = data.value?.hourly

    if (!daily) {
      return { forecastDays: [], temperature: undefined, precipitation: { time: [], values: [] } }
    }

    const now = new Date()
    const currentHourUTC = now.getUTCHours()

    const dayOffset = activeDayIndex.value * 24
    const startHour = dayOffset + currentHourUTC
    const endHour = startHour + 7

    const precipData = {
      time: hourly?.time.slice(startHour, endHour),
      values: hourly?.precipitation_probability.slice(startHour, endHour),
    }

    return {
      forecastDays: daily.time.map((item, idx) => ({
        dayWeek: new Date(item).toLocaleDateString('en-US', { weekday: 'short' }),
        weatherIconCode: daily.weather_code[idx],
        temperature: daily.temperature_2m_mean[idx],
      })),
      temperature: daily.temperature_2m_mean[activeDayIndex.value],
      uvIndex: daily.uv_index_max[activeDayIndex.value],
      pressure: daily.pressure_msl_mean[activeDayIndex.value],
      cloudCover: daily.cloud_cover_mean[activeDayIndex.value],
      sunrise: daily.sunrise[activeDayIndex.value],
      sunset: daily.sunset[activeDayIndex.value],
      precipitation: precipData,
      currentDayWeek: daily.time[activeDayIndex.value],
      currentIconCode: daily.weather_code[activeDayIndex.value],
      maxTemperature: daily.temperature_2m_max[activeDayIndex.value],
      minTemperature: daily.temperature_2m_min[activeDayIndex.value],
      humidity: daily.relative_humidity_2m_mean[activeDayIndex.value],
      windSpeed: daily.wind_speed_10m_mean[activeDayIndex.value],
      visibility: daily.visibility_mean[activeDayIndex.value],
    }
  })

  return { normalizeWeatherData, load, currentCity }
}
