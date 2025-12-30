<script setup lang="ts">
import { inject } from 'vue'
import type { NormalizeWeatherTypes } from '@/pages/weatherPage/model/normalizeWeather.types.ts'

const data = inject<NormalizeWeatherTypes>('normalizeWeatherData')
</script>

<template>
  <div class="weather-panel">
    <div></div>
  </div>
</template>
