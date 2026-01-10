<script setup lang="ts">
import { computed, inject } from 'vue'
import ForecastDayCard from '@/pages/weatherPage/ui/components/forecastDayCard/ForecastDayCard.vue'

const { data } = inject('weatherContext')

const weatherDetailsData = computed(() => {
  return [
    {
      icon: 'outline/water',
      value: `${data.value.humidity}%`,
      text: 'Humidity',
    },
    {
      icon: 'outline/wind',
      value: `${data.value.windSpeed}km/h`,
      text: 'Wind Speed',
    },
  ]
})
</script>

<template>
  <div
    class="flex items-center gap-8 p-4 bg-card-weather rounded-xl border border-black/10 shadow-[2px_4px_5px_0_rgba(0,0,0,0.25)]"
  >
    <div
      class="flex items-center gap-2 text-body"
      v-for="(item, idx) in weatherDetailsData"
      :key="`weather-detail-item-${idx}`"
    >
      <v-svg :name="item.icon" size="48" />
      <div class="leading-none">
        <div class="text-[26px] font-semibold">{{ item.value }}</div>
        <div class="text-[16px]">{{ item.text }}</div>
      </div>
    </div>
  </div>
</template>
