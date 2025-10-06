<script setup>
import { computed } from "vue";
import Error from "./Error.vue";
import DayCard from "./DayCard.vue";
import Stat from "./Stat.vue";
import CitySelect from "./CitySelect.vue";

const { data, error, activeIndex } = defineProps({
  data: Object,
  error: Object,
  activeIndex: Number,
});

const emit = defineEmits(["select-index", "select-city"]);

const errorMap = new Map([[1006, "Указанный город не найден"]]);

const errorDisplay = computed(() => errorMap.get(error?.error?.code));

const statData = computed(() => {
  if (!data) return [];
  return [
    {
      label: "Влажность",
      stat: `${data.current.humidity} %`,
    },
    {
      label: "Облачность",
      stat: `${data.current.cloud} %`,
    },
    {
      label: "Ветер",
      stat: `${data.current.wind_kph} км/ч`,
    },
  ];
});
</script>

<template>
  <div class="bg-secondary rounded-[0_25px_25px_0] px-[50px] py-15">
    <Error v-if="error" :error="errorDisplay" />
    <div v-if="data" class="mb-[70px] flex flex-col gap-[80px]">
      <div>
        <Stat v-for="stat in statData" v-bind="stat" :key="stat.name" />
      </div>
      <div class="flex gap-[1px]">
        <DayCard
          v-for="(item, idx) in data.forecast.forecastday"
          :key="item.date"
          :weather-code="item.day.condition.code"
          :temp="item.day.avgtemp_c"
          :date="new Date(item.date)"
          :is-active="activeIndex === idx"
          @click="() => emit('select-index', idx)"
        />
      </div>
    </div>
    <CitySelect @select-city="(city) => emit('select-city', city)" />
  </div>
</template>
