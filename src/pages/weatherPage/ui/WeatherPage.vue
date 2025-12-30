<script setup lang="ts">
import { computed, provide, ref } from 'vue'
import type { NormalizeWeatherTypes } from '@/pages/weatherPage/model/normalizeWeather.types.ts'
import CurrentWeather from '@/pages/weatherPage/ui/components/CurrentWeather.vue'
import DetailsWeather from '@/pages/weatherPage/ui/components/DetailsWeather.vue'
import { useForecastDays, useWeather } from '@/pages/weatherPage/model'

import { useNormalizeData } from '@/pages/weatherPage/model'

const { data, load } = useWeather()
const { activeDayIndex, onDayClick } = useForecastDays()
const { normalizeWeatherData } = useNormalizeData(activeDayIndex)

provide('forecastHandlers', { onDayClick })

// const normalizeWeatherData = computed<NormalizeWeatherTypes>(() => {
//   const daily = data.value?.daily
//   if (!daily) {
//     return { forecastDays: [] }
//   }
//   return {
//     forecastDays: daily.time.map((item, idx) => ({
//       dayWeek: new Date(item).toLocaleDateString('en-US', { weekday: 'short' }),
//       weatherIconCode: daily.weather_code[idx],
//       temperature: daily.temperature_2m_mean[idx],
//     })),
//     temperature: daily.temperature_2m_mean[activeDayIndex.value],
//   }
// })

provide('normalizeWeatherData', normalizeWeatherData)
</script>

<template>
  <div class="container grid xl:grid-cols-[452px_1fr] gap-5">
    <CurrentWeather />
    <DetailsWeather :active-day-index="activeDayIndex" @click-day="onDayClick" />
  </div>
</template>
