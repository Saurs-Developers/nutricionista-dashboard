import { ReactNode } from "react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

import ClienteTabs from "@/components/ui/cliente-tabs"

interface Props {
  children: ReactNode
  id: string
}

export default async function Layout({ children, id }: Props) {
  return (
    <div>
      <h2 className="text-3xl">Sr. Java Developer</h2>
      <Link
        className="flex items-center gap-2 my-4 text-zinc-900 hover:underline"
        href="/jobs/1"
      >
        <ArrowLeft size={16} /> Voltar para a listagem de pacientes
      </Link>
      <ClienteTabs id={id} />
      {children}
    </div>
  )
}
