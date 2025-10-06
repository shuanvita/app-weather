<script setup>
import { computed, inject } from "vue";
import { cityProvideKey } from "../constants.js";
import IconLocation from "../icons/iconLocation.vue";
import IconSun from "../icons/weather/IconSun.vue";
import IconCloud from "../icons/weather/IconCloud.vue";
import IconRain from "../icons/weather/IconRain.vue";

const { dayData } = defineProps({ dayData: Object });
const city = inject(cityProvideKey);

const day = computed(() => {
  return new Date(dayData.date).toLocaleDateString("ru-RU", {
    weekday: "long",
  });
});

const fullDate = computed(() => {
  return new Date(dayData.date).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
});

const weatherCode = computed(() => {
  return dayData.day.condition.code;
});
</script>

<template>
  <div
    class="flex h-[680px] w-[500px] flex-col justify-between rounded-[30px] bg-[url(/bg-left-panel.png)] bg-cover bg-no-repeat px-8 py-12"
  >
    <div>
      <div class="mb-4 text-[37px] font-bold capitalize">
        {{ day }}
      </div>
      <div class="mb-[10px] text-[22px] font-medium">
        {{ fullDate }}
      </div>
      <div class="flex items-center gap-2">
        <IconLocation />
        {{ city }}
      </div>
    </div>
    <div class="flex flex-col">
      <div class="m-[25px]">
        <IconSun v-if="weatherCode <= 1003" size="95" />
        <IconCloud v-if="weatherCode >= 1006 && weatherCode < 1063" size="95" />
        <IconRain v-if="weatherCode >= 1063" size="95" />
      </div>
      <div class="mb-[9px] text-[50px] font-bold">
        {{ dayData.day.avgtemp_c }} °C
      </div>
      <div class="text-[30px] font-bold">{{ dayData.day.condition.text }}</div>
    </div>
  </div>
</template>
