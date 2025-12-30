import { httpClient } from '@/shared/api'
import { weatherConfig } from '@/shared/config'

export const getCoordsByCity = (city = weatherConfig.defaultCity) =>
  httpClient('search', {
    baseUrl: weatherConfig.geoUrl,
    params: {
      name: city,
      count: 1,
    },
  })
