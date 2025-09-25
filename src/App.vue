<script setup>
import CitySelect from "./components/CitySelect.vue";
import Stat from "./components/Stat.vue";

const getCity = (city) => {
  console.log(city);
};

const dataStat = [
  {
    label: "Влажность",
    stat: "90%",
  },
  {
    label: "Осадки",
    stat: "0%",
  },
  {
    label: "Ветер",
    stat: "3 м/ч",
  },
];
</script>

<template>
  <main class="bg-primary grid min-h-[100vh] place-items-center text-white">
    <div class="bg-secondary rounded-[25px] px-[50px] py-15">
      <Stat v-for="stat in dataStat" v-bind="stat" :key="stat.name" />
      <CitySelect @select-city="getCity" />
    </div>
  </main>
</template>

<style scoped></style>
