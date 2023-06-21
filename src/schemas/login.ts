import * as z from "zod"

export const loginSchema = z.z.object({
  email: z.string().email({ message: "Insira um endereço de e-mail válido." }),
  password: z.string().nonempty(),
})
