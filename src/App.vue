<script setup>
import { ref, computed } from "vue";
import CitySelect from "./components/CitySelect.vue";
import Stat from "./components/Stat.vue";
import Error from "./components/Error.vue";
import DayCard from "./components/DayCard.vue";

const API_ENDPOINT = "http://api.weatherapi.com/v1";

const errorMap = new Map([[1006, "Указанный город не найден"]]);
const data = ref();
let error = ref();
let activeIndex = ref(0);
const dataModified = computed(() => {
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

const errorDisplay = computed(() => errorMap.get(error?.value?.error?.code));

async function getCity(city) {
  const params = new URLSearchParams({
    q: city,
    lang: "ru",
    key: "348040bc18564aab9a2155314253009",
    days: 3,
  });
  const res = await fetch(`${API_ENDPOINT}/forecast.json?${params.toString()}`);
  if (res.status !== 200) {
    error.value = await res.json();
    data.value = null;
    return;
  }
  error.value = null;
  data.value = await res.json();
}
</script>

<template>
  <main class="bg-primary grid min-h-[100vh] place-items-center text-white">
    <div class="bg-secondary rounded-[25px] px-[50px] py-15">
      <Error v-if="error" :error="errorDisplay" />
      <div class="mb-[70px] flex flex-col gap-[80px]" v-if="data">
        <div>
          <Stat v-for="stat in dataModified" v-bind="stat" :key="stat.name" />
        </div>
        <div class="flex gap-[1px]">
          <DayCard
            v-for="(item, idx) in data.forecast.forecastday"
            :key="item.date"
            :weather-code="item.day.condition.code"
            :temp="item.day.avgtemp_c"
            :date="new Date(item.date)"
            :is-active="activeIndex === idx"
            @click="() => (activeIndex = idx)"
          />
        </div>
      </div>
      <CitySelect @select-city="getCity" />
    </div>
  </main>
</template>

<style scoped></style>
