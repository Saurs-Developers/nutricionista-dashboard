import { Typography } from "@/components/shared/typography"
import { PatientList } from "@/components/ui/patient-list"
import { PatientsNavBar } from "@/components/ui/patients-navbar"

export default async function Dashboard() {
  const res = await fetch(
    "http://servicodados.ibge.gov.br/api/v1/localidades/estados",
  )

  const data = await res.json()

  return (
    <div>
      <Typography weight="bold" variant="h2">
        Pacientes
      </Typography>
      <PatientsNavBar states={data} />
      <PatientList />
      <Typography variant="body" className="mt-5">
        Você não possui nenhum paciente cadastrado.
      </Typography>
    </div>
  )
}
