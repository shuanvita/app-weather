export interface NormalizeWeatherTypes {
  forecastDays: ForecastDayItem[]
  temperature: number | undefined
  cloudCover?: number | undefined
  uvIndex?: number | undefined
  pressure?: number | undefined
}

export interface ForecastDayItem {
  dayWeek: string
  weatherIconCode: number | undefined
  temperature: number | undefined
}
