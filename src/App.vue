<script setup>
import CitySelect from "./components/CitySelect.vue";
import Stat from "./components/Stat.vue";
</script>

<template>
  <main class="bg-primary grid min-h-[100vh] place-items-center text-white">
    <div class="bg-secondary rounded-[25px] px-[50px] py-15">
      <CitySelect />
      <Stat label="Влажность" stat="90%" />
    </div>
  </main>
</template>

<style scoped></style>
