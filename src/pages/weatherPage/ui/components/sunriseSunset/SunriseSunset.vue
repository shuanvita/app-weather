<script setup lang="ts">
import { computed, type ComputedRef, inject } from 'vue'
import type { NormalizeWeatherTypes } from '@/pages/weatherPage/model/normalizeWeather.types.ts'
import { useDateFormat } from '@vueuse/core'
import VSvg from '@/shared/ui/VSvg/VSvg.vue'

const normalizeData = inject<ComputedRef<NormalizeWeatherTypes> | null>(
  'normalizeWeatherData',
  null,
)

const data = computed(() => {
  return [
    {
      icon: 'outline/sunrise',
      title: 'Sunrise',
      value: useDateFormat(normalizeData?.value.sunrise, 'h:mm A').value,
    },
    {
      icon: 'outline/sunset',
      title: 'Sunset',
      value: useDateFormat(normalizeData?.value.sunset, 'h:mm A').value,
    },
  ]
})
</script>

<template>
  <article class="px-5 py-4 bg-card-weather rounded-[20px] shadow-[2px_4px_5px_0_rgba(0,0,0,0.25)]">
    <h3 class="mb-3">Sunrise & Sunset</h3>
    <div class="grid gap-2.5">
      <div class="flex gap-5 py-2.5" v-for="(item, index) in data" :key="index">
        <v-svg size="48" class="text-[#6A6969]" :name="item.icon" />
        <div class="flex flex-col font-medium">
          <div class="text-[12px]/[1.6] text-[#6A6969]">{{ item.title }}</div>
          <div class="text-[17px]/[2.1]">{{ item.value }}</div>
        </div>
      </div>
    </div>
  </article>
</template>
