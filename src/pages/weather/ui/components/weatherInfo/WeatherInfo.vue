<script setup lang="ts">
const props = defineProps({
  data: {
    type: Array,
  },
})
</script>

<template>
  <div
    v-for="(item, idx) in props.data"
    :key="`weather-info-${idx}`"
    class="flex items-center gap-2.5"
  >
    <v-svg :name="item.icon" size="24" />
    <span>{{ item.text }}</span>
  </div>
</template>
