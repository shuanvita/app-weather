import { useGeolocation } from '@vueuse/core'
import { computed, onMounted, watch } from 'vue'

const STORAGE_KEY = 'user-location'

export const useGeolocationUser = () => {
  const { coords, error, pause, resume } = useGeolocation({
    enableHighAccuracy: true,
    maximumAge: 5 * 60 * 1000,
  })

  const location = computed(() => ({
    lat: coords.value?.latitude,
    lng: coords.value?.longitude,
  }))

  const saveLocation = () => {
    if (location.value.lat && location.value.lng) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(location.value))
    }
  }

  const loadLocation = () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const { lat, lng } = JSON.parse(saved)
      }
    } catch {
      // Игнор ошибок
    }
  }

  watch(location, saveLocation, { deep: true })
  onMounted(loadLocation)

  return {
    location,
    error,
    pause,
    resume,
    saveLocation,
    loadLocation,
  }
}
