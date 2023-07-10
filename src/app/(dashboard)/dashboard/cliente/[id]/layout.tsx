import { ReactNode } from "react"
import { ArrowLeft } from "lucide-react"
import { headers } from "next/headers"
import Link from "next/link"

import { Cliente } from "@/@types/clientes"
import { Typography } from "@/components/shared/typography"
import ClienteTabs from "@/components/ui/cliente-tabs"

interface Props {
  children: ReactNode
  params: { id: number }
}

export default async function Layout({ children, params }: Props) {
  const { id } = params

  const data = await getCliente(id)

  return (
    <div>
      <Typography variant="h2" weight="bold">
        {data.nome}
      </Typography>
      <Link
        className="flex items-center gap-2 my-4 text-zinc-900 hover:underline"
        href="/dashboard/clientes/1"
      >
        <ArrowLeft size={16} /> Voltar para a listagem de pacientes
      </Link>
      <ClienteTabs id={id} />
      {children}
    </div>
  )
}

const getCliente = async (id: number) => {
  const headersInstance = headers()

  const headerCollection = new Headers(headersInstance)

  headerCollection.append("x-api-uri", "/v1/clientes")

  const res = await fetch("http://localhost:3000/api/avaliacoes", {
    headers: headerCollection,
  })

  const data = await res.json()

  return data
}
