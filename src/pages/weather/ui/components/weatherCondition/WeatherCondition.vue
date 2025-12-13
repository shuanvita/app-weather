<script setup lang="ts">
import type { WeatherConditionProps } from './weatherCondition.types.ts'

const props = defineProps<WeatherConditionProps>()
</script>

<template>
  <div
    v-for="(item, idx) in props.data"
    :key="`weather-info-${idx}`"
    class="flex items-center gap-2.5"
  >
<!--    <v-svg :name="item.icon" size="24" />-->
    <span>{{ text }}</span>
  </div>
</template>
