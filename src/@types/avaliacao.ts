import { PaginatedResponse } from "."

export interface Perimetro {
  torax: number
  antebraco_d: number
  coxa_d: number
  cintura: number
  antebraco_e: number
  coxa_e: number
  abdominal: number
  braco_d: number
  panturrilha_d: number
  quadril: number
  braco_e: number
  panturrilha_e: number
  pescoco: number
  ombro: number
}

export interface ComposicaoCorporal {
  abdomen: number
  coxa: number
  suprailiaca: number
  peitoral: number
  axilar_media: number
  bicepital: number
  tricipital: number
  panturrilha: number
  subescapular: number
  opcional_1: number
  opcional_2: number
}

export interface Avaliacao {
  fotos: string[]
  peso: number
  altura: number
  pressao_arterial: string
  fc_repouso: number
  consumo_ideal_agua: number
  objetivo: string
  plano: string
  fator_atv_fisica: number
  perimetro: Perimetro
  composicao_corporal: ComposicaoCorporal
}

export interface Treino {
  titulo: string
  foco: string
  observacao: string
  dias: string[]
}

export interface GetTreino extends Treino {
  id: string
  exercicios: []
  created_at: string
  updated_at: string
}

export interface GetAvaliacao extends Avaliacao {
  id: string
  treinos: []
  dietas: []
}

export interface AvaliacaoResponse extends PaginatedResponse<GetAvaliacao> {}

export interface TreinoResponse extends PaginatedResponse<GetTreino> {}
