<script setup>
const props = defineProps({
  label: String,
  stat: String,
});
</script>

<template>
  <div class="flex items-center justify-between gap-6 text-[28px]">
    <pre>{{ props }}</pre>
    <span class="font-bold uppercase">{{ props.label }}</span>
    <span class="font-medium">{{ props.stat }}</span>
  </div>
</template>
