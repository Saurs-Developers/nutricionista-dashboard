import { ReactNode } from "react"

import { Typography } from "@/components/shared/typography"
import { WorkoutDialog } from "@/components/ui/dialogs/workout-dialog"

export default async function Layout({ children }: { children: ReactNode }) {
  const estados = await getEstados()

  return (
    <div>
      <Typography weight="bold" variant="h2">
        Pacientes
      </Typography>
      {/* <PatientsNavBar states={estados} /> */}
      <WorkoutDialog />
      {children}
    </div>
  )
}

const getEstados = async () => {
  const res = await fetch(
    "http://servicodados.ibge.gov.br/api/v1/localidades/estados",
  )

  const data = await res.json()

  return data
}
