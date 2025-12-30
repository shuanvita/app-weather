export interface NormalizeWeatherTypes {
  forecastDays: ForecastDayItem[]
  temperature: number | undefined
}

export interface ForecastDayItem {
  dayWeek: string
  weatherIconCode: number | undefined
  temperature: number | undefined
}
