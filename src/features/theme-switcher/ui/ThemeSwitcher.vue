<script setup lang="ts">
import { useTheme } from '@/shared/lib/theme'

const { isDark, toggleTheme } = useTheme()
</script>

<template>
  <button
    @click="toggleTheme"
    class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all font-medium flex items-center gap-2"
    :aria-label="isDark ? 'Переключить на светлую тему' : 'Переключить на тёмную тему'"
  >
    <span>{{ isDark ? '☀️' : '🌙' }}</span>
    <span class="hidden sm:inline">{{ isDark ? 'Светлая' : 'Тёмная' }}</span>
  </button>
</template>
