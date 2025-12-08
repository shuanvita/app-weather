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
</script>

<template>
  <div
    class="flex flex-col items-center gap-[49px] rounded-[28px] py-10 px-[47px] border border-black/10 bg-gradient-panel"
  >
    <v-input />
    <WeatherNow />
    <div class="self-start">
      <WeatherInfo :data="weatherInfo" />
    </div>
    <WeatherStats />
  </div>
</template>
