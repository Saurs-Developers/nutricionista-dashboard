import { PaginatedResponse } from "."

export interface Observacao {
  possui_historico_doenca_familiar: boolean
  historico_doenca_familiar: string
  possui_historico_doenca_pessoal: boolean
  historico_doenca_pessoal: string
  possui_lesao_osteomuscular: boolean
  lesao_osteomuscular: string
  possui_historico_cirurgia: boolean
  historico_cirurgia: string
  possui_medicacao: boolean
  medicacao: string
  possui_habito_fumar_ou_beber: boolean
  habito_fumar_ou_beber: string
  possui_alergia_alimentar: boolean
  alergia_alimentar: string
  possui_alergia_medicamento: boolean
  alergia_medicamento: string
  preferencia_ou_aversao_alimentar: string
  avaliacao_postural_e_alteracoes_musculoesqueleticas: string
  tempo_trabalho_diario: string
  ciclo_sono: string
  outras_observacoes: string
}

export interface Cliente {
  id: string
  nome: string
  email: string
  status: string
  sexo: string
  estado: string
  cidade: string
  observacao: Observacao
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
