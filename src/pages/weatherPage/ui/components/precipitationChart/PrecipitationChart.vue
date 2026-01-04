<script setup lang="ts">
import { type ComputedRef, inject, ref, watch, onMounted } from 'vue'
import Chart from 'chart.js/auto' // Авто-регистрация
import type { NormalizeWeatherTypes } from '@/pages/weatherPage/model/normalizeWeather.types.ts'

const normalizeData = inject<ComputedRef<NormalizeWeatherTypes> | null>(
  'normalizeWeatherData',
  null,
)
const chartRef = ref<HTMLCanvasElement>()
let chart: any = null

const createChart = () => {
  if (!chartRef.value || !normalizeData?.value?.precipitation?.time?.length) return

  const precipData = normalizeData.value.precipitation!
  const labels = precipData.time?.map((time: string) => {
    const hour = parseInt(time.slice(11, 13))
    return hour === 0 ? '12AM' : hour === 12 ? '12PM' : hour > 12 ? `${hour - 12}PM` : `${hour}AM`
  })

  if (chart) {
    chart.destroy()
    chart = null
  }

  chart = new Chart(chartRef.value.getContext('2d')!, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          data: precipData.values,

          // ✅ ГРАДИЕНТНАЯ ЛИНИЯ (от светлого к тёмному)
          borderColor: '#6A6969',

          // ✅ Заполнение под линией
          backgroundColor: 'rgba(148, 163, 184, 0.08)',
          fill: true, // ← Включи для заливки!

          // ✅ ТОЛЩИНА И СТИЛЬ ЛИНИИ
          borderWidth: 4, // Толще
          borderCapStyle: 'round', // Закруглённые концы
          borderJoinStyle: 'round',

          // ✅ ТЕНИ ДЛЯ ГЛУБИНЫ
          shadowColor: 'rgba(106, 105, 105, 0.5)',
          shadowBlur: 8,
          shadowOffsetX: 0,
          shadowOffsetY: 2,

          pointRadius: 0,
          tension: 0.4,
          spanGaps: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { intersect: false },
      plugins: {
        legend: { display: false },
      },
      scales: {
        x: {
          grid: { display: false, drawBorder: false },
          ticks: {
            color: '#6A6969',
            font: {
              size: 8,
              weight: 'bold',
            },
            padding: 8,
          },
        },
        y: {
          min: 0,
          max: 100,
          ticks: {
            callback: function (value: number, index: number, ticks: any[]) {
              const fixedTicks = [20, 40, 60, 80, 100]
              return fixedTicks.includes(value) ? `${value}%` : null
            },
            font: { size: 8, weight: 'bold' },
            color: '#6A6969',
            stepSize: 20,
          },
          grid: {
            color: '#6A6969',
            tickColor: '#6A6969',
            tickWidth: 1.5,
            tickBorderDash: [5, 12], // Пунктир тиков
            drawTicks: false, // ✅ ВКЛЮЧИ!
            drawOnChartArea: true,
            lineWidth: 0.5, // Тонкая основная линия
            drawBorder: false,
          },
        },
      },
      elements: { point: { radius: 0 } },
      layout: { padding: { left: 12, right: 12, top: 8, bottom: 8 } },
    },
  })
}

onMounted(createChart)
watch(() => normalizeData?.value, createChart, { deep: true })
</script>

<template>
  <article class="px-5 py-4 bg-card-weather rounded-[20px] shadow-[2px_4px_5px_0_rgba(0,0,0,0.25)]">
    <h3 class="mb-4">Precipitation</h3>
    <div class="chart-wrapper">
      <canvas ref="chartRef"></canvas>
    </div>
  </article>
</template>
