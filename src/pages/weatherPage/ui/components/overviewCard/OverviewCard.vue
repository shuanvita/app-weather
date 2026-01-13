<script setup lang="ts">
import type { OverviewCard } from '@/pages/weatherPage/ui/components/overviewCard/overviewCard.types.ts'

const { title, value, text, image } = defineProps<OverviewCard>()
</script>

<template>
  <article class="px-5 py-4 bg-card-weather rounded-[20px] shadow-[2px_4px_5px_0_rgba(0,0,0,0.25)]">
    <h3 class="text-[17px]/[2.1] font-medium mb-8">{{ title }}</h3>
    <div class="flex gap-3 justify-between">
      <div>
        <div class="text-[48px] font-semibold">{{Math.round(value)}}</div>
        <div
          class="text-[17px]/[2.1] font-bold"
          :class="{
            'text-[#009966]': text === 'Good',
            'text-[#F5CD2F]': text === 'Moderate',
            'text-[#B52D3F]': text === 'High',
          }"
        >
          {{ text }}
        </div>
      </div>
      <div class="max-w-17.5 self-end">
        <img :src="image" alt="" />
      </div>
    </div>
  </article>
</template>
