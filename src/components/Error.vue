<script setup>
const props = defineProps({
  error: String,
});
</script>

<template>
  <div
    class="bg-card mt-[-60px] mb-15 rounded-br-[25px] rounded-bl-[25px] p-[15px] text-center text-[18px]"
    v-if="props.error"
  >
    {{ props.error }}
  </div>
</template>
