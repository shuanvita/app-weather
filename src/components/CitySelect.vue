<script setup>
import { inject, onMounted, ref, watch } from "vue";
import Button from "./Button.vue";
import IconLocation from "../icons/iconLocation.vue";
import Input from "./Input.vue";
import { cityProvideKey } from "../constants.js";

let isCityEdited = ref(false);

const edit = () => {
  isCityEdited.value = true;
};

const selectCity = () => {
  isCityEdited.value = false;
  city.value = inputValue.value;
};

const city = inject(cityProvideKey);
const inputValue = ref(city.value);
</script>

<template>
  <Button class="w-full" v-if="!isCityEdited" @click="edit">
    <IconLocation />
    Изменить город
  </Button>
  <div class="flex items-center gap-3" v-else>
    <Input v-model="inputValue" @keyup.enter="selectCity" v-focus />
    <Button @click="selectCity">Сохранить</Button>
  </div>
</template>
