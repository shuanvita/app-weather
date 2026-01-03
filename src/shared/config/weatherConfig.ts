export const weatherConfig = {
  baseUrl: import.meta.env.VITE_WEATHER_BASE_URL || 'https://api.open-meteo.com/v1/',
  geoUrl: import.meta.env.VITE_WEATHER_GEO_URL || 'https://geocoding-api.open-meteo.com/v1/',
  airQualityUrl:
    import.meta.env.VITE_WEATHER_AIR_QUALITY_URL || 'https://air-quality-api.open-meteo.com/v1/',
  defaultCity: 'Moscow',
  defaultDays: 7,
}

export const getWeatherIcon = (wmoCode: number): string => {
  const iconMap: Record<number, string> = {
    // Ясно (день/ночь)
    0: '/images/clear-day.png', // ☀️ Ясно день
    1: '/images/clear-night.png', // 🌙 Ясно ночь

    // Облачность
    2: '/images/partly-cloudy.png', // ⛅ Частично облачно
    3: '/images/cloudy.png', // ☁️ Облачно

    // Туман
    45: '/images/fog.png', // 🌫️ Туман
    48: '/images/fog.png', // Изморозь → туман

    // Морось
    51: '/images/light-rain.png', // 🌦️ Морось слабая
    53: '/images/light-rain.png',
    55: '/images/light-rain.png',

    // Дождь
    61: '/images/rain.png', // 🌧️ Дождь слабый
    63: '/images/heavy-rain.png', // 🌧️ Дождь сильный
    65: '/images/heavy-rain.png',

    // Ливни
    80: '/images/light-rain.png', // 🌦️ Ливни слабые
    81: '/images/rain.png',
    82: '/images/heavy-rain.png',

    // Снег
    71: '/images/snow.png', // ❄️ Снег слабый
    73: '/images/snow.png',
    75: '/images/snow.png',

    // Гроза
    95: '/images/thunderstorm.png', // ⛈️ Гроза
    96: '/images/thunderstorm.png',
    99: '/images/thunderstorm.png',

    // Ветер (fallback)
    // wind-day.png, wind-night.png если нужны
  }

  return iconMap[wmoCode] || '/images/weather/cloudy.png' // cloudy как fallback
}
