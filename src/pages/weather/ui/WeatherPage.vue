<script setup lang="ts">
// import { useWeather } from '../model/useWeather'
import CurrentWeather from './components/CurrentWeather.vue'
import DetailsWeather from './components/DetailsWeather.vue'

// const { data, loading, error, load } = useWeather()
</script>

<template>
  <div class="container grid grid-cols-[452px_1fr] gap-5">
    <CurrentWeather />
    <DetailsWeather />
  </div>
</template>
