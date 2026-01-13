<script setup lang="ts">
import ForecastWeek from '@/pages/weatherPage/ui/components/forecastWeek/ForecastWeek.vue'
import OverviewCards from '@/pages/weatherPage/ui/components/overviewCards/OverviewCards.vue'
import PrecipitationChart from '@/pages/weatherPage/ui/components/precipitationChart/PrecipitationChart.vue'
import SunriseSunset from '@/pages/weatherPage/ui/components/sunriseSunset/SunriseSunset.vue'
import UiTabs from '@/shared/ui/uiTabs/UiTabs.vue'
import { computed } from 'vue'
import TodayOverviewCards from '@/pages/weatherPage/ui/components/todayOverviewCards/TodayOverviewCards.vue'

const { activeDayIndex } = defineProps({
  activeDayIndex: {
    type: Number,
  },
})

const emit = defineEmits<{
  'click-day': [index: number]
}>()

const tabs = computed(() => {
  return [
    {
      label: 'Today',
      component: TodayOverviewCards,
    },
    {
      label: 'Week',
      component: ForecastWeek,
      props: { activeDayIndex },
    },
  ]
})
</script>

<template>
  <div class="weather-panel space-y-12">
    <ui-tabs :tabs="tabs" @click-day="emit('click-day', $event)" />
    <h2 class="text-[24px] font-semibold">Today’s Overview</h2>
    <OverviewCards />
    <div class="grid grid-cols-[556px_1fr] gap-5">
      <PrecipitationChart />
      <SunriseSunset />
    </div>
  </div>
</template>
