<script setup></script>

<template>
  <button
    class="cursor-pointer rounded-[10px] bg-[image:var(--color-gradient-button)] p-[14px] text-[20px] font-semibold hover:bg-[image:var(--color-gradient-button-hover)]"
  >
    <div>
      <slot name="icon" />
    </div>
    <slot />
  </button>
</template>
