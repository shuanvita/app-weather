export interface WeatherIcon {
  image: string
  svg: string
  text: string
}

export type WeatherType = 'image' | 'svg'

const weatherGroups = {
  // Clear sky
  clear: {
    codes: [0, 1],
    image: '/images/clear.png',
    svg: 'outline/sun',
    text: 'Clear sky',
  },
  // Overcast
  partlyCloudy: {
    codes: [2, 3],
    image: '/images/cloudy.png',
    svg: 'outline/cloudy',
    text: 'Overcast',
  },
  // Fog
  fog: {
    codes: [45, 48],
    image: '/images/fog.png',
    svg: 'outline/fog',
    text: 'Fog',
  },
  // Drizzle
  drizzle: {
    codes: [51, 53, 55],
    image: '/images/drizzle.png',
    svg: 'outline/drizzle',
    text: 'Drizzle',
  },
  // Drizzle with Ice
  drizzleIce: {
    codes: [56, 57],
    image: '/images/drizzle-ice.png',
    svg: 'outline/drizzle-ice',
    text: 'Drizzle with Ice',
  },
  // Rain
  rain: {
    codes: [61, 63, 65],
    image: '/images/rain.png',
    svg: 'outline/rain',
    text: 'Rain',
  },
  // Freezing rain
  sleet: {
    codes: [66, 67],
    image: '/images/drizzle-ice.png',
    svg: 'outline/drizzle-ice',
    text: 'Freezing rain',
  },
  // Snow
  snow: {
    codes: [71, 73, 75, 77],
    image: '/images/snow.png',
    svg: 'outline/snow',
    text: 'Snow',
  },
  // Showers & Snow showers
  showers: {
    codes: [80, 81, 82, 85, 86],
    image: '/images/rain-showers.png',
    svg: 'outline/rain-showers',
    text: 'Showers',
  },
  // Thunderstorm
  thunderstorm: {
    codes: [95],
    image: '/images/thunderstorm.png',
    svg: 'outline/thunderstorm',
    text: 'Thunderstorm',
  },
  thunderstormHail: {
    codes: [96, 99],
    image: '/images/thunderstorm-with-hail.png',
    svg: 'outline/thunderstorm-with-hail',
    text: 'Thunderstorm with Hail',
  },
}

const iconMap: Record<number, WeatherIcon> = (() => {
  const map: Record<number, WeatherIcon> = {}
  Object.values(weatherGroups).forEach((group) => {
    group.codes.forEach((code) => {
      map[code] = {
        image: group.image,
        svg: group.svg,
        text: group.text,
      }
    })
  })
  return map
})()

export const getWeatherIcon = (code: number, type: WeatherType = 'image'): WeatherIcon =>
  type === 'svg'
    ? { image: iconMap[code]!.svg, svg: iconMap[code]!.svg, text: iconMap[code]!.text }
    : iconMap[code]!
