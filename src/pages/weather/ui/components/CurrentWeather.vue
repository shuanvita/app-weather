<script setup lang="ts">
import { computed } from 'vue'
import WeatherNow from './weatherNow/WeatherNow.vue'
import WeatherCondition from '@/pages/weather/ui/components/weatherCondition/WeatherCondition.vue'
import WeatherStats from './weatherStats/WeatherStats.vue'

const { data } = defineProps({
  data: {
    type: Object,
  },
})

const weatherNowProps = computed(() => ({
  temp: data?.temp,
  location: data?.location,
}))

const weatherConditionProps = computed(() => ({
  condition: data?.condition,
  minTemp: data?.minTemp,
  maxTemp: data?.maxTemp,
}))

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
    <WeatherNow :data="weatherNowProps" />
    <div class="self-start">
      <WeatherCondition :data="weatherConditionProps" />
    </div>
    <WeatherStats :data="weatherStats" />
  </div>
</template>
