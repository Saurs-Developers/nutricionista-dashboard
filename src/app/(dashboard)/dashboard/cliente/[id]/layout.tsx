import { ReactNode } from "react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

import ClienteTabs from "@/components/ui/cliente-tabs"

interface Props {
  children: ReactNode
  params: { id: number }
}

export default async function Layout({ children, params }: Props) {
  const id = params.id

  console.log(id)

  return (
    <div>
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
