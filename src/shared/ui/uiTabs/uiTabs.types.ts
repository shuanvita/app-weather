import type { Component } from 'vue'

export interface UiTabsItem {
  label: string
  component?: Component
  props?: Record<string, unknown>
  on?: Record<string, (event: unknown) => void>
}
