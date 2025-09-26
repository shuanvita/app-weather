<script setup>
import { ref } from "vue";
import Button from "./Button.vue";
import IconLocation from "../icons/iconLocation.vue";
import Input from "./Input.vue";

const isCityEdited = ref(false);
let city = ref("Moscow");

const emit = defineEmits({
  selectCity(payload) {
    console.log(`Validating playload ${payload}`);
    return payload;
  },
});

const select = () => {
  isCityEdited.value = false;
  emit("selectCity", "Moscow");
};

const edit = () => {
  isCityEdited.value = true;
};
</script>

<template>
  <Button class="w-full" v-if="!isCityEdited" @click="edit">
    <IconLocation />
    Изменить город
  </Button>
  <div class="flex items-center gap-3" v-else>
    <Input v-model="city" />
    <Button @click="select"> Сохранить </Button>
  </div>
</template>
