<script setup lang="ts">
import { provide, ref } from 'vue'
import CurrentWeather from '@/pages/weatherPage/ui/components/CurrentWeather.vue'
import DetailsWeather from '@/pages/weatherPage/ui/components/DetailsWeather.vue'
import { useForecastDays, useWeather } from '@/pages/weatherPage/model'

const { data, load } = useWeather()
const { activeDayIndex, onDayClick } = useForecastDays()

provide('forecastHandlers', { onDayClick })

// const activeDayIndex = ref(0)

// const onClickDay = (index: number) => {
//   activeDayIndex.value = index
//   console.log('Переключен день:', index)
// }
</script>

<template>
  <div class="container grid xl:grid-cols-[452px_1fr] gap-5">
    <CurrentWeather />
    <DetailsWeather
      :data="data?.daily"
      :active-day-index="activeDayIndex"
      @click-day="onDayClick"
    />
  </div>
</template>
