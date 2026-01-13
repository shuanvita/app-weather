<script setup lang="ts">
import { inject } from 'vue'
import type { WeatherContext } from '@/pages/weatherPage/model/normalizeWeather.types.ts'
import ForecastDayCard from '@/pages/weatherPage/ui/components/forecastDayCard/ForecastDayCard.vue'

const emit = defineEmits<{
  'click-day': [index: number]
}>()

const { activeDayIndex } = defineProps({
  activeDayIndex: {
    type: Number,
  },
})

const context = inject<WeatherContext>('weatherContext')
if (!context) throw new Error('WeatherContext not provided')

const data = context.data
</script>

<template>
  <div class="grid grid-cols-7 gap-4">
    <ForecastDayCard
      v-for="(item, idx) in data?.forecastDays"
      :key="`forecast-day-${idx}`"
      :is-active="activeDayIndex === idx"
      v-bind="item"
      @click="() => emit('click-day', idx)"
    />
  </div>
</template>
