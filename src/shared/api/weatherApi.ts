import { httpClient } from "@/shared/api/httpClient/httpClient.ts";

export const getWeatherForecast = async (city: string) => {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY

  if (!apiKey) {
    throw new Error('VITE_WEATHER_API_KEY не установлен')
  }

  return await httpClient('/forecast.json', {
    params: { key: apiKey, q: city, days: 1, aqi: 'no', alerts: 'no' },
    baseUrl: 'https://api.weatherapi.com/v1'
  })
}
