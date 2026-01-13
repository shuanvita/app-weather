<script setup lang="ts">
import { provide, readonly, ref } from 'vue'
import { useNormalizeData } from '@/pages/weatherPage/model'
import CurrentWeather from '@/pages/weatherPage/ui/components/CurrentWeather.vue'
import DetailsWeather from '@/pages/weatherPage/ui/components/DetailsWeather.vue'

const activeDayIndex = ref(0)
const { normalizeWeatherData, load, currentCity, loading } = useNormalizeData(activeDayIndex)

const onDayClick = (index: number) => {
  activeDayIndex.value = index
}

provide('weatherContext', {
  data: readonly(normalizeWeatherData),
  load,
  currentCity: readonly(currentCity),
  activeDayIndex: readonly(activeDayIndex),
})
</script>

<template>
  <div v-if="loading" class="animate-pulse">Загрузка...</div>
  <div v-else class="container grid xl:grid-cols-[452px_1fr] gap-5">
    <CurrentWeather />
    <DetailsWeather :active-day-index="activeDayIndex" @click-day="onDayClick" />
  </div>
</template>
