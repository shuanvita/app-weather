import type { HttpOptions } from './httpClient.types'

export const httpClient = async <T>(url: string, options: HttpOptions = { method: 'GET' }) => {
  const { method = 'GET', params, baseUrl = '' } = options
  const queryParams = new URLSearchParams(params || {})

  const response = await fetch(`${baseUrl}${url}${queryParams}`, { method })

  if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`)

  return await response.json() as Promise<T>
}
