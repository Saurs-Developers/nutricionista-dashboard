import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { Label } from "@/components/Label"
import { Typography } from "@/components/Typography"

import loginTestimonial from "../../../../public/login-testimonial.png"

export default function Login() {
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
            <div className="grid w-full items-center gap-6">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  className="mt-1"
                  type="email"
                  id="email"
                  placeholder="E-mail"
                />
              </div>
              <div>
                <Label htmlFor="email">Senha</Label>
                <Input
                  className="mt-1"
                  type="password"
                  id="password"
                  placeholder="********"
                />
              </div>
              <Button variant="outline">Login</Button>
            </div>
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
