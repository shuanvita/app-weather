<script setup lang="ts">
import { inject, ref } from 'vue'
import type { NormalizeWeatherTypes } from '@/pages/weatherPage/model/normalizeWeather.types.ts'
import VInput from '@/shared/ui/VInput/VInput.vue'
import WeatherToday from '@/pages/weatherPage/ui/components/weatherToday/WeatherToday.vue'

const { data, load, currentCity } = inject<NormalizeWeatherTypes>('weatherContext')

const inputValue = ref('')

const handleSearch = () => {
  if (inputValue.value.trim()) {
    load(inputValue.value)
    inputValue.value = ''
  }
}
</script>

<template>
  <div class="weather-panel space-y-12">
    <v-input
      class="max-w-85"
      v-model="inputValue"
      @keyup.enter="handleSearch"
      @click-search="handleSearch"
    />
    <WeatherToday />
  </div>
</template>
