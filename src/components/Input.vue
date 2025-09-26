<script setup>
const data = defineModel({ type: String, required: true });
</script>

<template>
  <input
    name="city"
    type="text"
    class="bg-card placeholder:text-placeholder h-[53px] w-[260px] rounded-[10px] px-5 py-4 text-[18px] outline-0"
    placeholder="Введите город"
    v-model="data"
  />
</template>
