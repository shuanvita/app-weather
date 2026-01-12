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
    svg: '/svg/outline/sun.svg',
    text: 'Clear sky',
  },
  // Overcast
  partlyCloudy: {
    codes: [2, 3],
    image: '/images/cloudy.png',
    svg: '/svg/outline/cloudy.svg',
    text: 'Overcast',
  },
  // Fog
  fog: {
    codes: [45, 48],
    image: '/images/fog.png',
    svg: '/svg/outline/fog.svg',
    text: 'Fog',
  },
  // Drizzle
  drizzle: {
    codes: [51, 53, 55],
    image: '/images/drizzle.png',
    svg: '/svg/outline/drizzle.svg',
    text: 'Drizzle',
  },
  // Drizzle with Ice
  drizzleIce: {
    codes: [56, 57],
    image: '/images/drizzle-ice.png',
    svg: '/svg/outline/drizzle-ice.svg',
    text: 'Drizzle with Ice',
  },
  // Rain
  rain: {
    codes: [61, 63, 65],
    image: '/images/rain.png',
    svg: '/svg/outline/rain.svg',
    text: 'Rain',
  },
  // Freezing rain
  sleet: {
    codes: [66, 67],
    image: '/images/drizzle-ice.png',
    svg: '/svg/outline/drizzle-ice.svg',
    text: 'Freezing rain',
  },
  // Snow
  snow: {
    codes: [71, 73, 75, 77],
    image: '/images/snow.png',
    svg: '/svg/outline/snow.svg',
    text: 'Snow',
  },
  // Showers & Snow showers
  showers: {
    codes: [80, 81, 82, 85, 86],
    image: '/images/rain-showers.png',
    svg: '/svg/outline/rain-showers.svg',
    text: 'Showers',
  },
  // Thunderstorm
  thunderstorm: {
    codes: [95],
    image: '/images/thunderstorm.png',
    svg: '/svg/outline/thunderstorm.svg',
    text: 'Thunderstorm',
  },
  thunderstormHail: {
    codes: [96, 99],
    image: '/images/thunderstorm-with-hail.png',
    svg: '/svg/outline/thunderstorm-with-hail.svg',
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
