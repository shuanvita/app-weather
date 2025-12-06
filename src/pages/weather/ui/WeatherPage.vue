<script setup lang="ts">
import CurrentWeather from './components/CurrentWeather.vue'
import DetailsWeather from './components/DetailsWeather.vue'
</script>

<template>
  <div class="container grid grid-cols-[452px_1fr] gap-5">
    <CurrentWeather />
    <DetailsWeather />
  </div>
</template>
