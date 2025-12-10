<script setup lang="ts">
import { computed } from 'vue'
import DayWeather from './dayWeather/DayWeather.vue'
import TodayWeatherCard from './todayWeatherCard/TodayWeatherCard.vue'
import TodayPrecipitationCard from './todayPrecipitationCard/TodayPrecipitationCard.vue'
import SunTimesCard from './sunTimesCard/SunTimesCard.vue'

const weatherDays = computed(() => {
  return [
    {
      name: 'Sun',
      image: '/images/windy.png',
      temp: 32,
    },
    {
      name: 'Mon',
      image: 'windy.png',
      temp: 31,
    },
    {
      name: 'Tue',
      image: '/image/windy.png',
      temp: 27,
    },
    {
      name: 'Sun',
      image: '/image/windy.png',
      temp: 32,
    },
    {
      name: 'Mon',
      image: '/image/windy.png',
      temp: 31,
    },
    {
      name: 'Tue',
      image: '/image/windy.png',
      temp: 27,
    },
    {
      name: 'Tue',
      image: '/image/windy.png',
      temp: 27,
    },
  ]
})

const todayWeatherCards = computed(() => {
  return [
    {
      title: 'Air Quality Index',
      value: 53,
      text: 'Good',
      colorText: 'text-[#096]',
      image: '/images/air-quality.png',
    },
    {
      title: 'UV Index',
      value: 3,
      text: 'Moderate',
      colorText: 'text-[#F5CD2F]',
      image: '/images/uv-index.png',
    },
    {
      title: 'Pressure (hpa)',
      value: 1006,
      text: 'Normal',
      image: '/images/barometer.png',
    },
  ]
})
</script>

<template>
  <div class="p-10 pt-[41px] pl-[47px] rounded-[28px] border border-black/10 bg-gradient-panel">
    <div class="flex gap-[26px] text-[24px] font-semibold mb-[66px]">
      <span class="text-white/50">Today</span>
      <span class="underline underline-offset-[30%] decoration-wavy decoration-[10%]">Week</span>
    </div>
    <div class="grid grid-cols-7 gap-4 pl-[5px] mb-[61px]">
      <DayWeather v-for="(item, idx) in weatherDays" :key="idx" v-bind="item" />
    </div>
    <h2 class="text-[24px] font-semibold mb-[46px]">Today’s Overview</h2>
    <div class="grid grid-cols-3 gap-5 mb-[49px]">
      <TodayWeatherCard v-for="(item, idx) in todayWeatherCards" :key="idx" :data="item" />
    </div>
    <div class="grid grid-cols-[556px_1fr] gap-5">
      <TodayPrecipitationCard />
      <SunTimesCard />
    </div>
  </div>
</template>
