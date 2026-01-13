export interface NormalizeWeatherTypes {
  forecastDays: ForecastDayItem[]
  temperature: number | undefined
  cloudCover?: number | undefined
  uvIndex?: number | undefined
  pressure?: number | undefined
  sunrise?: string | undefined
  sunset?: string | undefined
  precipitation?: PrecipitationTypes
  maxTemperature?: number
  minTemperature?: number
  humidity?: number | undefined
  windSpeed?: number | undefined
  currentIconCode: number
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
  data: {
    value: NormalizeWeatherTypes
  }
  load: (city?: string) => Promise<void>
  currentCity: string
  activeDayIndex: number
  loading?: boolean
}
