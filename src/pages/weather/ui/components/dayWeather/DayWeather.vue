<script setup lang="ts">
import type { IDayWeather } from './dayWeather.types'

const props = defineProps<IDayWeather>()
</script>

<template>
  <div
    class="flex flex-col p-4 gap-2 bg-card rounded-xl border/10 border-black shadow-[2px_4px_5px_0_rgba(0,0,0,0.25)]"
  >
    <div>Sun</div>
    <img :src="props.icon" alt="" />
    <div>32°</div>
  </div>
</template>
