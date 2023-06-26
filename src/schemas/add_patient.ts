import * as z from "zod"

const nameRegex = /^[a-zA-ZÀ-ÿ\s]+$/

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
  sexo: z.string().nonempty({ message: "Este campo é obrigatório." }),
  data_nascimento: z
    .string()
    .nonempty({ message: "Este campo é obrigatório." }),
})
