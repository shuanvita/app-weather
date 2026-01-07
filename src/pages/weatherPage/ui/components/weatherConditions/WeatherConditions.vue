<script setup lang="ts">
import { computed, inject } from 'vue'
import { getWeatherIcon } from '@/shared/config/weatherConfig.ts'

const { data } = inject('weatherContext')

const weatherConditionsData = computed(() => {
  return [
    {
      icon: getWeatherIcon(data.value.currentIconCode).svg,
      text: getWeatherIcon(data.value.currentIconCode).text,
    },
    {
      icon: 'outline/min-temp',
      text: `Min Temperature: ${data.value.minTemperature} °C`,
    },
    {
      icon: 'outline/max-temp',
      text: `Max Temperature: ${data.value.maxTemperature} °C`,
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
