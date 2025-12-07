import type { HttpOptions } from './httpClient.types'

export const httpClient = async (
  url: string,
  { method = 'GET', params = {}, baseUrl = '' }: HttpOptions = {},
) => {
  const searchParams = new URLSearchParams(params as Record<string, string>)
  const urlObj = new URL(url, baseUrl)
  urlObj.search = searchParams.toString()

  const res = await fetch(urlObj.toString(), { method })
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`)
  return await res.json()
}
