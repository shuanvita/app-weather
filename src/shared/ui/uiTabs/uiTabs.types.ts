import type { Component } from 'vue'

export interface UiTabsItem {
  label: string
  component?: Component
  props?: Record<string, unknown>
  on?: Record<string, (...args: unknown[]) => void>
}
