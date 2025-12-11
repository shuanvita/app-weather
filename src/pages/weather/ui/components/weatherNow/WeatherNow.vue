<script setup lang="ts">
const { data } = defineProps({
  data: {
    type: Object,
  },
})
</script>

<template>
  <div class="flex flex-col w-full items-center space-y-5 pb-2 xl:pb-5 border-b border-[#C2D4D3]">
    <img
      class="max-w-[200px] xl:max-w-[316px]"
      src="/images/cloudy-rain.png"
      alt="current weather"
    />
    <div class="text-[40px] xl:text-[96px]/[1] font-bold mb-5 xl:mb-[37px]">
      {{ data?.temp }}<sup class="text-[30px]/[1] xl:text-[59px]">°C</sup>
    </div>
    <div
      class="flex max-w-[300px] xl:max-w-full w-full justify-between items-center xl:text-[25px] xl:px-3"
    >
      <div>{{ data?.location }}</div>
      <div>Monday</div>
    </div>
  </div>
</template>
