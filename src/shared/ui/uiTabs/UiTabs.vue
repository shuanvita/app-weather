<script setup lang="ts">
import type { UiTabsItem } from './uiTabs.types'
import { computed, ref } from 'vue'

const { tabs } = defineProps<{
  tabs?: UiTabsItem[]
}>()

const activeTabIndex = ref(1)

const emit = defineEmits<{
  'update:activeTabIndex': [index: number],
  'click-day': [index: number]
}>()

const handleTabClick = (idx: number) => {
  activeTabIndex.value = idx
  emit('update:activeTabIndex', idx)
}

const hasDynamicContent = computed(() => tabs?.[activeTabIndex.value]?.component !== undefined)
</script>

<template>
  <div v-if="tabs?.length">
    <nav class="flex gap-6 text-[24px] font-semibold mb-16">
      <button
        v-for="(item, idx) of tabs"
        :key="`tab-item-${idx}`"
        :class="[
          'cursor-pointer hover:text-white transition-all py-2',
          activeTabIndex === idx
            ? 'text-white underline underline-offset-4 decoration-wavy decoration-2'
            : 'text-white/50 hover:text-white/80',
        ]"
        @click="handleTabClick(idx)"
      >
        {{ item.label }}
      </button>
    </nav>
    <div>
      <component
        v-if="hasDynamicContent"
        :is="tabs![activeTabIndex]?.component!"
        v-bind="tabs![activeTabIndex]?.props || {}"
        v-on="tabs![activeTabIndex]?.on"
        @click-day="emit('click-day', $event)"
      />
      <slot v-else :activeTabIndex="activeTabIndex" />
    </div>
  </div>
</template>
