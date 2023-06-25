"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import Image from "next/image"
import Link from "next/link"
import { signIn } from "next-auth/react"
import * as z from "zod"

import { Button } from "@/components/shared/button"
import { Input } from "@/components/shared/input"
import { Label } from "@/components/shared/label"
import { Typography } from "@/components/shared/typography"
import { loginSchema } from "@/schemas/login"

import loginTestimonial from "../../../../public/login-testimonial.png"

export default function Login() {
  type LoginBody = z.infer<typeof loginSchema>

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginBody>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  })

  const onSubmit = async (data: LoginBody) => {
    console.log(data)
    try {
      signIn("credentials", {
        email: data.email,
        password: data.password,
        callbackUrl: "http://localhost:3000/",
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className="flex">
      <div className="h-screen w-1/2 bg-white flex items-center justify-center">
        <div className="space-y-6 max-w-[446px] w-full">
          <header>
            <Typography variant="h2">Login</Typography>
            <Typography variant="p" className="text-slate-500">
              Bem vindo de volta! Por favor, insira seus dados
            </Typography>
          </header>
          <main className="space-y-6">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid w-full items-center gap-6"
            >
              <div>
                <Input
                  {...register("email")}
                  className="mt-1"
                  type="email"
                  id="email"
                  placeholder="E-mail"
                  error={errors.email?.message}
                  label="E-mail"
                />
              </div>
              <div>
                <Label htmlFor="email">Senha</Label>
                <Input
                  {...register("password")}
                  className="mt-1"
                  type="password"
                  id="password"
                  placeholder="********"
                />
                {errors.password?.message && (
                  <p className="text-sm text-danger">
                    {errors.password?.message}
                  </p>
                )}
              </div>
              <Button disabled={!isValid} variant="default">
                Login
              </Button>
            </form>
          </main>
          <footer className="text-right">
            <Link className="hover:underline" href="#">
              Esqueci minha senha
            </Link>
          </footer>
        </div>
      </div>
      <div className="h-screen w-1/2 flex flex-col gap-8 items-end justify-center bg-brand-primary">
        <div className="text-white self-center flex flex-col">
          <Typography variant="p">
            “Uma experiência única, nunca mais precisei usar a ponta do lápis
            para mais nada...”
          </Typography>
          <Typography className="font-bold" variant="h5">
            Geovanni Sampaio, Treinador e Nutricionista
          </Typography>
        </div>
        <Image src={loginTestimonial} quality={100} alt="" />
      </div>
    </section>
  )
}
