import { ref, onMounted, watch, nextTick } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import { getCoordsByCity } from '@/pages/weatherPage/api/geocoding.api'
import { getWeatherByCoords } from '@/pages/weatherPage/api/forecast.api'
import { useGeolocationUser } from '@/shared/lib/useGeolocation'
import { weatherConfig } from '@/shared/config'
import type { ForecastResponse, Coords } from '../api/forecast.types.ts'

export const useWeather = () => {
  const data = ref<ForecastResponse | null>(null)
  const coords = ref<Coords | null>(null)
  const lastCity = useLocalStorage('weather-last-city', weatherConfig.defaultCity, {
    initOnMounted: true, // Инициализация строго на клиенте после mounted
  })
  const currentCity = ref(weatherConfig.defaultCity)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const geo = useGeolocationUser()
  const useGeoLocation = ref(true)

  const loadByCoords = async (lat: number, lng: number) => {
    if (!isFinite(lat) || !isFinite(lng)) {
      error.value = 'Неверные координаты'
      loading.value = false
      return
    }

    loading.value = true
    error.value = null

    try {
      data.value = await getWeatherByCoords(lat, lng)
      coords.value = { latitude: lat, longitude: lng }

      // ← Nominatim reverse geocoding (без CORS!)
      const nomResponse = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&addressdetails=1`,
        { headers: { 'User-Agent': 'WeatherApp/1.0' } },
      )
      const nomData = await nomResponse.json()
      currentCity.value = nomData.display_name?.split(',')[0] || 'Неизвестное место' // "Khimki"
      lastCity.value = currentCity.value
    } catch (err) {
      currentCity.value = 'Моя геолокация' // Fallback
      lastCity.value = currentCity.value
      error.value = err instanceof Error ? err.message : 'Ошибка'
    } finally {
      loading.value = false
    }
  }

  const load = async (city: string = weatherConfig.defaultCity) => {
    currentCity.value = city
    lastCity.value = city
    loading.value = true
    error.value = null

    try {
      const coordsResponse = await getCoordsByCity(city)
      if (!coordsResponse.results?.[0]) {
        error.value = `Город "${city}" не найден`
        loading.value = false
        return
      }

      coords.value = coordsResponse.results[0]

      data.value = await getWeatherByCoords(
        coordsResponse.results[0].latitude,
        coordsResponse.results[0].longitude,
      )
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Не удалось загрузить погоду'
      data.value = null
      coords.value = null
    } finally {
      loading.value = false
    }
  }

  const refresh = () => load(currentCity.value)

  watch(lastCity, (newLastCity) => {
    if (newLastCity && newLastCity !== currentCity.value) {
    void load(newLastCity)
    }
  })

  watch(
    () => geo.location.value,
    (newLoc) => {
      if (
        newLoc &&
        typeof newLoc === 'object' &&
        newLoc.lat !== undefined &&
        newLoc.lng !== undefined &&
        isFinite(newLoc.lat) && // ← Защита Infinity
        isFinite(newLoc.lng) &&
        Math.abs(newLoc.lat) <= 90 && // Диапазон lat
        Math.abs(newLoc.lng) <= 180 // Диапазон lng
      ) {
        void loadByCoords(newLoc.lat, newLoc.lng)
      }
    },
    { immediate: false }, // immediate: false — ждём первого реального значения
  )

  onMounted(async () => {
    await nextTick()
    // ← Автозагрузка последнего города из localStorage
    if (lastCity.value && lastCity.value !== weatherConfig.defaultCity) {
      await load(lastCity.value)
    } else {
      // Fallback на гео или default
      setTimeout(() => {
        const loc = geo.location.value
        if (
          loc &&
          typeof loc === 'object' &&
          loc.lat !== undefined &&
          loc.lng !== undefined &&
          isFinite(loc.lat) &&
          isFinite(loc.lng)
        ) {
          void loadByCoords(loc.lat, loc.lng)
        } else {
          void load()
        }
      }, 500)
    }
  })

  return {
    data,
    coords,
    currentCity,
    loading,
    error,
    load,
    refresh,
    geoLocation: geo,
    useGeoLocation,
  }
}
