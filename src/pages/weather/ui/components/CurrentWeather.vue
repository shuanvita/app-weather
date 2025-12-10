<script setup lang="ts">
import { computed } from 'vue'
import WeatherNow from './weatherNow/WeatherNow.vue'
import WeatherInfo from './weatherInfo/WeatherInfo.vue'
import WeatherStats from './weatherStats/WeatherStats.vue'

const weatherInfo = computed(() => [
  {
    icon: 'outline/cloud-rain',
    text: 'Light Rain',
  },
  {
    icon: 'outline/min-temp',
    text: 'Min Temperature - 28°C',
  },
  {
    icon: 'outline/max-temp',
    text: 'Max Temperature - 31°C',
  },
])

const weatherStats = computed(() => [
  {
    icon: 'outline/water',
    value: '83%',
    text: 'Humidity',
  },
  {
    icon: 'outline/wind',
    value: '6km/h',
    text: 'Wind Speed',
  },
])
</script>

<template>
  <div
    class="flex flex-col items-center gap-6 xl:gap-[49px] rounded-[28px] p-5 xl:py-10 xl:px-[47px] border border-black/10 bg-gradient-panel"
  >
    <v-input class="max-w-[341px]" />
    <WeatherNow />
    <div class="self-start">
      <WeatherInfo :data="weatherInfo" />
    </div>
    <WeatherStats :data="weatherStats" />
  </div>
</template>
