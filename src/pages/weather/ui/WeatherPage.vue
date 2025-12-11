<script setup lang="ts">
import { useWeather } from '../model/useWeather'
import CurrentWeather from './components/CurrentWeather.vue'
import DetailsWeather from './components/DetailsWeather.vue'
import { computed } from 'vue'

const { data, loading, error, load } = useWeather()

const currentWeatherProps = computed(() => ({
  temp: data.value?.current.temp_c,
  location: data.value?.location.name,
  condition: data.value?.current.condition.text,
  humidity: data.value?.current.humidity,
  windSpeed: data.value?.current.wind_kph,
  minTemp: data.value?.forecast.forecastday[0].day.mintemp_c,
  maxTemp: data.value?.forecast.forecastday[0].day.maxtemp_c,
}))

const detailsWeatherProps = computed(() => ({
  days: data.value?.forecast.forecastday,
}))
</script>

<template>
  <div class="container xl:grid xl:grid-cols-[452px_1fr] xl:gap-5">
    <CurrentWeather :data="currentWeatherProps" class="mb-8 xl:mb-0" />
    <DetailsWeather :data="detailsWeatherProps" />
  </div>
</template>
