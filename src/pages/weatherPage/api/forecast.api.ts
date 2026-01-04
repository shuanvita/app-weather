import { httpClient } from '@/shared/api'
import { weatherConfig } from '@/shared/config'
import type { ForecastResponse } from './forecast.types.ts'

export const getWeatherByCoords = (
  latitude: number,
  longitude: number,
): Promise<ForecastResponse> =>
  httpClient('forecast', {
    baseUrl: weatherConfig.baseUrl,
    params: {
      latitude,
      longitude,
      daily:
        'temperature_2m_max,temperature_2m_min,temperature_2m_mean,weather_code,uv_index_max,pressure_msl_mean,cloud_cover_mean,sunrise,sunset',
      hourly: 'precipitation_probability',
      forecast_days: 7,
      timezone: 'Europe/Moscow',
      current: 'temperature_2m,weather_code,is_day,uv_index,wind_speed_10m',
    },
  })
