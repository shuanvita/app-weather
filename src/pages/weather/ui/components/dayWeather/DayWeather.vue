<script setup lang="ts">
// import type { IDayWeather } from './dayWeather.types'

// const props = defineProps<IDayWeather>()
</script>

<template>
  <button
    class="grid hover:bg-body cursor-pointer duration-200 items-center p-4 gap-2.5 bg-card rounded-xl border/10 border-black shadow-[2px_4px_5px_0_rgba(0,0,0,0.25)]"
  >
    <span class="text-xl xl:text-2xl font-semibold">Sun</span>
    <img class="max-w-[70px] block mx-auto" src="/images/windy.png" alt="" />
    <span class="text-xl xl:text-2xl font-semibold">32°</span>
  </button>
</template>
