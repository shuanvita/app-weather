export interface WeatherResponse {
  location: {
    name: string
    country: string
  }
  current: {
    temp_c: number
    condition: {
      text: string
      icon: string
    }
    humidity: number
    wind_kph: number
  }
  forecast: {
    forecastday: {
      day: {
        maxtemp_c: number
        mintemp_c: number
      }[]
    }
  }
}
