export interface ForecastResponse {
  daily: {
    temperature_2m_max: number[]
    temperature_2m_min: number[]
    temperature_2m_mean: number[]
    time: string[]
    weather_code: number[]
    uv_index_max: number[]
    pressure_msl_mean: number[]
    cloud_cover_mean: number[]
  }
  hourly: {
    precipitation_probability: number[]
    time: string[]
  }
}
