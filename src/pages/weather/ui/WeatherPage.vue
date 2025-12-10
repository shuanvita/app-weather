<script setup lang="ts">
// import { useWeather } from '../model/useWeather'
import CurrentWeather from './components/CurrentWeather.vue'
import DetailsWeather from './components/DetailsWeather.vue'

// const { data, loading, error, load } = useWeather()
</script>

<template>
  <div class="container xl:grid xl:grid-cols-[452px_1fr] xl:gap-5">
    <CurrentWeather class="mb-8 xl:mb-0" />
    <DetailsWeather />
  </div>
</template>
