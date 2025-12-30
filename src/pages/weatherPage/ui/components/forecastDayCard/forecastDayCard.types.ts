export interface ForecastDayCard {
  dayWeek: string
  weatherIconCode: number | undefined
  temperature: number | undefined
  isActive?: boolean
}
