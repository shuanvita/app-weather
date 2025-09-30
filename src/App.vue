<script setup>
import { ref, computed } from "vue";
import CitySelect from "./components/CitySelect.vue";
import Stat from "./components/Stat.vue";

const API_ENDPOINT = "http://api.weatherapi.com/v1";

const data = ref();
const dataModified = computed(() => {
  if (!data.value) {
    return [];
  }
  return [
    {
      label: "Влажность",
      stat: `${data.value.current.humidity} %`,
    },
    {
      label: "Облачность",
      stat: `${data.value.current.cloud} %`,
    },
    {
      label: "Ветер",
      stat: `${data.value.current.wind_kph} км/ч`,
    },
  ];
});

async function getCity(city) {
  const params = new URLSearchParams({
    q: city,
    lang: "ru",
    key: "348040bc18564aab9a2155314253009",
    days: 3,
  });
  const res = await fetch(`${API_ENDPOINT}/forecast.json?${params.toString()}`);
  data.value = await res.json();
}
</script>

<template>
  <main class="bg-primary grid min-h-[100vh] place-items-center text-white">
    <div class="bg-secondary rounded-[25px] px-[50px] py-15">
      <Stat v-for="stat in dataModified" v-bind="stat" :key="stat.name" />
      <CitySelect @select-city="getCity" />
    </div>
  </main>
</template>

<style scoped></style>
