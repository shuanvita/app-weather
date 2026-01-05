<script setup lang="ts">
const city = defineModel({ type: String, required: true })

const emit = defineEmits(['click-search'])

const onClickSearch = () => {
  emit('click-search')
}
</script>

<template>
  <div class="relative w-full">
    <button
      class="text-[#7E7C7C] absolute top-4 left-5 hover:text-black duration-200 cursor-pointer"
      @click="onClickSearch"
    >
      <v-svg name="outline/search" />
    </button>
    <input
      name="city"
      class="bg-[#C2D4D3] placeholder:text-[#7E7C7C] text-black h-13.5 w-full rounded-[25px] pr-5 pl-17 py-2.5 text-[16px] outline-0"
      type="text"
      placeholder="Search city..."
      v-model="city"
    />
  </div>
</template>
