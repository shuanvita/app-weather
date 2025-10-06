<script setup>
import { computed } from "vue";

import IconSun from "../icons/weather/IconSun.vue";
import IconCloud from "../icons/weather/IconCloud.vue";
import IconRain from "../icons/weather/IconRain.vue";

const { weatherCode, temp, date, isActive } = defineProps({
  weatherCode: Number,
  temp: Number,
  date: Date,
  isActive: Boolean,
});

const iconColor = computed(() => {
  return isActive ? "black" : "white";
});
</script>

<template>
  <button
    :class="[
      'bg-card hover:bg-card-hover flex w-full cursor-pointer flex-col items-center gap-[15px] rounded-[10px] px-5 py-[24px] shadow-[1px_2px_4px_0_#222831]',
      {
        'bg-white text-black hover:bg-white hover:text-black': isActive,
      },
    ]"
  >
    <IconSun v-if="weatherCode <= 1003" :color="iconColor" />
    <IconCloud
      v-if="weatherCode >= 1006 && weatherCode < 1063"
      :color="iconColor"
    />
    <IconRain v-if="weatherCode >= 1063" :color="iconColor" />
    <div class="text-[20px]">
      {{ date.toLocaleDateString("ru-RU", { weekday: "short" }) }}
    </div>
    <div class="text-[20px] font-bold">{{ temp }} °C</div>
  </button>
</template>
