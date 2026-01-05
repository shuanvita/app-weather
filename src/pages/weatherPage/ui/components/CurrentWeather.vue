<script setup lang="ts">
import { inject, ref } from 'vue'
import type { NormalizeWeatherTypes } from '@/pages/weatherPage/model/normalizeWeather.types.ts'
import VInput from '@/shared/ui/VInput/VInput.vue'

const { data, load, currentCity } = inject<NormalizeWeatherTypes>('weatherContext')

const inputValue = ref('')

const handleSearch = () => {
  if (inputValue.value.trim()) {
    console.log('inputValue', inputValue.value)
    load(inputValue.value)
    inputValue.value = ''
  }
}
</script>

<template>
  <div class="weather-panel">
    <v-input
      class="max-w-85"
      v-model="inputValue"
      @keyup.enter="handleSearch"
      @click-search="handleSearch"
    />
  </div>
</template>
