<script setup>
import { ref } from "vue";
import PanelRight from "./components/PanelRight.vue";

const API_ENDPOINT = "http://api.weatherapi.com/v1";

const data = ref();
let error = ref();
let activeIndex = ref(0);

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
  <main
    class="bg-primary flex min-h-[100vh] items-center justify-center text-white"
  >
    <div
      class="h-[680px] w-[500px] rounded-[30px] bg-[url(/bg-left-panel.png)] bg-cover bg-no-repeat"
    ></div>
    <PanelRight
      :data="data"
      :error="error"
      :active-index="activeIndex"
      @select-index="(idx) => (activeIndex = idx)"
      @select-city="getCity"
    />
  </main>
</template>

<style scoped></style>
