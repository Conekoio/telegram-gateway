export type ResponseWrapper<T> = {
  ok: boolean
  error?: string
  result?: T
}
