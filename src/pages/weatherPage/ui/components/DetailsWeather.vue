<script setup lang="ts">
import ForecastWeek from '@/pages/weatherPage/ui/components/forecastWeek/ForecastWeek.vue'

const { data, activeDayIndex } = defineProps({
  data: {
    type: Object,
  },
  activeDayIndex: {
    type: Number,
  },
})

const emit = defineEmits<{
  (e: 'click-day', index: number): void
}>()
</script>

<template>
  <div class="weather-panel">
    <ForecastWeek
      :forecast="data"
      :activeDayIndex="activeDayIndex"
      @click-day="emit('click-day', $event)"
    />
  </div>
</template>
