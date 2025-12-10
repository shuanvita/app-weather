<script setup lang="ts">
const props = defineProps({
  data: {
    type: Array,
  },
})
</script>

<template>
  <div
    class="grid py-4 px-[14px] grid-cols-2 gap-2 bg-card rounded-xl border/10 border-black shadow-[2px_4px_5px_0_rgba(0,0,0,0.25)]"
  >
    <div
      v-for="(item, idx) in props.data"
      :key="`weather-stats-${idx}`"
      class="grid grid-cols-[48px_1fr] items-center gap-2"
    >
      <v-svg :name="item.icon" size="48" />
      <div class="flex flex-col">
        <div class="text-2xl/tight font-semibold">{{ item.value }}</div>
        <div class="text-[16px]/[1]">{{ item.text }}</div>
      </div>
    </div>
  </div>
</template>
