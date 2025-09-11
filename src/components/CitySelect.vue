<script setup>
import Button from "./Button.vue";
import IconLocation from "../icons/iconLocation.vue";

const emit = defineEmits({
  selectCity(payload) {
    console.log(`Validating playload ${payload}`);
    return payload;
  },
});

const select = () => emit("selectCity", "Moscow");
</script>

<template>
  <Button @click="select">
    <IconLocation />
    Изменить город
  </Button>
  <input />
  <Button> Сохранить </Button>
</template>
