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

export interface District {
  id: number
  nome: string
  municipio: City
}

export interface City {
  id: number
  nome: string
  microrregiao: Microregion
}

export interface Microregion {
  id: number
  nome: string
  mesorregiao: Macroregion
}

export interface Macroregion {
  id: number
  nome: string
  UF: Code
}

export interface Code {
  id: number
  sigla: string
  nome: string
  regiao: Region
}
