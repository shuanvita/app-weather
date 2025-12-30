<script setup lang="ts">
import type { ForecastDayCard } from './forecastDayCard.types.ts'
import { getWeatherIcon } from '@/shared/config/weatherConfig.ts'

const { dayWeek, weatherIconCode, temperature, isActive } = defineProps<ForecastDayCard>()
</script>

<template>
  <button
    v-if="temperature !== undefined && weatherIconCode !== undefined"
    :class="[
      'flex flex-col gap-1.5  rounded-xl px-4 py-5 border border-black/10 shadow-[2px_4px_5px_0_rgba(0,0,0,0.25)] text-[24px] font-semibold hover:bg-primary duration-200',
      isActive ? 'cursor-not-allowed bg-primary shadow-none' : 'bg-card-weather cursor-pointer',
    ]"
  >
    <div>{{ dayWeek }}</div>
    <img class="max-w-17.5" :src="getWeatherIcon(weatherIconCode)" alt="Weather Icon" />
    <div>{{ temperature }}°</div>
  </button>
</template>
