<script setup lang="ts">
const props = defineProps({
  data: {
    type: Object,
  },
})
</script>

<template>
  <div class="py-[15px] px-5 rounded-[20px] bg-card shadow-[2px_4px_5px_0_rgba(0,0,0,0.25)]">
    <div class="text-[17px]/[36px] font-medium mb-[30px]">{{ props.data.title }}</div>
    <div class="flex justify-between items-end">
      <div>
        <div class="text-[48px] font-semibold mb-2.5">{{ props.data.value }}</div>
        <div class="text-[17px]">{{ props.data.text }}</div>
      </div>
      <img :src="props.data.image" alt="" />
    </div>
  </div>
</template>
