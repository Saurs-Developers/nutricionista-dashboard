import { Typography } from "@/components/Typography"

export default function Login() {
  return (
    <section className="flex">
      <div className="h-screen w-1/2 bg-white">
        <div>
          <header>
            <Typography variant="h2">Login</Typography>
            <Typography className="text-slate-500">
              Bem vindo de volta! Por favor, insira seus dados
            </Typography>
          </header>
          <main></main>
          <footer></footer>
        </div>
      </div>
      <div className="h-screen w-1/2 bg-brand-primary"></div>
    </section>
  )
}
