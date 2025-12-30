<script setup lang="ts">
import ForecastWeek from '@/pages/weatherPage/ui/components/forecastWeek/ForecastWeek.vue'

const { activeDayIndex } = defineProps({
  activeDayIndex: {
    type: Number,
  },
})

const emit = defineEmits<{
  'click-day': [index: number]
}>()
</script>

<template>
  <div class="weather-panel">
    <ForecastWeek :activeDayIndex="activeDayIndex" @click-day="emit('click-day', $event)" />
  </div>
</template>
