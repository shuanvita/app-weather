export interface NormalizeWeatherTypes {
  forecastDays: ForecastDayItem[]
  temperature: number | undefined
  cloudCover?: number | undefined
  uvIndex?: number | undefined
  pressure?: number | undefined
  sunrise?: string | undefined
  sunset?: string | undefined
  precipitation?: PrecipitationTypes
  maxTemperature?: number | undefined
  minTemperature?: number | undefined
  humidity?: number | undefined
  windSpeed?: number | undefined
}

export interface ForecastDayItem {
  dayWeek: string
  weatherIconCode: number
  temperature: number
}

export interface PrecipitationTypes {
  time: string[] | undefined
  values: number[] | undefined
}

export interface WeatherContext {
  data: NormalizeWeatherTypes | null
  load: (city?: string) => Promise<void>
  currentCity: string
  activeDayIndex: number
  loading?: boolean
}
