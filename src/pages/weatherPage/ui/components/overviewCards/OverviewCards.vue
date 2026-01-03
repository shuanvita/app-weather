<script setup lang="ts">
import { computed, type ComputedRef, inject } from 'vue'
import OverviewCard from '@/pages/weatherPage/ui/components/overviewCard/OverviewCard.vue'
import type { NormalizeWeatherTypes } from '@/pages/weatherPage/model/normalizeWeather.types.ts'

const data = inject<ComputedRef<NormalizeWeatherTypes> | null>('normalizeWeatherData', null)

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
const uvRiskText = computed(() => {
  const uv = data?.value.uvIndex
  if (uv === undefined || uv <= 2) return 'Good'
  if (uv <= 5) return 'Moderate'
  if (uv <= 7) return 'High'
  if (uv <= 10) return 'Very High'
  return 'Extreme'
})

const overviewCardsData = computed(() => {
  const weather = data?.value
  if (!weather) return []

  return [
    {
      title: 'Cloud Cover',
      value: weather.cloudCover,
      text: uvRiskText.value,
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
      text: 'Normal',
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
