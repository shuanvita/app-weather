<script setup>
import { onMounted, ref, watch } from "vue";
import Button from "./Button.vue";
import IconLocation from "../icons/iconLocation.vue";
import Input from "./Input.vue";

let city = ref("Moscow");
let isCityEdited = ref(false);

const emit = defineEmits(["selectCity"]);

const edit = () => {
  isCityEdited.value = true;
};

const selectCity = () => {
  isCityEdited.value = false;
  emit("selectCity", city.value);
};

onMounted(() => {
  emit("selectCity", city.value);
});
</script>

<template>
  <Button class="w-full" v-if="!isCityEdited" @click="edit">
    <IconLocation />
    Изменить город
  </Button>
  <div class="flex items-center gap-3" v-else>
    <Input v-model="city" @keyup.enter="selectCity" v-focus />
    <Button @click="selectCity">Сохранить</Button>
  </div>
</template>
