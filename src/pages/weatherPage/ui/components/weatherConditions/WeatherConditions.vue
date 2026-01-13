<script setup lang="ts">
import { computed, inject } from 'vue'
import { getWeatherIcon } from '@/shared/lib/getWeatherIcon.ts'
import type { WeatherContext } from '@/pages/weatherPage/model/normalizeWeather.types.ts'

const weatherContext = inject<WeatherContext>('weatherContext')

const weatherConditionsData = computed(() => {
  if (!weatherContext?.data) return []

  const currentCode = weatherContext.data.value.currentIconCode
  if (typeof currentCode !== 'number') return []

  const iconData = getWeatherIcon(currentCode, 'svg')

  return [
    {
      icon: iconData.svg,
      text: iconData.text,
    },
    {
      icon: 'outline/min-temp',
      text: `Min Temperature:  ${Math.round(weatherContext.data.value.minTemperature)} °C`,
    },
    {
      icon: 'outline/max-temp',
      text: `Max Temperature: ${Math.round(weatherContext.data.value.maxTemperature)} °C`,
    },
  ]
})
</script>

<template>
  <div>
    <div
      v-for="(item, idx) in weatherConditionsData"
      :key="`weather-condition-${idx}`"
      class="flex items-center gap-2.5 text-[17px]/[2.1] font-medium"
    >
      <v-svg :name="item.icon" size="24" />
      <span>{{ item.text }}</span>
    </div>
  </div>
</template>
