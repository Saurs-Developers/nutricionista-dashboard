export interface Region {
  id: number
  sigla: string
  nome: string
}

export interface State {
  id: number
  sigla: string
  nome: string
  regiao: Region
}

export interface PaginatedResponse<T> {
  total_pages: number
  total_items: number
  results: T[]
  current_page: number
}
