export type UvIndexText = 'Good' | 'Moderate' | 'High' | 'Very High' | 'Extreme'

export interface OverviewCard {
  title: string
  value: number | undefined
  text: 'Good' | 'Moderate' | 'High' | 'Very High' | 'Extreme'
  image: string
}
