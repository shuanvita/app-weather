import { ref } from 'vue'

export const useForecastDays = () => {
  const activeDayIndex = ref(0)

  const onDayClick = (index: number) => {
    activeDayIndex.value = index
  }

  return {
    activeDayIndex,
    onDayClick,
  }
}
