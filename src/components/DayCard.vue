<script setup>
import IconSun from "../icons/weather/IconSun.vue";
import IconCloud from "../icons/weather/IconCloud.vue";
import IconRain from "../icons/weather/IconRain.vue";

const { weatherCode, temp, date } = defineProps({
  weatherCode: Number,
  temp: Number,
  date: Date,
});
</script>

<template>
  <button
    class="bg-card hover:bg-card-hover flex cursor-pointer flex-col items-center gap-[15px] rounded-[10px] px-5 py-[24px] shadow-[1px_2px_4px_0_#222831]"
  >
    <IconSun v-if="weatherCode === 1000" />
    <IconCloud v-if="weatherCode === 1003" />
    <IconRain v-if="weatherCode === 1009" />
    <div class="text-[20px]">
      {{ date.toLocaleDateString("ru-RU", { weekday: "short" }) }}
    </div>
    <div class="text-[20px] font-bold">{{ temp }} °C</div>
  </button>
</template>
