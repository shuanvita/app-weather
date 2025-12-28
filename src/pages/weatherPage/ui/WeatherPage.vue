<script setup lang="ts">
import CurrentWeather from '@/pages/weatherPage/ui/components/CurrentWeather.vue'
import DetailsWeather from '@/pages/weatherPage/ui/components/DetailsWeather.vue'
</script>

<template>
  <div class="container grid xl:grid-cols-[452px_1fr] gap-5">
    <CurrentWeather />
    <DetailsWeather />
  </div>
</template>
