export type ActionResponse<T> = {
  data: T
  error?: string
  ok: boolean
}
