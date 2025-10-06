<script setup>
import { onMounted, provide, ref, watch } from "vue";
import { cityProvideKey, API_ENDPOINT } from "./constants";
import PanelRight from "./components/PanelRight.vue";
import PanelLeft from "./components/PanelLeft.vue";

const data = ref();
let error = ref();
let activeIndex = ref(0);
let city = ref("Москва");

provide(cityProvideKey, city);

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

watch(city, () => getCity(city.value));

onMounted(() => getCity(city.value));
</script>

<template>
  <main
    class="bg-primary flex min-h-[100vh] items-center justify-center text-white"
  >
    <PanelLeft
      v-if="data"
      :day-data="data?.forecast?.forecastday[activeIndex]"
    />
    <PanelRight
      :data="data"
      :error="error"
      :active-index="activeIndex"
      @select-index="(idx) => (activeIndex = idx)"
    />
  </main>
</template>

<style scoped></style>
