import * as z from "zod"

import { doubleMask } from "@/utils/masks"

const perimetrosSchema = z.object({
  torax: z.string().transform((data) => doubleMask(data)),
  antebraco_d: z.string().transform((data) => Number(data)),
  coxa_d: z.string().transform((data) => Number(data)),
  cintura: z.string().transform((data) => Number(data)),
  antebraco_e: z.string().transform((data) => Number(data)),
  coxa_e: z.string().transform((data) => Number(data)),
  abdomem: z.string().transform((data) => Number(data)),
  braco_d: z.string().transform((data) => Number(data)),
  panturrilha_d: z.string().transform((data) => Number(data)),
  quadril: z.string().transform((data) => Number(data)),
  braco_e: z.string().transform((data) => Number(data)),
  panturrilha_e: z.string().transform((data) => Number(data)),
  pescoco: z.string().transform((data) => Number(data)),
  ombro: z.string().transform((data) => Number(data)),
})

const composicaoSchema = z.object({
  abdominal: z.string().transform((data) => Number(data)),
  coxa: z.string().transform((data) => Number(data)),
  suprailiaca: z.string().transform((data) => Number(data)),
  peitoral: z.string().transform((data) => Number(data)),
  axilar_media: z.string().transform((data) => Number(data)),
  bicepital: z.string().transform((data) => Number(data)),
  tricipital: z.string().transform((data) => Number(data)),
  panturrilha: z.string().transform((data) => Number(data)),
  subescapular: z.string().transform((data) => Number(data)),
  opcional_1: z.string().transform((data) => Number(data)),
  opcional_2: z.string().transform((data) => Number(data)),
})

export const addEvaluationSchema = z.object({
  peso: z.string().transform((data) => Number(data)),
  altura: z.string().transform((data) => Number(data)),
  pressao_arterial: z.string(),
  fc_repouso: z.string().transform((data) => Number(data)),
  consumo_ideal_agua: z.string().transform((data) => Number(data)),
  objetivo: z.string(),
  plano: z.enum(["BASIC", "PRO", "ULTIMATE"], {
    required_error: "Este campo é obrigatório",
  }),
  perimetros: perimetrosSchema,
  composicao: composicaoSchema,
  fator_atv_fisica: z.string().transform((data) => Number(data)),
})

export type AddEvaluationSchema = z.infer<typeof addEvaluationSchema>
