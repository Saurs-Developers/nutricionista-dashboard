import * as z from "zod"

const nullValidation = z
  .number({ invalid_type_error: "Este campo deve ser um número" })
  .positive({ message: "Este campo deve ser um número positivo" })
  .nullable()
  .transform((value, ctx) => {
    if (value == null) {
      ctx.addIssue({
        code: "invalid_type",
        expected: "number",
        received: "null",
      })
      return z.NEVER
    }
    return value
  })

const perimetrosSchema = z.object({
  torax: nullValidation,
  antebraco_d: nullValidation,
  coxa_d: nullValidation,
  cintura: nullValidation,
  antebraco_e: nullValidation,
  coxa_e: nullValidation,
  abdominal: nullValidation,
  braco_d: nullValidation,
  panturrilha_d: nullValidation,
  quadril: nullValidation,
  braco_e: nullValidation,
  panturrilha_e: nullValidation,
  pescoco: nullValidation,
  ombro: nullValidation,
})

const composicaoSchema = z.object({
  abdomen: nullValidation,
  coxa: nullValidation,
  suprailiaca: nullValidation,
  peitoral: nullValidation,
  axilar_media: nullValidation,
  bicepital: nullValidation,
  tricipital: nullValidation,
  panturrilha: nullValidation,
  subescapular: nullValidation,
  opcional_1: nullValidation,
  opcional_2: nullValidation,
})

export const addEvaluationSchema = z.object({
  peso: nullValidation,
  altura: nullValidation,
  pressao_arterial: z.string(),
  fc_repouso: z.union([z.number(), z.null()]),
  consumo_ideal_agua: z
    .number({
      invalid_type_error: "Este campo deve ser um número",
      required_error: "Este campo é obrigatório",
    })
    .positive()
    .nullable()
    .transform((value, ctx) => {
      if (value == null) {
        ctx.addIssue({
          code: "invalid_type",
          expected: "number",
          received: "null",
        })
        return z.NEVER
      }
      return value
    }),
  objetivo: z.string({ required_error: "Este campo é obrigatório" }),
  plano: z.enum(["BASIC", "PRO", "ULTIMATE"], {
    required_error: "Este campo é obrigatório",
  }),
  perimetro: perimetrosSchema,
  composicao_corporal: composicaoSchema,
  fator_atv_fisica: nullValidation,
})

export type AddEvaluationSchema = z.infer<typeof addEvaluationSchema>

export type AddEvaluationSchemaInput = z.input<typeof addEvaluationSchema>
export type AddEvaluationSchemaOutput = z.output<typeof addEvaluationSchema>
