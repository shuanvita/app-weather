<script setup lang="ts"></script>

<template>
  <div
    class="pt-[15px] pb-[7px] px-5 rounded-[20px] bg-card shadow-[2px_4px_5px_0_rgba(0,0,0,0.25)]"
  >
    <h2 class="text-[17px]/[36px] font-medium mb-2.5">Sunrise & Sunset</h2>
    <div class="flex p-2.5 gap-5 mb-[5px]">
      <v-svg name="outline/sunrise" size="48" class="text-[#6A6969]" />
      <div class="flex flex-col">
        <div class="text-[12px]/[20px] text-[#6A6969]">Sunrise</div>
        <div class="text-[17px]/[36px] font-medium">7:06 AM</div>
      </div>
    </div>
    <div class="flex p-2.5 gap-5">
      <v-svg name="outline/sunset" size="48" class="text-[#6A6969]" />
      <div class="flex flex-col gap-1">
        <div class="text-[12px]/[1] text-[#6A6969]">Sunset</div>
        <div class="text-[17px]/[36px] font-medium">7:03 PM</div>
      </div>
    </div>
  </div>
</template>
