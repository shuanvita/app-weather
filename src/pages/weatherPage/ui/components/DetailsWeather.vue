<script setup lang="ts">
import ForecastWeek from '@/pages/weatherPage/ui/components/forecastWeek/ForecastWeek.vue'
import OverviewCards from '@/pages/weatherPage/ui/components/overviewCards/OverviewCards.vue'
import PrecipitationChart from '@/pages/weatherPage/ui/components/precipitationChart/PrecipitationChart.vue'
import SunriseSunset from '@/pages/weatherPage/ui/components/sunriseSunset/SunriseSunset.vue'

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
  <div class="weather-panel space-y-12">
    <ForecastWeek :activeDayIndex="activeDayIndex" @click-day="emit('click-day', $event)" />
    <h2 class="text-[24px] font-semibold">Today’s Overview</h2>
    <OverviewCards />
    <div class="grid grid-cols-[556px_1fr] gap-5">
      <PrecipitationChart />
      <SunriseSunset />
    </div>
  </div>
</template>
