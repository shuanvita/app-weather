<script setup lang="ts">
import ForecastDayCard from '@/pages/weatherPage/ui/components/forecastDayCard/ForecastDayCard.vue'
import type { ForecastWeek } from './forecastWeek.types.ts'

const props = defineProps<ForecastWeek>()

const emit = defineEmits<{
  (e: 'click-day', index: number): void
}>()
</script>

<template>
  <div class="grid grid-cols-7 gap-4">
    <ForecastDayCard
      v-for="(item, idx) in props.forecast"
      :key="`forecast-day-${idx}`"
      :is-active="activeDayIndex === idx"
      :temp="item"
      :weather-code="item.weather_code"
      @click="() => emit('click-day', idx)"
    />
  </div>
</template>

<style scoped></style>
