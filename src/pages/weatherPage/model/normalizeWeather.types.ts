export interface NormalizeWeatherTypes {
  forecastDays: ForecastDayItem[]
  temperature: number | undefined
  cloudCover?: number | undefined
  uvIndex?: number | undefined
  pressure?: number | undefined
  precipitation?: PrecipitationTypes
}

export interface ForecastDayItem {
  dayWeek: string
  weatherIconCode: number | undefined
  temperature: number | undefined
}

export interface PrecipitationTypes {
  time: string[] | undefined
  values: number[] | undefined
}
