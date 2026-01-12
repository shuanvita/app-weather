<script setup lang="ts">
import { inject } from 'vue'
import { getWeatherIcon } from '@/shared/lib/getWeatherIcon.ts'

const { data, currentCity } = inject('weatherContext')
</script>

<template>
  <div v-if="data?.currentIconCode && data.temperature !== undefined">
    <div class="flex justify-center">
      <img
        class="max-w-79"
        :src="getWeatherIcon(data.currentIconCode).image"
        :alt="getWeatherIcon(data.currentIconCode).text"
      />
    </div>
    <div class="text-[96px] font-bold text-center">{{ Math.round(data.temperature) }}°C</div>
    <div class="flex items-center justify-between text-[25px] pb-5 border-b border-[#C2D4D3]">
      <div>{{ currentCity }}</div>
      <div>
        {{ new Date(data.currentDayWeek).toLocaleDateString('en-US', { weekday: 'long' }) }}
      </div>
    </div>
  </div>
</template>
