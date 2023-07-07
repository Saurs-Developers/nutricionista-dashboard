import { PaginatedResponse } from "."

export interface Cliente {
  id: string
  nome: string
  email: string
  status: string
  sexo: string
  estado: string
  cidade: string
  observacao: any[]
  notas: string
  contato: string
  receitas: any[]
  avaliacoes: any[]
  enabled: boolean
  username: string
  authorities: any[]
  account_non_expired: boolean
  account_non_locked: boolean
  credentials_non_expired: boolean
  is_enabled: boolean
  roles: any[]
  created_at: string
  updated_at: string
  data_nascimento: string
}

export interface ClientesResponse extends PaginatedResponse<Cliente> {}
