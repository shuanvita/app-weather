<script setup lang="ts">
// import type { IDayWeather } from './dayWeather.types'

// const props = defineProps<IDayWeather>()
</script>

<template>
  <button
    class="grid hover:bg-body cursor-pointer duration-200 items-center px-4 py-[19px] gap-2.5 bg-card rounded-xl border/10 border-black shadow-[2px_4px_5px_0_rgba(0,0,0,0.25)]"
  >
    <span class="text-2xl/[1] font-semibold">Sun</span>
    <img width="70" src="/images/windy.png" alt="" />
    <span class="text-[24px]/[1] font-semibold">32°</span>
  </button>
</template>
