export type HttpMetod = 'GET' | 'POST' | 'PUT' | 'DELETE'

export interface HttpOptions {
  method: HttpMetod
  params?: URLSearchParams
  baseUrl?: string
}
