import { httpClient } from '@/shared/api'
import { weatherConfig } from '@/shared/config/weatherConfig'

export const getWeatherByCity = (
  city = weatherConfig.defaultCity,
  days = weatherConfig.defaultDays,
) =>
  httpClient('forecast.json', {
    baseUrl: weatherConfig.baseUrl,
    params: {
      key: weatherConfig.apiKey,
      q: city,
      days,
      lang: 'en',
    },
  })
