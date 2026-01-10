export const weatherConfig = {
  baseUrl: import.meta.env.VITE_WEATHER_BASE_URL || 'https://api.open-meteo.com/v1/',
  geoUrl: import.meta.env.VITE_WEATHER_GEO_URL || 'https://geocoding-api.open-meteo.com/v1/',
  airQualityUrl:
    import.meta.env.VITE_WEATHER_AIR_QUALITY_URL || 'https://air-quality-api.open-meteo.com/v1/',
  defaultCity: 'Boston',
  defaultDays: 7,
}

// TODO вынести из конфига, все что ниже

interface WeatherIcon {
  icon: string
  svg: string
  text: string
}

type WeatherType = 'image' | 'svg'

const iconMap: Record<
  number,
  {
    image: string
    svg: string
    text: string
  }
> = {
  // Ясно (день/ночь)
  0: {
    image: '/images/clear-day.png',
    svg: '/icons/clear-day.svg',
    text: 'Ясно',
  },
  1: {
    image: '/images/clear-night.png',
    svg: '/icons/clear-night.svg',
    text: 'Ясно',
  },

  // Облачность
  2: {
    image: '/images/partly-cloudy.png',
    svg: '/icons/partly-cloudy.svg',
    text: 'Частично облачно',
  },
  3: {
    image: '/images/cloudy.png',
    svg: '/icons/cloudy.svg',
    text: 'Облачно',
  },

  // Туман
  45: {
    image: '/images/fog.png',
    svg: '/icons/fog.svg',
    text: 'Туман',
  },
  48: {
    image: '/images/fog.png',
    svg: '/icons/fog.svg',
    text: 'Туман',
  },

  // Морось
  51: {
    image: '/images/drizzle.png',
    svg: '/icons/drizzle.svg',
    text: 'Морось (слабая)',
  },
  53: {
    image: '/images/drizzle.png',
    svg: '/icons/drizzle.svg',
    text: 'Морось (умеренная)',
  },
  55: {
    image: '/images/drizzle.png',
    svg: '/icons/drizzle.svg',
    text: 'Морось (сильная)',
  },
  56: {
    image: '/images/drizzle.png',
    svg: '/icons/drizzle.svg',
    text: 'Морось со льдом',
  },
  57: {
    image: '/images/drizzle.png',
    svg: '/icons/drizzle.svg',
    text: 'Морось со льдом',
  },

  // Дождь
  61: {
    image: '/images/light-rain.png',
    svg: '/icons/light-rain.svg',
    text: 'Дождь (слабый)',
  },
  63: {
    image: '/images/rain.png',
    svg: '/icons/rain.svg',
    text: 'Дождь (умеренный)',
  },
  65: {
    image: '/images/heavy-rain.png',
    svg: '/icons/heavy-rain.svg',
    text: 'Дождь (сильный)',
  },
  66: {
    image: '/images/sleet.png',
    svg: '/icons/sleet.svg',
    text: 'Ледяной дождь',
  },
  67: {
    image: '/images/sleet.png',
    svg: '/icons/sleet.svg',
    text: 'Ледяной дождь',
  },

  // Снег
  71: {
    image: '/images/light-snow.png',
    svg: 'outline/light-snow',
    text: 'Снег (слабый)',
  },
  73: {
    image: '/images/snow.png',
    svg: 'outline/snow',
    text: 'Снег (умеренный)',
  },
  75: {
    image: '/images/heavy-snow.png',
    svg: '/icons/heavy-snow.svg',
    text: 'Снег (сильный)',
  },
  77: {
    image: '/images/snow.png',
    svg: '/icons/snow.svg',
    text: 'Снежные крупинки',
  },

  // Ливни (80–86)
  80: {
    image: '/images/showers.png',
    svg: '/icons/showers.svg',
    text: 'Ливни (слабые)',
  },
  81: {
    image: '/images/showers.png',
    svg: '/icons/showers.svg',
    text: 'Ливни (умеренные)',
  },
  82: {
    image: '/images/heavy-showers.png',
    svg: '/icons/heavy-showers.svg',
    text: 'Ливни (сильные)',
  },
  85: {
    image: '/images/snow-showers.png',
    svg: '/icons/snow-showers.svg',
    text: 'Снежные ливни (слабые)',
  },
  86: {
    image: '/images/snow-showers.png',
    svg: '/icons/snow-showers.svg',
    text: 'Снежные ливни (сильные)',
  },

  // Грозы (95–99)
  95: {
    image: '/images/thunderstorm.png',
    svg: '/icons/thunderstorm.svg',
    text: 'Гроза',
  },
  96: {
    image: '/images/thunderstorm-hail.png',
    svg: '/icons/thunderstorm-hail.svg',
    text: 'Гроза с градом',
  },
  99: {
    image: '/images/thunderstorm-hail.png',
    svg: '/icons/thunderstorm-hail.svg',
    text: 'Гроза с градом',
  },
}

const defaultIcon: WeatherIcon = {
  icon: '/images/cloudy.png',
  svg: '/icons/cloudy.svg',
  text: 'Облачно',
}

export const getWeatherIcon = (wmoCode: number, type: WeatherType = 'image'): WeatherIcon => {
  const config = iconMap[wmoCode]

  if (!config) {
    return defaultIcon
  }

  const icon = type === 'svg' ? config.svg : config.image

  return {
    icon,
    svg: config.svg,
    text: config.text,
  }
}
