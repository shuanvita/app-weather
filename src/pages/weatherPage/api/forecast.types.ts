export interface ForecastResponse {
  daily: {
    temperature_2m_max: number[]
    temperature_2m_min: number[]
    temperature_2m_mean: number[]
    time: string[]
    weather_code: number[]
  }
}
