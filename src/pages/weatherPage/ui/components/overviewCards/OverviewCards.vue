<script setup lang="ts">
import { computed, type ComputedRef, inject } from 'vue'
import OverviewCard from '@/pages/weatherPage/ui/components/overviewCard/OverviewCard.vue'
import type { NormalizeWeatherTypes } from '@/pages/weatherPage/model/normalizeWeather.types.ts'

const { data } = inject<ComputedRef<NormalizeWeatherTypes> | null>('weatherContext', null)

const getUvRiskColor = (riskText: string): string => {
  switch (riskText) {
    case 'Good':
      return 'text-green-600'
    case 'Moderate':
      return 'text-yellow-600'
    case 'High':
      return 'text-orange-600'
    case 'Very High':
      return 'text-red-600'
    case 'Extreme':
      return 'text-purple-600'
    default:
      return 'text-gray-600'
  }
}

const getCloudCoverText = (cloudCover: number): string => {
  if (cloudCover <= 10) return 'Clear' // Ясное
  if (cloudCover <= 30) return 'Sunny' // Солнечно
  if (cloudCover <= 50) return 'Partly Cloudy' // Переменная облачность
  if (cloudCover <= 70) return 'Cloudy' // Облачно
  if (cloudCover <= 90) return 'Overcast' // Пасмурно
  return 'Very Cloudy' // Сплошная облачность
}
const uvRiskText = computed(() => {
  const uv = data?.value.uvIndex
  if (uv === undefined || uv <= 2) return 'Good'
  if (uv <= 5) return 'Moderate'
  if (uv <= 7) return 'High'
  if (uv <= 10) return 'Very High'
  return 'Extreme'
})

const getPressureText = (pressure: number): string => {
  if (pressure < 1000) return 'Low'
  if (pressure > 1020) return 'High'
  return 'Normal' // 1000-1020
}

const getPressureColor = (pressure: number): string => {
  const text = getPressureText(pressure)
  switch (text) {
    case 'Low':
      return 'text-orange-600' // Низкое — оранжевый (циклон)
    case 'Normal':
      return 'text-green-600' // Норма — зелёный
    case 'High':
      return 'text-blue-600' // Высокое — синий (антициклон)
    default:
      return 'text-gray-600'
  }
}

const overviewCardsData = computed(() => {
  const weather = data?.value
  if (!weather) return []

  return [
    {
      title: 'Cloud Cover',
      value: weather.cloudCover,
      text: getCloudCoverText(weather.cloudCover),
      image: '/images/cloudy.png',
    },
    {
      title: 'UV Index',
      value: data?.value.uvIndex,
      text: 'Moderate',
      image: '/images/uv.png',
    },
    {
      title: 'Pressure (hpa)',
      value: data?.value.pressure,
      text: getPressureText(data?.value.pressure),
      image: '/images/barometer.png',
    },
  ]
})
</script>

<template>
  <div class="grid grid-cols-3 gap-4">
    <OverviewCard
      v-for="(item, idx) in overviewCardsData"
      :key="`overview-card-${idx}`"
      v-bind="item"
    />
  </div>
</template>
