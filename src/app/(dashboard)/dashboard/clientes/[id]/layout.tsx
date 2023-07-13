import { ReactNode } from "react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { getServerSession } from "next-auth"

import { Typography } from "@/components/shared/typography"
import ClienteTabs from "@/components/ui/cliente-tabs"
import { nextAuthConfig } from "@/lib/auth"

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
        href={{
          pathname: "/dashboard/clientes",
          query: { page: 1 },
        }}
      >
        <ArrowLeft size={16} /> Voltar para a listagem de pacientes
      </Link>
      <ClienteTabs id={id} />
      {children}
    </div>
  )
}

const getCliente = async (id: number) => {
  const session = await getServerSession(nextAuthConfig)

  const res = await fetch("http://localhost/api/v1/clientes/" + id, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + session!.user.access_token,
    },
  })

  const data = await res.json()

  return data
}
