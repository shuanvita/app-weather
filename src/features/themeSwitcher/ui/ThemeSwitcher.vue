<script setup lang="ts">
import { useTheme } from '@/shared/lib/theme'

const { isDark, toggleTheme } = useTheme()
</script>

<template>
  <div class="flex items-center gap-3">
    <v-svg name="outline/sun" size="20" />
    <label class="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" class="sr-only peer" :checked="isDark" @change="toggleTheme" />
      <div
        class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border border border-[#C2D4D3] after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-card-weather"
      ></div>
    </label>
    <v-svg name="outline/moon" size="18" />
  </div>
</template>
