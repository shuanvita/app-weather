import { httpClient } from '@/shared/api'
import { weatherConfig } from '@/shared/config'

export const getWeatherByCoords = (latitude: number, longitude: number) =>
  httpClient('forecast', {
    baseUrl: weatherConfig.baseUrl,
    params: {
      latitude,
      longitude,
      daily:
        'temperature_2m_max,temperature_2m_min,temperature_2m_max,temperature_2m_min,weather_code',
      forecast_days: 7,
      timezone: 'Europe/Moscow',
      current: 'temperature_2m,weather_code,is_day,uv_index,wind_speed_10m',
    },
  })
