<script setup lang="ts">
import OverviewCard from '@/pages/weatherPage/ui/components/overviewCard/OverviewCard.vue'
import { computed, type ComputedRef, inject } from 'vue'
import type { NormalizeWeatherTypes } from '@/pages/weatherPage/model/normalizeWeather.types.ts'

const { data } = inject<ComputedRef<NormalizeWeatherTypes> | null>('weatherContext', null)

// TODO getCloudCoverText дубль в OverviewCards
const getCloudCoverText = (cloudCover: number): string => {
  if (cloudCover <= 10) return 'Clear' // Ясное
  if (cloudCover <= 30) return 'Sunny' // Солнечно
  if (cloudCover <= 50) return 'Partly Cloudy' // Переменная облачность
  if (cloudCover <= 70) return 'Cloudy' // Облачно
  if (cloudCover <= 90) return 'Overcast' // Пасмурно
  return 'Very Cloudy' // Сплошная облачность
}

const todayOverviewCardsData = computed(() => {
  const weather = data?.value
  if (!weather) return []

  return [
    {
      title: 'Visibility',
      value: weather.visibility,
      text: 'Normal',
      image: '/images/visibility.png',
    },
    {
      title: 'Cloud Cover',
      value: weather.cloudCover,
      text: getCloudCoverText(weather.cloudCover),
      image: '/images/cloudy.png',
    },
  ]
})
</script>

<template>
  <div class="grid grid-cols-2 gap-4">
    <OverviewCard
      v-for="(item, idx) in todayOverviewCardsData"
      :key="`overview-card-${idx}`"
      v-bind="item"
    />
  </div>
</template>
