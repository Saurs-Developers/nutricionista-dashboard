import { ReactNode } from "react"

import { Typography } from "@/components/shared/typography"
import { PatientsNavBar } from "@/components/ui/patients-navbar"

export default async function Layout({ children }: { children: ReactNode }) {
  const estados = await getEstados()

  return (
    <div>
      <Typography weight="bold" variant="h2">
        Pacientes
      </Typography>
      <PatientsNavBar states={estados} />
      {children}
    </div>
  )
}

const getEstados = async () => {
  const res = await fetch(
    "http://servicodados.ibge.gov.br/api/v1/localidades/estados",
    {
      cache: "default",
    },
  )

  return res.json()
}
