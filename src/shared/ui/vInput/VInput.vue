<script setup lang="ts">
const data = defineModel({ type: String, required: true })
</script>

<template>
  <div class="relative w-full">
    <v-svg class="text-[#7E7C7C] absolute top-4 left-5" name="outline/search" />
    <input
      name="city"
      class="bg-[#C2D4D3] placeholder:text-[#7E7C7C] text-black h-[54px] w-full rounded-[25px] pr-5 pl-[69px] py-2.5 text-[16px] outline-0"
      type="text"
      placeholder="Search city..."
      v-model="data"
    />
  </div>
</template>
