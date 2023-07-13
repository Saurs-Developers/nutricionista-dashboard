import { AsYouType } from "libphonenumber-js"
import * as z from "zod"

const nameRegex = /^[a-zA-ZÀ-ÿ\s]+$/

const observacaoSchema = z
  .object({
    possui_historico_doenca_familiar: z
      .string()
      .optional()
      .transform((data) => (data === "true" ? true : false)),
    historico_doenca_familiar: z.string(),
    possui_historico_doenca_pessoal: z
      .string()
      .optional()
      .transform((data) => (data === "true" ? true : false)),

    historico_doenca_pessoal: z.string(),
    possui_lesao_osteomuscular: z
      .string()
      .optional()
      .transform((data) => (data === "true" ? true : false)),

    lesao_osteomuscular: z.string(),
    possui_historico_cirurgia: z
      .string()
      .optional()
      .transform((data) => (data === "true" ? true : false)),

    historico_cirurgia: z.string(),
    possui_medicacao: z
      .string()
      .optional()
      .transform((data) => (data === "true" ? true : false)),

    medicacao: z.string(),
    possui_habito_fumar_ou_beber: z
      .string()
      .optional()
      .transform((data) => (data === "true" ? true : false)),

    habito_fumar_ou_beber: z.string(),
    possui_alergia_alimentar: z
      .string()
      .optional()
      .transform((data) => (data === "true" ? true : false)),

    alergia_alimentar: z.string(),
    possui_alergia_medicamento: z
      .string()
      .optional()
      .transform((data) => (data === "true" ? true : false)),

    alergia_medicamento: z.string(),

    avaliacao_postural_e_mudancas_musculoesqueleticas: z.string().optional(),
    preferencia_ou_aversao_alimentar: z.string().optional(),
    ciclo_sono: z.string().optional(),
    outras_observacoes: z.string().optional(),
    tempo_trabalho_diario: z.string().optional(),
  })
  .superRefine((values, ctx) => {
    if (
      values.possui_historico_doenca_familiar &&
      values.historico_doenca_familiar.length === 0
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["historico_doenca_familiar"],
        message: "Ao marcar que sim, Este campo se torna obrigatório.",
      })
    }

    if (
      values.possui_historico_doenca_pessoal &&
      values.historico_doenca_pessoal.length === 0
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["historico_doenca_pessoal"],
        message: "Ao marcar que sim, Este campo se torna obrigatório.",
      })
    }

    if (
      values.possui_lesao_osteomuscular &&
      values.lesao_osteomuscular.length === 0
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["lesao_osteomuscular"],
        message: "Ao marcar que sim, Este campo se torna obrigatório.",
      })
    }

    if (
      values.possui_historico_cirurgia &&
      values.historico_cirurgia.length === 0
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["historico_cirurgia"],
        message: "Ao marcar que sim, Este campo se torna obrigatório.",
      })
    }

    if (values.possui_medicacao && values.medicacao.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["medicacao"],
        message: "Ao marcar que sim, Este campo se torna obrigatório.",
      })
    }

    if (
      values.possui_habito_fumar_ou_beber &&
      values.habito_fumar_ou_beber.length === 0
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["habito_fumar_ou_beber"],
        message: "Ao marcar que sim, Este campo se torna obrigatório.",
      })
    }

    if (
      values.possui_alergia_alimentar &&
      values.alergia_alimentar.length === 0
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["alergia_alimentar"],
        message: "Ao marcar que sim, Este campo se torna obrigatório.",
      })
    }

    if (
      values.possui_alergia_medicamento &&
      values.alergia_medicamento.length === 0
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["alergia_medicamento"],
        message: "Ao marcar que sim, Este campo se torna obrigatório.",
      })
    }
  })

export const addPatientSchema = z.z.object({
  nome: z
    .string()
    .min(1, { message: "Este campo é obrigatório." })
    .regex(nameRegex, {
      message: "Não são permitidos caracteres especiais.",
    }),
  email: z.string().email({ message: "Insira um endereço de e-mail válido." }),
  estado: z.string().nonempty({ message: "Este campo é obrigatório." }),
  cidade: z.string().nonempty({ message: "Este campo é obrigatório." }),
  sexo: z.string({ required_error: "Este campo é obrigatório" }),
  data_nascimento: z.date({ required_error: "Este campo é obrigatório" }),
  notas: z.string().optional(),
  contato: z
    .string()
    .min(1, { message: "Este campo é obrigatório" })
    .refine(
      (value) => {
        const phoneNumber = new AsYouType().input(value)
        return phoneNumber.length >= 10
      },
      {
        message: "Número de celular inválido.",
      },
    ),
  objetivo: z.string().optional(),
  observacao: observacaoSchema,
})

export type AddPatientSchema = z.infer<typeof addPatientSchema>
