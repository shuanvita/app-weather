<script setup lang="ts">
import type { ForecastDayCard } from './forecastDayCard.types.ts'
import { getWeatherIcon } from '@/shared/lib/getWeatherIcon.ts'

const { dayWeek, weatherIconCode, temperature, isActive } = defineProps<ForecastDayCard>()
</script>

<template>
  <button
    :class="[
      'flex flex-col items-center gap-2 max-w-26.5 rounded-xl px-4 py-5 border border-black/10 shadow-[2px_4px_5px_0_rgba(0,0,0,0.25)] text-[24px]/none font-semibold hover:bg-primary duration-200',
      isActive ? 'cursor-not-allowed bg-primary shadow-none' : 'bg-card-weather cursor-pointer',
    ]"
  >
    <span>{{ dayWeek }}</span>
    <img
      class="max-w-17.5"
      :src="getWeatherIcon(weatherIconCode).image"
      :alt="getWeatherIcon(weatherIconCode).text"
    />
    <span>{{ Math.round(temperature) }}°</span>
  </button>
</template>
