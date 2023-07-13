import * as z from "zod"

export const addWorkoutSchema = z.object({
  titulo: z
    .string({ required_error: "Este campo é obrigatório." })
    .min(1, { message: "Este campo é obirgatório" }),
  observacores: z.string(),
  dias: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "Você deve selecionar pelo menos um dia da semana.",
  }),
})

export type AddWorkoutSchema = z.infer<typeof addWorkoutSchema>
