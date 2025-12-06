<script setup lang="ts">
import DayWeather from './dayWeather/DayWeather.vue'
import { computed } from 'vue'

const weatherDays = computed(() => {
  return [
    {
      name: 'Sun',
      image: '/image/windy.png',
      temp: 32
    },
    {
      name: 'Mon',
      image: '/image/windy.png',
      temp: 31
    },
    {
      name: 'Tue',
      image: '/image/windy.png',
      temp: 27
    },
    {
      name: 'Sun',
      image: '/image/windy.png',
      temp: 32
    },
    {
      name: 'Mon',
      image: '/image/windy.png',
      temp: 31
    },
    {
      name: 'Tue',
      image: '/image/windy.png',
      temp: 27
    },
    {
      name: 'Tue',
      image: '/image/windy.png',
      temp: 27
    },
  ]
})
</script>

<template>
  <div class="flex gap-4 p-10 rounded-[28px] border border-black/10 bg-gradient-panel">
    <DayWeather v-for="(item, idx) in weatherDays" :key="idx" v-bind="item" />
  </div>
</template>
