import * as z from "zod"

const perimetrosSchema = z.object({
  torax: z.union([z.number(), z.null()], {
    required_error: "Este campo é obrigatório",
  }),
  antebraco_d: z.union([z.number(), z.null()], {
    required_error: "Este campo é obrigatório",
  }),
  coxa_d: z.union([z.number(), z.null()], {
    required_error: "Este campo é obrigatório",
  }),
  cintura: z.union([z.number(), z.null()], {
    required_error: "Este campo é obrigatório",
  }),
  antebraco_e: z.union([z.number(), z.null()], {
    required_error: "Este campo é obrigatório",
  }),
  coxa_e: z.union([z.number(), z.null()], {
    required_error: "Este campo é obrigatório",
  }),
  abdominal: z.union([z.number(), z.null()], {
    required_error: "Este campo é obrigatório",
  }),
  braco_d: z.union([z.number(), z.null()], {
    required_error: "Este campo é obrigatório",
  }),
  panturrilha_d: z.union([z.number(), z.null()], {
    required_error: "Este campo é obrigatório",
  }),
  quadril: z.union([z.number(), z.null()], {
    required_error: "Este campo é obrigatório",
  }),
  braco_e: z.union([z.number(), z.null()], {
    required_error: "Este campo é obrigatório",
  }),
  panturrilha_e: z.union([z.number(), z.null()], {
    required_error: "Este campo é obrigatório",
  }),
  pescoco: z.union([z.number(), z.null()], {
    required_error: "Este campo é obrigatório",
  }),
  ombro: z.union([z.number(), z.null()], {
    required_error: "Este campo é obrigatório",
  }),
})

const composicaoSchema = z.object({
  abdomen: z.union([z.number(), z.null()], {
    required_error: "Este campo é obrigatório",
  }),
  coxa: z.union([z.number(), z.null()], {
    required_error: "Este campo é obrigatório",
  }),
  suprailiaca: z.union([z.number(), z.null()], {
    required_error: "Este campo é obrigatório",
  }),
  peitoral: z.union([z.number(), z.null()], {
    required_error: "Este campo é obrigatório",
  }),
  axilar_media: z.union([z.number(), z.null()], {
    required_error: "Este campo é obrigatório",
  }),
  bicepital: z.union([z.number(), z.null()], {
    required_error: "Este campo é obrigatório",
  }),
  tricipital: z.union([z.number(), z.null()], {
    required_error: "Este campo é obrigatório",
  }),
  panturrilha: z.union([z.number(), z.null()], {
    required_error: "Este campo é obrigatório",
  }),
  subescapular: z.union([z.number(), z.null()], {
    required_error: "Este campo é obrigatório",
  }),
  opcional_1: z.union([z.number(), z.null()], {
    required_error: "Este campo é obrigatório",
  }),
  opcional_2: z.union([z.number(), z.null()], {
    required_error: "Este campo é obrigatório",
  }),
})

export const addEvaluationSchema = z.object({
  peso: z.union([z.number(), z.null()], {
    required_error: "Este campo é obrigatório",
  }),
  altura: z.union([z.number(), z.null()], {
    required_error: "Este campo é obrigatório",
  }),
  pressao_arterial: z.string(),
  fc_repouso: z.union([z.number(), z.null()]),
  consumo_ideal_agua: z.union([z.number(), z.null()], {
    required_error: "Este campo é obrigatório",
  }),
  objetivo: z.string(),
  plano: z.enum(["BASIC", "PRO", "ULTIMATE"], {
    required_error: "Este campo é obrigatório",
  }),
  perimetro: perimetrosSchema,
  composicao_corporal: composicaoSchema,
  fator_atv_fisica: z.union([z.number(), z.null()], {
    required_error: "Este campo é obrigatório",
  }),
})

export type AddEvaluationSchema = z.infer<typeof addEvaluationSchema>
