<script setup lang="ts">
// import type { IDayWeather } from './dayWeather.types'

// const props = defineProps<IDayWeather>()
</script>

<template>
  <button
    class="flex hover:bg-body cursor-pointer duration-200 flex-col p-4 gap-2 bg-card rounded-xl border/10 border-black shadow-[2px_4px_5px_0_rgba(0,0,0,0.25)]"
  >
    <span class="text-[24px] font-semibold">Sun</span>
    <img width="70" src="/images/windy.png" alt="" />
    <span class="text-[24px] font-semibold">32°</span>
  </button>
</template>
