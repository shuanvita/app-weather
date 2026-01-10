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
    sunrise: string[]
    sunset: string[]
    relative_humidity_2m_mean: number[]
    wind_speed_10m_mean: number[]
    visibility_mean: number[]
  }
  hourly: {
    precipitation_probability: number[]
    time: string[]
  }
}

export interface Coords {
  latitude: number
  longitude: number
}
