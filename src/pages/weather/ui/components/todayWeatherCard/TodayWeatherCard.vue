<script setup lang="ts">
const props = defineProps({
  data: {
    type: Object,
  },
})
</script>

<template>
  <div class="py-[15px] px-5 rounded-[20px] bg-card shadow-[2px_4px_5px_0_rgba(0,0,0,0.25)]">
    <div class="text-[17px]/[36px] font-medium mb-[43px]">{{ props.data.title }}</div>
    <div class="grid grid-cols-[148px_1fr] justify-between items-end">
      <div class="self-start">
        <div class="text-[48px] font-semibold mb-5">{{ props.data.value }}</div>
        <div :class="['text-[17px] font-bold', props.data.colorText]">
          {{ props.data.text }}
        </div>
      </div>
      <div class="pt-[42px]">
        <img :src="props.data.image" alt="" />
      </div>
    </div>
  </div>
</template>
